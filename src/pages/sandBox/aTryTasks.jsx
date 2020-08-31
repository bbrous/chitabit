import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow, mediumGrey} from '../../styles/colors'

import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'




// Material UI Context Menu  -------------------------------------

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
 
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import MenuIcon from '@material-ui/icons/Menu';




// Material UI Context Menu  -------------------------------------





// React Sortable HOC ----------------------------------------------

import { SortableContainer, SortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";
 
// React Sortable HOC ----------------------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component




 

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  backgroundColor: 'white',
  width: '100%',
   
  border: '1px solid orange'
})

 
 

const ListWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '100%',
  height: '90%',
  // backgroundColor: 'yellow',

  '& ul': {
    width: '98%',
    // backgroundColor: 'purple',
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },

  '& li': {
    width: '98%',
    backgroundColor: 'white'
    
  }


})

const ItemWrapper = styled(Paper)({
  display: 'flex',
  justifyContent: 'space-between',
 alignItems: 'center',

  width: '99%',
  
  margin: '2px 0',
  
})
const TaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: '1',
 
  textAlign: 'center',
  // backgroundColor: 'blue',
  
})

const TaskBlockWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column' , 
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
 
//  backgroundColor: 'red',
 

  
})

const TaskBlock = styled('div')({
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'flex-start',
  // width: '100%',
 
//  backgroundColor: 'red',
 

  
})

const DragDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: 'orange',
 
  height: '100%',
  width: '1.2rem',
  marginRight: '8px',
  cursor: 'pointer',

  '&:hover' : {
    backgroundColor:chitOrangeLight
  }

  
})

const HamburgerDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: 'orange',
  textAlign: 'center',
  height: '100%',
  width: '2rem',
  cursor: 'pointer'

  
})

const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
   
  // border: '1px solid grey',
 
  marginRight: '1rem',
  // color: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircle= styled('div')({
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid grey',
  borderRadius: '200px',
   
  // color: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const NoteIcon= styled(NotesIcon)({
  backgroundColor: chitOrange,
  borderRadius: '5px',
  fontSize: '.8rem',
  color: 'white',
  margin: '.25rem .5rem ',
  cursor: 'pointer',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1rem',
  margin: '.25rem .5rem',
 cursor: 'pointer',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Hamburger= styled(MenuIcon)({
  
  color:chitOrange,
  fontSize: '1.2rem',
  margin: '0 .5rem',
 cursor: 'pointer',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const IconWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 0 4px 0',
  width: '100%',
  // height: '1rem',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// =======================================

const MenuItemStyled = styled(MenuItem)({
  color: 'red'

  
})


 

const initialState = {
  mouseX: null,
  mouseY: null,
};

const DragHandle = sortableHandle(() => <DragDiv>:::</DragDiv>);
// =================================================
const SortableItem = SortableElement(({ handleClick,value }) => {



  // ----- Popup Menu actions  -------------------------
 
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);







  //--------------------------------------------------- []

  return(


      <ItemWrapper
       
        id = {value.id}
      >
       <DragHandle />
       <TaskWrapper>
        <TaskBlockWrapper>

          <IconWrapper><ClockIcon/><NoteIcon/></IconWrapper>

          <TaskBlock>  
            <div>Title: {value.title}</div> 
            <div>Time: {value.Time}</div>

          </TaskBlock>
          
          <IconWrapper> &nbsp; </IconWrapper>

        </TaskBlockWrapper>

       </TaskWrapper>
        


{/* ############################################################### */}

       

 {/* ############################################################### */}
 {/* <Paper >
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper> */}

      <Hamburger
       ref={anchorRef}
       aria-controls={open ? 'menu-list-grow' : undefined}
       aria-haspopup="true"
       onClick={handleToggle}
      
      
      
      />


<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}> Cancel </MenuItem>
              <MenuItemStyled onClick={handleClose}>Convert / Open to Spotlight: {value.id}</MenuItemStyled>
              <MenuItemStyled onClick={handleClose}>Create a chit</MenuItemStyled>
              
              <MenuItemStyled onClick={handleClose}> Delete </MenuItemStyled>
              {/* <MenuItemStyled onClick={handleClose}> <NoteIcon/> </MenuItemStyled>
              <MenuItemStyled onClick={handleClose}> <ClockIcon/> </MenuItemStyled> */}


                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

      

{/* ############################################################### */}




      </ItemWrapper>
 
  )// end RETURN Sortable Item

})// end SortableItem
    




// ------- Map of Items   --------------------[]


const SortableList = SortableContainer(({ items }) => {
  return (

    <ul>
      {items.map((value, index) => (
         <Fragment>
        <SortableItem key={`item-${index}`} index={index} value={value} 
       
        />
        </Fragment>
      ))}
    </ul>
  );
});





const Tasks = (props) => {

 

/* #######################################################


1.  get array from redux props
    structure array[{id: 1, type: task}, {id: 5, type: 'spotlight'}]

2.  create new "complex" array to use in sortable -- (items in useState)
    use props.task#.id to get title, etc
         or
        props.
3.  in useEffect - 
     a. get new "complex" array after sort
     b. create new array - convert back to simplified form
     c. execute action to update Redux Store





####################################################### */


  // set local state for items -----------------



// ##### REPLACE   REPLACE   REPLACE   ############################

  const [items, setItems] = useState([
    {id: "Item 1", title: "TITLE _ Item 1", Time: '0889977'},
    {id: "Item 2", title: "TITLE _ Item 2", Time: '0889977'},
    {id: "Item 3", title: "TITLE _ Item 3", Time: '0889977'},
    {id: "Item 4", title: "TITLE _ Item 4", Time: '0889977'},
    {id: "Item 5", title: "TITLE _ Item 5", Time: '0889977'},
    {id: "Item 6", title: "TITLE _ Item 6", Time: '0889977'}
  ]);
// ^^^^^^^^^^^^^^^^^^^ REPLACE   REPLACE   REPLACE ^^^^^^^^^^^^^



  useEffect(() => {
    console.log('[ATry] - new items array'  , items)
    
  }, [items]);


  // onSortEnd - creates the new array index after move

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };


 



  return (

      <Wrapper>

        <ListWrapper>
         
         
          {/* ----  Move Items  Executable - --  */}

          <SortableList items={items} onSortEnd={onSortEnd} useDragHandle/>



        </ListWrapper>

      </Wrapper>


  )
}

const actions = {
  // showSpotLight,
  // closeSpotLight
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(Tasks)



