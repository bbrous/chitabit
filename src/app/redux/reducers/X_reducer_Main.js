import { createReducer } from './reducerUtil'


// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import InitialStore from '../store/InitialStore'

import {  
          OPEN_CLOSE_SIDE_PANEL,
          SHOW_SPOTLIGHT,
          CLOSE_SPOTLIGHT,
          CHANGE_DISPLAY_SPOTLIGHT,
          OPEN_MODAL,
          CLOSE_MODAL,
          OPEN_SPOTLIGHT_PAGE,
          CLOSE_SPOTLIGHT_PAGE,
          CHANGE_DISPLAY, 
          UPDATE_TASK_ARRAY
        
        } from '../store/storeConstants';




// adjustedCurrentMonth = currentMonth + 1

// firstDay = `${adjustedCurrentMonth} 1 ${currentYear}`
// UTCFirstDay = parseInt(DatetoUTC(firstDay))

  const initialState = {

    view: '',
    displaySidePanel: 'hide',
    display: 'spotlight',
    modalDisplayed: true,
    modalType: 'spotLightForm',

    spotLightDisplay: {
      displaySpotLight: 'show',  // or 'none'  or 'show ' 
      displayedSpotLightId: 'spot1',
      // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
      
      // displaySpotLightPage: false,
    },

    // spotlights: {

    //   'spot1': {
    //     id: 'spot1',
    //     type: 'spotlight',
    //     parent: '',
    //     completed: false,

    //     title: 'This is spotlight 1 in initial store',

    //     timeStamp:  "2020-09-14T04:46:20.619Z",  
    //     endEst: "2020-09-22T04:46:20.619Z",

    //     startClock:  "2020-09-14T04:46:20.619Z",
    //     pausedClock: "2020-09-14T04:46:20.619Z",
    //     endClock: "2020-09-14T04:46:20.619Z",
    //     clockStatus: 'stopped',  // or going
    //     noteId: 'note1',
   
        
    //     taskArray: [
    //       'task1',
    //       'task2', 
    //       'spot2',
    //       'task3'
         
    //     ],

    //     'tasks': {

    //       'task1' : {
    //         id: 'task1',
    //         type: 'task',  //or spotlight
    //         completed: false,
    
    //         title: 'This is spot 1 in initialStore',
    //         noteId: ''
            
    //       },
    
    //       'task2' :{
    //         id: 'task2',
    //         type: 'task',  //or spotlight
    //         completed: false,
    
    //         title: 'This is spot 2 in initialStore',
    //         noteId: 'note2'
            
    //       },

              
    //       'task3' :{
    //         id: 'task3',
    //         type: 'task',  //or spotlight
    //         completed: false,
    
    //         title: 'This is spot 2 in initialStore',
    //         noteId: 'note2'
            
    //       },

    //     }, // end tasks
          

    //   },



    // }, // end spotlight

    journalDisplay: {
      currentDaY: '',
      currentSection: '',
      lastSection: ''
    },



    data: InitialStore

  }

  export const createInitialView = (state, payload) => {
    let initialView
  
    
    if(payload.page ===  'twoParty') {initialView = 'chit'}
    if(payload.page ===  'personal') {initialView = 'chit'}
    if(payload.page ===  'work') {initialView = 'ledger'}
  
    return  Object.assign({...state}, {viewDisplayed: initialView, page: payload.page})
  
  }



  export const openCloseSidePanel = (state, payload) => {
    // console.log("hey change display clicked")
   return  Object.assign({...state}, payload)
  
  }
//  export const openCloseSidePanel = (state, payload) => {
//   // console.log("hey change display clicked")
//  return  Object.assign({...state}, payload)

// }
  

export const showSpotLight = (state, payload) => {
  // console.log("hey change display clicked")
 return  Object.assign({...state}, payload)

}  

export const closeSpotLight = (state, payload) => {
  // console.log("hey change display clicked")
 return  Object.assign({...state}, payload)

}  


export const openModal = (state, payload) => {


  return  Object.assign({...state}, payload)
}

export const closeModal = (state, payload) => {
   
  return  Object.assign({...state}, payload)
}

export const openSpotLightPage = (state, payload) => {


  return  Object.assign({...state}, payload)
}

export const closeSpotLightPage = (state, payload) => {
   
  return  Object.assign({...state}, payload)
}

export const changeDisplaySpotlight = (state, payload) => {
  return  Object.assign({...state}, payload)
}


export const changeDisplay = (state, payload) => {
  // console.log("hey change display clicked")
 return  Object.assign({...state}, payload)

}

export const updateTaskArray = (state, payload) => {
  // console.log("hey change display clicked")
 return  Object.assign({...state}, payload)

}
// =================================================

  export default createReducer(initialState, {
  
    [OPEN_CLOSE_SIDE_PANEL] : openCloseSidePanel,
    [SHOW_SPOTLIGHT] : showSpotLight,
    [CLOSE_SPOTLIGHT] : closeSpotLight,

    [OPEN_MODAL] : openModal,
    [CLOSE_MODAL] : closeModal,

    [CHANGE_DISPLAY_SPOTLIGHT] : changeDisplaySpotlight,
    [OPEN_SPOTLIGHT_PAGE] : openSpotLightPage,
    [CLOSE_SPOTLIGHT_PAGE] : closeSpotLightPage,
    [CHANGE_DISPLAY] : changeDisplay,
    [UPDATE_TASK_ARRAY]: updateTaskArray

    
  })