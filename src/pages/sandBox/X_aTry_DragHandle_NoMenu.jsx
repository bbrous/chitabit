import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'


import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// Material UI Context Menu  -------------------------------------

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Material UI Context Menu  -------------------------------------





// React Sortable HOC ----------------------------------------------

import { SortableContainer, SortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";
 
// React Sortable HOC ----------------------------------------------






const BodyWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  backgroundColor: 'white',
  width: '100vw',
  height: '100vh',

})

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  backgroundColor: 'white',
  width: '99vw',
  height: '99vh',
  border: '1px solid orange'
})

const TryIt= styled(NavLink)({
  display: 'block',
  position: 'absolute',
  top: '1rem',
  right: '1rem',

  height: '2rem',
  width: '2rem',
  backgroundImage: 'radial-gradient(#FF6347, #DC143C)',
  borderRadius: '50px',

  '&:hover': {
    backgroundImage: 'radial-gradient(#FF6347, orange)',
  }

})

const PageHeader= styled('div')({
  fontSize: '1.2rem',
  color: 'orange',
  marginBottom: '2rem',
})

const ContentArea = styled('div')({
  display: 'block',
  width: '90%',
  height: '90%',
  border: '1px solid black'
})

const DivArea = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '300px',
  height: '90%',
  backgroundColor: 'yellow',

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
  height: '3rem',
  margin: '2px 0',
  
})
const MenuHeader = styled('div')({
  display: 'block',
  backgroundColor: 'lightyellow',
  textAlign: 'center'

  
})

const DragDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'orange',
  textAlign: 'center',
  height: '100%',
  width: '2rem'

  
})




 

const initialState = {
  mouseX: null,
  mouseY: null,
};

const DragHandle = sortableHandle(() => <DragDiv>::</DragDiv>);
// =================================================
const SortableItem = SortableElement(({ handleClick,value }) => {



  // ----- Context Menu actions  -------------------------

    // set local state for Rigth Click location  --

    const [state, setState] = useState(initialState);


    const handleRightClick = (event) => {
      event.preventDefault();
      
      // console.log( '[aTry] event', event.currentTarget.id)
      setState({
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4,
      

      });// end setState

    }; // end handleRightClick

    const handleClose = () => {
      setState(initialState);
      
    };

  //--------------------------------------------------- []

  return(


      <ItemWrapper
        onContextMenu={handleRightClick} 
        onClick = {handleClose}
        id = {value.id}
      >
       <DragHandle />
        <div>Title: {value.title}</div> 
        <div>Time: {value.Time}</div>
 
      <Menu
              keepMounted
              open={state.mouseY !== null}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={
                state.mouseY !== null && state.mouseX !== null
                  ? { top: state.mouseY, left: state.mouseX }
                  : undefined
              }
            >
              <MenuHeader> Options for {value.title}</MenuHeader>
              <MenuItem onClick={handleClose}> Cancel </MenuItem>
              <MenuItem onClick={handleClose}>Convert / Open to Spotlight: {value.id}</MenuItem>
              <MenuItem onClick={handleClose}>Create a chit</MenuItem>
              <MenuItem onClick={handleClose}>Add a Note</MenuItem>
              <MenuItem onClick={handleClose}> Delete </MenuItem>
              
            </Menu>
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





const ATry = (props) => {

 

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
    <BodyWrapper>
      <Wrapper>
        <TryIt to="/">  </TryIt>
        <PageHeader> aTry Javascript and Redux  </PageHeader>
        
        <ContentArea>
        <div> Put Content Here </div>
        <DivArea>
         
         
          {/* ----  Move Items  Executable - --  */}

          <SortableList items={items} onSortEnd={onSortEnd} useDragHandle/>



        </DivArea>
        <div>
       
        </div>

        </ContentArea>
      </Wrapper>
    </BodyWrapper>

  )
}

const actions = {
  // showSpotLight,
  // closeSpotLight
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(ATry)



