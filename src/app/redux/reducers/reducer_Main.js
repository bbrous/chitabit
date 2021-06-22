// import { createReducer } from './reducerUtil'
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
          CHANGE_SPOTLIGHT_START_STATUS,

          ADD_SPOTLIGHT,
          UPDATE_SPOTLIGHT,
          DELETE_SPOTLIGHT,
          DELETE_TASK,
          OPEN_MODAL,
          CLOSE_MODAL,
          // OPEN_SPOTLIGHT_PAGE,
          // CLOSE_SPOTLIGHT_PAGE,
          // CHANGE_DISPLAY, 
          UPDATE_TASK_ARRAY,
          ADD_TASK,

          CHANGE_TIMER_STATUS,

          UPDATE_NOTE,
          ADD_NOTE
        
        } from '../store/storeConstants';




        const initialState = {

          view: '',
          displaySidePanel: 'hide',
          display: 'spotlight',
          spotlightFormId: '',
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

          modalDisplayed: false,
          modalType: 'spotLightForm',

          keywordsArray: InitialStore.keywordsArray,
          keywords: InitialStore.keywords,
          notes: InitialStore.notes,

          spotLightDisplay: {
            displaySpotLight: 'show',  //initial or ''  or 'show ' 
            displayedSpotLightId: '',
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

      let spotlightFormId = payload.spotlightFormId ? payload.spotlightFormId: ''

     draft.modalType = payload.modalType
    //  draft.spotlightFormId = payload.spotlightFormId
    draft.spotlightFormId = spotlightFormId
     draft.modalDisplayed = true
     return draft;
     
   }// end CHANGE_DISPLAY_SPOTLIGHT    

    case CLOSE_MODAL : 
    {
     draft.modalType = ''
     draft.modalDisplayed = false
     draft.spotlightFormId = ''
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
          let spotlightStatus = payload.spotlightStatus

         console.log('xxx REDUCER MAIN - CHANGE_TASK_COMPLETED_STATUS clicked reduce ', payload)

         draft.data.spotlightData.spotlights[spotId].tasks[taskId].completed= newCompletedStatus

        return draft
         
       }// end CHANGE_TASK_COMPLETED_STATUS


       

       case CHANGE_SPOTLIGHT_COMPLETED_STATUS : 
       {

        let spotId = payload.spotId
          
          let spotlightStatus = payload.spotlightStatus
          let spotlightTimeStamp = payload.completedTimeStamp
 
        console.log('REDUCER MAIN - aaCHANGE_SPOTLIGHT_COMPLETED_STATUS clicked reduce ', spotlightStatus)


        draft.data.spotlightData.spotlights[spotId].spotlightStatus = spotlightStatus
        draft.data.spotlightData.spotlights[spotId].completedTimeStamp = spotlightTimeStamp

       return draft
        
      }// end CHANGE_SPOTLIGHT_COMPLETED_STATUS

      

      
      case CHANGE_SPOTLIGHT_START_STATUS : 
      {

       let spotId = payload.spotId
         
         

       console.log('REDUCER MAIN - aaCHANGE_SPOTLIGHT_START_STATUS clicked reduce ', )


       draft.data.spotlightData.spotlights[spotId].spotlightStatus = 'begun'
       draft.data.spotlightData.spotlights[spotId].timeStamp = new Date()

      return draft
       
     }// end CHANGE_SPOTLIGHT_COMPLETED_STATUS
        
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

      case CHANGE_TIMER_STATUS : 
        {

          let spotId = payload.spotId
          let taskId = payload.taskId
          let newTimerObject = payload.newTimerObject
          

          draft.data.spotlightData.spotlights[spotId].tasks[taskId].clock = newTimerObject
        //  console.log('REDUCER MAIN - CHANGE_TIMER_STATUS clicked reduce ', newTimerObject)
           

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
           note: '',
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
          note: '',
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
          // Creates a new spotlight and 
          // changes which spotlight is displayed

          // console.log('REDUCER MAIN - ADD_SPOTLIGHT reducer clicked @@@@@@ ', payload)
          
         

          let timestamp = new Date()
          // let newSpotLightId = cuid().toString()
          let newSpotlightId = payload.newSpotlightId
          let wksInput, daysInput, hrsInput, minsInput, wks, days, hrs, mins

          // Calculate the Estimated Time from Form input
          // Estimated time in database is in milliseconds... form in hrs, wks, etc

          const dayMS = 86400000 // ms in a day
          const hourMS = 3600000
          const minuteMS = 60000

          //  (1) Get the object values and convert to integers

          wksInput = parseInt(Object.values(payload.spotlight.wks))  
          daysInput = parseInt(Object.values(payload.spotlight.days))  
          hrsInput = parseInt(Object.values(payload.spotlight.hrs))  
          minsInput = parseInt(Object.values(payload.spotlight.mins)) 

          //  (2) Account for no input into form
          
          wks = wksInput ? parseInt(Object.values(payload.spotlight.wks))  : 0
          days = daysInput ? parseInt(Object.values(payload.spotlight.days))  : 0
          hrs = hrsInput ? parseInt(Object.values(payload.spotlight.hrs))  : 0
          mins = minsInput ? parseInt(Object.values(payload.spotlight.mins))  : 0


          //  (3) Calculate the total estimated time
          
          let calculatedInputTimeEst =  
            wks * dayMS * 7 +
            days * dayMS +
            hrs * hourMS +
            mins * minuteMS

     
          //  (4) If calc time = 0, return null else return calc time
          let calculatedTimeEst = calculatedInputTimeEst === 0 ? null : calculatedInputTimeEst


          let firstTask = newSpotlightId + '_task_0'


          let spotlight  = {
            id: newSpotlightId,
            type: 'spotlight', 
            parent: '',
            completed: false,
            title: payload.spotlight.title, 
    
            timeStamp: timestamp,
            endEst:payload.spotlight.endEst,
            timeEst:calculatedTimeEst,

            note: payload.spotlight.note,
            taskArray: [
              {
                taskItem: firstTask,
                
                type: 'task'
              }

            ],

            tasks  : {
              [firstTask]: {
              id: firstTask,
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

        // update the store here...

          draft.data.spotlightData.spotlights[newSpotlightId] = spotlight
          draft.spotLightDisplay.displayedSpotLightId  = newSpotlightId


         return draft;
         
       }// end ADD_SPOTLIGHT


       case UPDATE_SPOTLIGHT : 
       {

       
        const {spotlightId, title, timeEst, endEst, note} =  payload.newSpotlightDetail
         
         draft.data.spotlightData.spotlights[spotlightId].title = title
         draft.data.spotlightData.spotlights[spotlightId].timeEst = timeEst
         draft.data.spotlightData.spotlights[spotlightId].endEst = endEst
         draft.data.spotlightData.spotlights[spotlightId].note = note
       

        return draft;
        
      }// end UPDATE_SPOTLIGHT


      case DELETE_SPOTLIGHT : 
      {


       const{spotlightId, parentId, parentTaskArray, childrenSpotlightArray} = payload

       

      // let parentId = draft.data.spotlightData.spotlights[spotlightId].parent
      // let parentTaskArray =  draft.data.spotlightData.spotlights['spot_1'] 

      console.log('[REDUCER MAIN DELETE Spotlight] =============================')
      // console.log('[REDUCER MAIN DELETE Spotlight] payload', payload)
      // console.log('[REDUCER MAIN DELETE Spotlight] spotlightId', spotlightId)
      // console.log('[REDUCER MAIN DELETE Spotlight] parentId', parentId)
      // console.log('[REDUCER MAIN DELETE Spotlight] parentTaskArray', parentTaskArray)
      // console.log('[REDUCER MAIN DELETE Spotlight] childrenSpotlightArray', childrenSpotlightArray)
      console.log('[REDUCER MAIN DELETE Spotlight] =============================')



      draft.data.spotlightData.spotlights[parentId].taskArray = parentTaskArray

      childrenSpotlightArray.forEach((childSpotlight) => {
        return  draft.data.spotlightData.spotlights[childSpotlight].parent = ''
    });
       
        draft.spotLightDisplay.displayedSpotLightId = ''
         


       delete draft.data.spotlightData.spotlights[spotlightId] 

      

       return draft;
       
     }// end DELETE_SPOTLIGHT


     case DELETE_TASK : 
     {

      /*
        Doesn't actually delete the task....
        It just changes the taskArray to eliminate showing the task
      */
      const{spotlightId, parentTaskArray} = payload

     draft.data.spotlightData.spotlights[spotlightId].taskArray = parentTaskArray


      return draft;
      
    }// end DELETE_TASK


    case UPDATE_NOTE : 
    {
      const {note, type, noteHolderId, title} = payload.noteObject
      let noteId = noteHolderId + '_note'
      let timestamp = new Date()

      let updatedNote =  {
        noteId: noteId,
        noteHolderId: noteHolderId,
        noteType: type,
        title: title,
        note: note,
  
        timeStamp: timestamp,  // September 14
  
        noteArray: []
        
        
      }

    draft.notes[noteId] = updatedNote
    
     return draft;
     
   }// end UPDATE_NOTE

   case ADD_NOTE : 
   {

    const {note, type,spotlightId, taskId, noteHolderId, title} = payload.noteObject
      //  --- First create a new note Id ------------------
    let newNoteId = noteHolderId + '_note'

    let timestamp = new Date()

    let newNote =  {
      noteId: newNoteId,
      noteHolderId: noteHolderId,
      noteType: type,
      title: title,
      note: note,

      timeStamp: timestamp,  // September 14

      noteArray: []
      
      
    }

    let noteHolderAddress
    if(type === 'spotlight'){
      noteHolderAddress = draft.data.spotlightData.spotlights[noteHolderId]
    }

    if(type === 'task'){
      noteHolderAddress = draft.data.spotlightData.spotlights[spotlightId].tasks[taskId]
    }
    
     
    draft.notes[newNoteId] = newNote
    noteHolderAddress.note = newNoteId

    // console.log('[REDUCER MAIN ADD_NOTE clicked] ||||||||||||||||||||||||||||||')
    // console.log('**** [REDUCER MAIN ADD_NOTE] timestamp: ', timestamp)
    // console.log('**** [REDUCER MAIN ADD_NOTE] newNoteId: ', newNoteId)
    // console.log('[REDUCER MAIN ADD_NOTE] type: ', type)
    // console.log('[REDUCER MAIN ADD_NOTE] spotlightId: ', spotlightId)
    // console.log('[REDUCER MAIN ADD_NOTE] taskId: ', taskId)
    // console.log('[REDUCER MAIN ADD_NOTE] note: ', note)
    // console.log('[REDUCER MAIN ADD_NOTE] noteHolderId: ', noteHolderId)

    // console.log('[REDUCER MAIN ADD_NOTE clicked] ||||||||||||||||||||||||||||||')

    return draft;
    
  }// end ADD_NOTE
     
  // --------------------------------------------
    default:
      return draft
  } // end default
          
        });

export default reducer_Main


