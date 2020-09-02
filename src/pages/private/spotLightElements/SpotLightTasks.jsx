import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import{updateTaskArray} from '../../../app/redux/actions/mainActions'
import{chitOrange, veryLightGrey, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow, mediumLightGrey, mediumGrey} from '../../../styles/colors'


import MenuPopup from './MenuPopup'
import ClockPopup from './ClockPopup'
import NotePopup from './NotePopup'

import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CheckIcon from '@material-ui/icons/Check';








// Material UI Context Menu  -------------------------------------





// React Sortable HOC ----------------------------------------------

import { SortableContainer, SortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";
 
// React Sortable HOC ----------------------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component




 

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '98%',
    
  padding: '.25rem .5rem',
  margin: '.25rem 0',

// backgroundColor: lightGrey,

  fontSize: '.8rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
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
  
  margin: '4px 0',
  
})
const TaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: '1',
 
  textAlign: 'center',
  backgroundColor: 'white',
  
})

const SpotlightWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: '1',
 
  textAlign: 'center',
  backgroundColor: chitOrangeLight,
  
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
  marginBottom: '4px',
  cursor: 'pointer',

  '&:hover' : {
    backgroundColor:chitOrangeLight
  }

  
})

const TitleWrapper= styled('div')({
  
  color: 'black',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TitleWrapperCompleted = styled('div')({
  
  color: mediumLightGrey,

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
   
  // border: '1px solid grey',
 
  marginRight: '1rem',
  // color: mediumLightGrey,

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircle= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid grey',
  borderRadius: '200px',
   
  // color: mediumLightGrey,
  // backgroundColor: lightGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const CheckCircleCompleted = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid #727376',
  borderRadius: '200px',
   
  color: 'white',
  backgroundColor: mediumGrey,


  


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

const SpotlightTag= styled('div')({
  color: chitBlueDull,
  fontSize: '.8rem',
  // height: '1rem',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// =======================================



const DragHandle = sortableHandle(() => <DragDiv>:::</DragDiv>);
// =================================================
const SortableItem = SortableElement(({ handleClick,value }) => {



  //--------------------------------------------------- []

  return(


      <ItemWrapper
       
        id = {value.id}
      >
       <DragHandle />

       
       <TaskWrapper>
        <TaskBlockWrapper>
        <IconWrapper>
          &nbsp; 
          
          {value.type === 'spotlight' && 
            <SpotlightTag>Spotlight</SpotlightTag>
          } 
          
          </IconWrapper>
          

          <TaskBlock>  
            <CheckCircleWrapper>

            {! value.completed && 
              <CheckCircle/>
              }
              { value.completed && 
              <CheckCircleCompleted><CheckIcon fontSize = {'small'} /> </CheckCircleCompleted> 
              }


              
              
              </CheckCircleWrapper>




              {! value.completed && 
              <TitleWrapper>Title: {value.title}</TitleWrapper> 
              }
              { value.completed && 
              <TitleWrapperCompleted>Title: {value.title}</TitleWrapperCompleted> 
              }


          </TaskBlock>
          
          
          <IconWrapper>
          &nbsp;
              <ClockPopup id = {value.id}/>
              <NotePopup id = {value.id}/>
            </IconWrapper>
        </TaskBlockWrapper>
        
       </TaskWrapper>
        

       <MenuPopup id = {value.id}/>




      </ItemWrapper>
 
  )// end RETURN Sortable Item

})// end SortableItem
    




// ------- Map of Items   --------------------[]


const SortableList = SortableContainer(({ items }) => {
  return (

    <ul>
      {items.map((value, index) => (
        
            
        <SortableItem key={`item-${index}`} index={index} value={value} 
       
        />
         
      ))}
    </ul>
  );
});





const SpotLightTasks = (props) => {

 

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
    {id: "Item 1", title: "TITLE _ Item 1", completed: false, type: 'task'},
    {id: "Item 2", title: "TITLE _ Item 2", completed: true, type: 'task'},
    {id: "Item 3", title: "TITLE _ Item 3", completed: true, type: 'spotlight'},
    {id: "Item 4", title: "TITLE _ Item 4", completed: false, type: 'task'},
    {id: "Item 5", title: "TITLE _ Item 5", completed: false, type: 'task'},
    {id: "Item 6", title: "TITLE _ Item 6", completed: false, type: 'task'}
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
  updateTaskArray
}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(SpotLightTasks)



