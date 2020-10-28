import { createReducer } from './reducerUtil'
import produce from 'immer';
// import cuid from 'cuid';


// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import InitialStore from '../store/InitialStore'

import {  
          OPEN_CLOSE_SIDE_PANEL,
          // SHOW_SPOTLIGHT,
          // CLOSE_SPOTLIGHT,
          CHANGE_DISPLAY_SPOTLIGHT,
          CHANGE_TASK_COMPLETED_STATUS,
          CHANGE_SPOTLIGHT_COMPLETED_STATUS,

          ADD_SPOTLIGHT,
          OPEN_MODAL,
          CLOSE_MODAL,
          // OPEN_SPOTLIGHT_PAGE,
          // CLOSE_SPOTLIGHT_PAGE,
          // CHANGE_DISPLAY, 
          UPDATE_TASK_ARRAY,
          ADD_TASK,

          CHANGE_TIMER_STATUS
        
        } from '../store/storeConstants';




        const initialState = {

          view: '',
          displaySidePanel: 'hide',
          display: 'spotlight',

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

          modalDisplayed: false,
          modalType: 'spotLightForm',

          spotLightDisplay: {
            displaySpotLight: 'show',  // or 'none'  or 'show ' 
            displayedSpotLightId: 'spot_1',
            // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
            
            // displaySpotLightPage: false,
          },


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

      

      
          journalDisplay: {
            currentDaY: '',
            currentSection: '',
            lastSection: ''
          },
      
      
      
          data: InitialStore
      
        }

 
const reducer_Main = produce((draft = initialState, action) => {
    const { type, payload } = action;

    switch(type) {

    case OPEN_CLOSE_SIDE_PANEL: 
          {
         
          draft.displaySidePanel = payload.displaySidePanel
          return draft;
        }// end OPEN_CLOSE_SIDE_PANEL


   

    case OPEN_MODAL : 
    {
     draft.modalType = 'spotLightForm'
     draft.modalDisplayed = true
     return draft;
     
   }// end CHANGE_DISPLAY_SPOTLIGHT    

    case CLOSE_MODAL : 
    {
     draft.modalType = ''
     draft.modalDisplayed = false
     return draft;
     
   }// end OPEN_MODAL

    case CHANGE_DISPLAY_SPOTLIGHT : 
         {

          // console.log('REDUCER MAIN - CHANGE_DISPLAY_SPOTLIGHT clicked reduce ')
          draft.spotLightDisplay.displayedSpotLightId = payload.displayedSpotLightId
          return draft;
          
        }// end CHANGE_DISPLAY_SPOTLIGHT

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


      case CHANGE_TASK_COMPLETED_STATUS : 
        {

          let spotId = payload.spotId
          let taskId = payload.taskId
          let newCompletedStatus = payload.completed

         console.log('xxx REDUCER MAIN - CHANGE_TASK_COMPLETED_STATUS clicked reduce ', payload)

         draft.data.spotlightData.spotlights[spotId].tasks[taskId].completed= newCompletedStatus

        return draft
         
       }// end CHANGE_TASK_COMPLETED_STATUS


       

       case CHANGE_SPOTLIGHT_COMPLETED_STATUS : 
       {

        let spotId = payload.spotId
          
          let spotlightStatus = payload.spotlightStatus
 
        console.log('REDUCER MAIN - aaCHANGE_SPOTLIGHT_COMPLETED_STATUS clicked reduce ', spotlightStatus)


        draft.data.spotlightData.spotlights[spotId].spotlightStatus = spotlightStatus
       

       return draft
        
      }// end CHANGE_SPOTLIGHT_COMPLETED_STATUS
        
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

      case CHANGE_TIMER_STATUS : 
        {

          let spotId = payload.spotId
          let taskId = payload.taskId
          let newTimerObject = payload.newTimerObject
          

          draft.data.spotlightData.spotlights[spotId].tasks[taskId].clock = newTimerObject
         console.log('REDUCER MAIN - CHANGE_TIMER_STATUS clicked reduce ', newTimerObject)
           

         return draft;
         
       }// end CHANGE_TIMER_STATUS

        

    case UPDATE_TASK_ARRAY : 
         {

          

          let id = payload.id
          let taskArray = payload.taskArray
          draft.data.spotlightData.spotlights[id].taskArray = taskArray
          return draft;
          
        }// end CHANGE_DISPLAY_SPOTLIGHT

     
    case ADD_TASK : 
        {
         let id = payload.id
          let taskType = payload.task.taskType
          let todo = payload.task.todo
          // let title = payload.task.title
          // let taskItem = cuid().toString()
          let taskItem = payload.newTaskId
          let timestamp = new Date()

          if(taskType ==='spotlight'){
            // console.log('REDUCER MAIN - Im a spotlight task @@@@@@ ')


        let spotlightTaskArray  = {taskItem: taskItem, completed: false, title: todo, type: 'spotlight', spotHolder: id, id: taskItem }

        let spotlightTask  = {
          id: taskItem, 
          completed: false,
          title: todo, 
          type: 'spotlight', 
          parent: id,
          spotlightStatus: 'inactive', // begun, inactive
          timeStamp:"2020-09-25T04:46:20.619Z",
          clock: {
            timerStatus: null, // inactive, running, paused, stopped
            accumulatedTime: 0,
            lastDate: null
           }, 
          // endEst:"2020-10-15T04:46:20.619Z",
          // note: 'note1',
          taskArray: [
            {
              taskItem: 'task0' ,
              completed: false, 
              type: 'task'
            }

          ],

          tasks  : {
            'task0' : {
            id: 'task0',
            type: 'task',  
            completed: false,
           
            title: 'Spotlight begin', 
            clock: {
              timerStatus: 'inactive', // inactive, running, paused, stopped
              accumulatedTime: 0,
              lastDate: null
            },   

            timeStamp: timestamp,

          }
        }

          
          
        }

         draft.data.spotlightData.spotlights[id].taskArray.push(
          spotlightTaskArray
         )

         draft.data.spotlightData.spotlights[taskItem] = spotlightTask


        }else{
    

          let taskTaskArray = {taskItem: taskItem, completed: false, title: todo, type: 'task', parent: id}

          let taskTask = {id: taskItem, completed: false, title: todo, type: 'task', spotHolder: id ,
          clock: {
            timerStatus: 'inactive', // inactive, running, paused, stopped
            accumulatedTime: 0,
            lastDate: null
          },             
          
        }

          draft.data.spotlightData.spotlights[id].taskArray.push(
           taskTaskArray
          )
 
          draft.data.spotlightData.spotlights[id].tasks[taskItem] = taskTask

        }






         return draft;
         
       }// end CHANGE_DISPLAY_SPOTLIGHT

        case ADD_SPOTLIGHT : 
        {

          //Add Spotlight 

          console.log('REDUCER MAIN - ADD_SPOTLIGHT reducer clicked @@@@@@ ', payload)
          
          let timestamp = new Date()
          // let newSpotLightId = cuid().toString()
          let newSpotlightId = payload.newSpotlightId

          let spotlight  = {
            id: newSpotlightId,
            type: 'spotlight', 
            parent: '',
            completed: false,
            title: payload.spotlight.title, 
    
            timeStamp: timestamp,
            endEst:payload.spotlight.endEst,
            mos: payload.spotlight.mos ,
            wks: payload.spotlight.wks ,
            days: payload.spotlight.days ,
            hrs: payload.spotlight.hrs ,
            mins: payload.spotlight.mins ,



            

            note: payload.spotlight.note,
            taskArray: [
              {
                taskItem: newSpotlightId,
                
                type: 'task'
              }

            ],

            tasks  : {
              'task0' : {
              id: 'task0',
              type: 'task',  
              completed: false,
             
              title: 'Spotlight begin', 
              clock: {
                timerStatus: 'inactive', // inactive, running, paused, stopped
                accumulatedTime: 0,
                lastDate: null
               }, 
  
              timeStamp: timestamp,
  
            }
          }
        }
          
 



 
          draft.data.spotlightData.spotlights[newSpotlightId] = spotlight
        

         return draft;
         
       }// end ADD_SPOTLIGHT
  // --------------------------------------------
    default:
      return draft
  } // end default
          
        });

export default reducer_Main


