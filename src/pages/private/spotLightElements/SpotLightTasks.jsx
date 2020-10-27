import React, {Fragment, useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import{updateTaskArray, openModal, changeDisplaySpotlight, changeTimerStatus, changeTaskCompletedStatus, changeSpotlightCompletedStatus} from '../../../app/redux/actions/mainActions'

import{chitOrange ,  chitOrangeVeryLight,  lightGrey,  mediumLightGrey } from '../../../styles/colors'
// import{changeDisplaySpotlight } from '../../../app/redux/actions/mainActions'
import TaskTimerDisplay from './timer/TaskTimerDisplay'
import {startingElapsedTime} from '../../../app/helpers/timerHelpers'
import { msToStringDisplay} from '../../../app/helpers/dateHelper'

import MenuPopup from './MenuPopup'
import TimerPopup from './timer/TimerPopup'
import NotePopup from './NotePopup'

// import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CheckIcon from '@material-ui/icons/Check';

// React Sortable HOC ----------------------------------------------
import { SortableContainer, SortableElement, sortableHandle } from "react-sortable-hoc";
import arrayMove from "array-move";


const theme = createMuiTheme(); // allows use of mui theme in styled component


// ==== Begin Styling ==================================================

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '98%',
    height: '65%',
  padding: '0 .5rem',
  margin: ' 0',
borderRadius: '5px',
backgroundColor: lightGrey,
overflowY: 'auto',
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
  height: '95%',
 

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
  // border: '1px solid white',
  margin: '4px 0',
  
  
})

const SpotlightItemWrapper = styled(Paper)({
  display: 'flex',
  justifyContent: 'space-between',
 alignItems: 'center',

  width: '99%',
  // border: '1px solid orange',
  backgroundColor: chitOrangeVeryLight,
  margin: '4px 0',
  
  
})

const SpotlightTaskWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexGrow: '1',
 
  textAlign: 'center',
  backgroundColor: 'chitOrangeVeryLight',
  
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
    // backgroundColor:chitOrangeVeryLight
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
  '&:hover' : {
     
    border: '1px solid orange'
  },
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


// ==== End Styling ==============================================
// ==== Sortable Item Begin====================================



const SortableItem = SortableElement(({ handleClick, value , spotlightData, spotlightId, changeDisplaySpotlight, changeTimerStatus, changeTaskCompletedStatus, changeSpotlightCompletedStatus} ) => {

  //  set up drag for Sortable Element using a handle
  const DragHandle = sortableHandle(() => <DragDiv>:::</DragDiv>);

   
 

// ------------------------------------------------------------------ 
/* 1. Get passed variables depending on whether a task is a
      spotlight or a task */

      let itemObject, itemAddress,  taskId, timerData

  if(value.type === 'task'){

    // itemAddress - all tasks in a  a specific spotlight
    itemAddress = spotlightData.spotlights[spotlightId].tasks 

    taskId = value.taskItem 
    itemObject = itemAddress[taskId]
    timerData = spotlightData.spotlights[spotlightId].tasks[taskId].clock
    




  } // end if - task

  if(value.type === 'spotlight'){

    itemAddress = spotlightData.spotlights  //all spotlights
    taskId = value.taskItem 
    itemObject = itemAddress[taskId]

    

  


  }// end if -  spotlight

const { type, title, completed, note } = itemObject




// determine if specific spotlight has been started or not
let currentSpotlightStatus = spotlightData.spotlights[spotlightId].spotlightStatus



 
//  ---- Completed Functions

const handleCompletedStatus = () => {
  

  let taskType = value.type 
    // console.log('[SPOTLIGHT TASKS -- I be clicked - value.type is : ' , taskType)
    // console.log('[SPOTLIGHT TASKS -- I be clicked - taskId is : ' , taskId )
    // console.log('[SPOTLIGHT TASKS -- I be clicked - spotlightData is : ' , spotlightData )
    // console.log('[SPOTLIGHT TASKS -- I be clicked - itemAddress is : ' , itemAddress )

  let completedStatus = itemAddress[taskId].completed
  let newCompletedStatus = completedStatus ? false : true
  
  if(taskType === 'task'){
    
    // 1. get task completed status 
    
    console.log('[SPOTLIGHT TASKS -- Task completed status : ' , completedStatus)
    console.log('[SPOTLIGHT TASKS -- Task newCompletedStatus : ' , newCompletedStatus)
    changeTaskCompletedStatus('spot_1_task_1' )
  }

  if(taskType === 'spotlight'){
    // 1. get task completed status 
   
    console.log('[SPOTLIGHT TASKS -- Spotlight completed status : ' , completedStatus)
    console.log('[SPOTLIGHT TASKS -- Spotlight newCompletedStatus : ' ,  newCompletedStatus)
  }

  console.log('[SPOTLIGHT TASKS] -- -------------------------' )
  changeSpotlightCompletedStatus('spot_1' )
}

  

//  ---- Timer Functions ----------------------------------------

  
const handleUpdateTimerStatus = (evt) => {

  /* About Timer button actions
    Actions take place in TimerPopup.jsx

    Timer calculations in general use formula:
        currentTimestamp - lastDate (in Redux)

     Start: Shown only when timer is incative
        on click - uploads currentTimestamp into lastDate
                 - changes status to "running"
  
                 
     Pause: Shown when a timer is 'running'
        on click - calculates accumulated time and uploads to Redux
                 - changes status to "paused"
                 - clears the lastDate in Redux

     Resume: Shown when a timer is 'paused'
        on click - calculates new lastDate and uploads to Redux
                  - changes status to "running"
                  - clears the lastDate in Redux                

  */

  
  let buttonId = evt.currentTarget.id
 
  const {accumulatedTime, lastDate} = timerData
  let newTimerStatus,  newLastDate, newAccumulatedTime


  let currentTimeStamp  = new Date()

  if(buttonId === 'start'){


    newTimerStatus = 'running'
    newAccumulatedTime = 0
    newLastDate = currentTimeStamp
  }

  if(buttonId === 'paused'){

    let currentMs = new Date(currentTimeStamp).getTime()
    let lastMs = new Date(lastDate).getTime()
    newTimerStatus = 'paused'
    newAccumulatedTime = currentMs - lastMs
    newLastDate = ''
  }

  
  if(buttonId === 'resume'){

    let currentMs = new Date(currentTimeStamp).getTime()
    let lastMs = currentMs - accumulatedTime
                
    newTimerStatus = 'running'
    newAccumulatedTime =  accumulatedTime
    newLastDate = new Date(lastMs)
  }

  if(buttonId === 'reset'){


    newTimerStatus = 'inactive'
    newAccumulatedTime = 0
    newLastDate = ''
  }
 
  
  let newTimerObject = {
    timerStatus: newTimerStatus,
    accumulatedTime: newAccumulatedTime,
    lastDate: newLastDate
  }


  changeTimerStatus(spotlightId , taskId, newTimerObject)
}


// [] ----------------------------------------------------

  return(
<Fragment>
    {type !== 'spotlight'  &&
      <ItemWrapper
       
        id = {taskId}
      >
       <DragHandle />

       
       <TaskWrapper>
        <TaskBlockWrapper>
          <SpotLightWrapper>
          <IconWrapper>
            &nbsp; 
          
          {type === 'spotlight' && 
            <SpotlightTag 
              onClick={()=> changeDisplaySpotlight(taskId)}
            >Spotlight</SpotlightTag>
          } 
          
          </IconWrapper>
        </SpotLightWrapper>

          <TaskBlock>  
            <CheckCircleWrapper
            
            onClick={()=> handleCompletedStatus( taskId)}
            
            >

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
              {type === 'spotlight' && currentSpotlightStatus === 'begun' && 
                <Status>In progress</Status>
              }

              {type === 'task' && 
                <TaskTimerDisplay
                taskId = {taskId} 
                  spotlightId = {spotlightId}
                  timerData = {timerData}
                />
          
              }

            </StatusWrapper>
            <IconWrapper>

              {note && 
              <NotePopup 
                note = {note} 
                spotlightData = {spotlightData}
              />
              }

              {type === 'task' && 
                <TimerPopup 
                  taskId = {taskId} 
                  spotlightId = {spotlightId}
                  timerData = {timerData}
                  handleUpdateTimerStatus = {handleUpdateTimerStatus}
                />    
              }          
            </IconWrapper>
 

        </NotificationWrapper>


        </TaskBlockWrapper>
        
       </TaskWrapper>
        

       <MenuPopup id = {taskId}/>




      </ItemWrapper>
}

{type === 'spotlight'  &&
      <SpotlightItemWrapper
       
        id = {taskId}
      >
       <DragHandle />

       
       <SpotlightTaskWrapper>
        <TaskBlockWrapper>
          <SpotLightWrapper>
          <IconWrapper>
            &nbsp; 
          
          {type === 'spotlight' && 
            <SpotlightTag 
              onClick={()=> changeDisplaySpotlight(taskId)}
            >Spotlight</SpotlightTag>
          } 
          
          </IconWrapper>
        </SpotLightWrapper>

          <TaskBlock>  
            <CheckCircleWrapper
            
            onClick={()=> handleCompletedStatus( taskId)}
            
            >

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
              {type === 'spotlight' && currentSpotlightStatus === 'begun' && 
                <Status>In progress</Status>
              }

              {type === 'task' && 
                <TaskTimerDisplay
                taskId = {taskId} 
                  spotlightId = {spotlightId}
                  timerData = {timerData}
                />
          
              }

            </StatusWrapper>
            <IconWrapper>

              {note && 
              <NotePopup 
                note = {note} 
                spotlightData = {spotlightData}
              />
              }

              {type === 'task' && 
                <TimerPopup 
                  taskId = {taskId} 
                  spotlightId = {spotlightId}
                  timerData = {timerData}
                  handleUpdateTimerStatus = {handleUpdateTimerStatus}
                />    
              }          
            </IconWrapper>
 

        </NotificationWrapper>


        </TaskBlockWrapper>
        
       </SpotlightTaskWrapper>
        

       <MenuPopup id = {taskId}/>




      </SpotlightItemWrapper>
}




</Fragment>







 
  )// end RETURN Sortable Item
  
})// end SortableItem
    




// ------- Map of Items   --------------------[]


const SortableList = SortableContainer(({ items, spotlightData, spotlightId,changeDisplaySpotlight, changeTimerStatus, changeTaskCompletedStatus,  changeSpotlightCompletedStatus } ) => {
 


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
          changeTimerStatus = { changeTimerStatus}
          changeTaskCompletedStatus = {changeTaskCompletedStatus}
          changeSpotlightCompletedStatus = {changeSpotlightCompletedStatus}
       
        />
         
      ))}
    </ul>
  );
});


 

const SpotLightTasks = (props) => {
  // const {id, type, parent, completed, title, timeStamp, endEst, startClock, pausedClock, endClock, clockStatus, noteId, taskArray } = spotLightDisplayed

let spotlightId = props.id
  // console.log('[SPOTLIGHT TASKS] BULLLAHH--- ID  -' , spotlightId)
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
            changeTimerStatus = {props.changeTimerStatus}
            changeTaskCompletedStatus = {props.changeTaskCompletedStatus}
            changeSpotlightCompletedStatus = {props.changeSpotlightCompletedStatus}
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
  changeDisplaySpotlight,
  changeTimerStatus,
  changeTaskCompletedStatus,
  changeSpotlightCompletedStatus
  
}

const mapState = state => ({
  display: state
});

export default connect(mapState, actions)(SpotLightTasks)



