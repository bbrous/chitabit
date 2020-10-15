import React, {useState, useEffect } from 'react'
import {connect} from 'react-redux'
import{updateTaskArray, openModal} from '../../../app/redux/actions/mainActions'
import{chitOrange ,  mediumLightGrey } from '../../../styles/colors'
import{changeDisplaySpotlight } from '../../../app/redux/actions/mainActions'
import TaskTimerDisplay from './timer/TaskTimerDisplay'

import MenuPopup from './MenuPopup'
import TimerPopup from './timer/TimerPopup'
import NotePopup from './NotePopup'

// import {NavLink, withRouter, useLocation} from 'react-router-dom'
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
    
  padding: '0 .5rem',
  margin: ' 0',

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
  margin: '0 8px 4px 2px',
  // marginBottom: '4px',
  cursor: 'pointer',
  
  '&:hover' : {
    // backgroundColor:chitOrangeLight
    border: '1px solid #FADAC1'
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
  
  cursor: 'pointer',



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
  border: '1px solid #CFD0D1',
  borderRadius: '200px',
   
  color: 'white' ,
  backgroundColor: mediumLightGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


 
const NotificationWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  width: '100%',
  height: '1.1rem',
  // backgroundColor: 'yellow',
  marginTop: '4px',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const SpotLightWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row' , 
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  width: '100%',
  marginBottom: '4px',
//  backgroundColor: 'red',
 

  
})

const StatusWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  // width: '100%',
  height: '1.1rem',
  // backgroundColor: 'red',
  marginLeft: '2.2rem',
  fontSize: '.6rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Status= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  color: 'green'
 
})

const IconWrapper= styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // padding: '0 0 4px 0',
  // width: '100%',
  height: '1.1rem',
  // backgroundColor: 'green',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const SpotlightTag= styled('div')({
  display:'block',
  color: 'red',
  fontSize: '.8rem',
  textDecoration: 'underline',
  // height: '1rem',
  // backgroundColor: 'yellow',
  cursor: 'pointer',

  '&:hover': {
    color: chitOrange
  },
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// =======================================



const DragHandle = sortableHandle(() => <DragDiv>:::</DragDiv>);

// =================================================

const SortableItem = SortableElement(({ handleClick, value , spotlightData, spotlightId, changeDisplaySpotlight} ) => {
  // console.log('[SPOT LIGHT TASKS] - BULAH - props are : ' , spotlightId )
  
  console.log('[SPOT LIGHT TASKS] - BULAH HA HA HA - props are : ' , spotlightData.spotlights[spotlightId].tasks )



  let itemObject, itemAddress,  taskId

  if(value.type === 'task'){

    // itemAddress = spotlightData.tasks
    itemAddress = spotlightData.spotlights[spotlightId].tasks

    taskId = value.taskItem 
     itemObject = itemAddress[taskId]
 

    // console.log('[SPOTLIGHT TASKS] --- task id -' , itemObject)



  }
  
  if(value.type === 'spotlight'){

    itemAddress = spotlightData.spotlights
    taskId = value.taskItem 
     itemObject = itemAddress[taskId]
 
    
  }
  const {id, type, title, completed, endEst,  note, timeStamp, parent } = itemObject
  // console.log('[SPOTLIGHT TASKS] BULLLAHH--- ID  -' , id)


  // @@@@@@@@@@@@@@@@@ TEMP  Get from Redux store @@@@@@@@@@@@@@@@@@@@@@
  let currentStatus = 'begun'
  //--------------------------------------------------- []

  return(


      <ItemWrapper
       
        id = {id}
      >
       <DragHandle />

       
       <TaskWrapper>
        <TaskBlockWrapper>
          <SpotLightWrapper>
          <IconWrapper>
            &nbsp; 
          
          {type === 'spotlight' && 
            <SpotlightTag 

            // @@@@@@@@@@@@@@@  HEREERERERERERE  @@@@@@@@@@@@@@@
            // @@@@@@@@@@@@@@@  HEREERERERERERE  @@@@@@@@@@@@@@@

              // Shows up in actions (console.log), but does not trigger Change

            onClick={()=> changeDisplaySpotlight(id)}

            // @@@@@@@@@@@@@@@  HEREERERERERERE  @@@@@@@@@@@@@@@
            // @@@@@@@@@@@@@@@  HEREERERERERERE  @@@@@@@@@@@@@@@
           
            >Spotlight</SpotlightTag>
          } 
          
          </IconWrapper>
        </SpotLightWrapper>

          <TaskBlock>  
            <CheckCircleWrapper>

            {! completed && 
              <CheckCircle/>
              }
              { completed && 
              <CheckCircleCompleted><CheckIcon fontSize = {'small'} /> </CheckCircleCompleted> 
              }


              
              
              </CheckCircleWrapper>




              {! completed && 
              <TitleWrapper> {title}</TitleWrapper> 
              }
              { completed && 
              <TitleWrapperCompleted>  {title}</TitleWrapperCompleted> 
              }


          </TaskBlock>
          
          <NotificationWrapper>

            <StatusWrapper> 
            {type === 'spotlight' && currentStatus === 'begun' && 
              <Status>In progress</Status>
            }

            {type === 'task' && 
              <TaskTimerDisplay/>
         
            }

</StatusWrapper>
            <IconWrapper>


              {note && 
              <NotePopup 
                note = {note} 
                spotlightData = {spotlightData}
              />
              }

               
              <TimerPopup 
                id = {id} 
                spotlightData = {spotlightData}
              />    
            
            </IconWrapper>


        </NotificationWrapper>


        </TaskBlockWrapper>
        
       </TaskWrapper>
        

       <MenuPopup id = {id}/>




      </ItemWrapper>
 
  )// end RETURN Sortable Item

})// end SortableItem
    




// ------- Map of Items   --------------------[]


const SortableList = SortableContainer(({ items, spotlightData, spotlightId,changeDisplaySpotlight  } ) => {
 


  // console.log(' [SPOTLIGHT TASKS] - OOOOOOOO - items', items)
  // console.log(' [SPOTLIGHT TASKS SORT ] MARKEE - OOOOOOOO - props', spotlightData)


  return (

    <ul>
      {items.map((value, index) => (
        
            
        <SortableItem 
          key={`item-${index}`} 
          index={index} 
          value={value} 
          spotlightData = {spotlightData}
          spotlightId = {spotlightId}
          changeDisplaySpotlight= {changeDisplaySpotlight}

       
        />
         
      ))}
    </ul>
  );
});


 

const SpotLightTasks = (props) => {
  // const {id, type, parent, completed, title, timeStamp, endEst, startClock, pausedClock, endClock, clockStatus, noteId, taskArray } = spotLightDisplayed

let spotlightId = props.id

  let spotlightData = props.display.private.data.spotlightData





  
 // get spotlight tasks array-----------------
 let taskArray = props.display.private.data.spotlightData.spotlights[props.id].taskArray
 
 
// moving tasks (items)
  const [items, setItems] = useState(taskArray);

  useEffect(() => {
      
    setItems(taskArray)
  
  }, [taskArray]);
 
// adding new tasks
  let reduxUpdateTaskArray = props.updateTaskArray 
  useEffect(() => {
    

    reduxUpdateTaskArray(spotlightId, items)
    
  }, [ items, spotlightId, reduxUpdateTaskArray]);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//clock functions

  const [timer, setTimer] = useState(0);

// updateDatabase runs on compenent unmount
  const updateDatabase = ()=>{
    console.log('[DUMMY FUNCTION RUN]... hopefully on close')
  }



  useEffect(() => {
    

    // clock stuff here

    return updateDatabase

    
  }, []);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



  // onSortEnd - creates the new array index after move

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };


 



  return (

      <Wrapper>

        <ListWrapper>
         
         
          {/* ----  Move Items  Executable - --  */}

          <SortableList 
            items={items} 
            onSortEnd={onSortEnd}
            useDragHandle
            spotlightData = {spotlightData}
            spotlightId = {spotlightId}
            changeDisplaySpotlight = {props.changeDisplaySpotlight}
            />



        </ListWrapper>

      </Wrapper>


  )
}

const actions = {
  // showSpotLight,
  // closeSpotLight
  updateTaskArray, 
  openModal,
  changeDisplaySpotlight
}

const mapState = state => ({
  display: state
});

export default connect(mapState, actions)(SpotLightTasks)



