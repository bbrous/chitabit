import { createReducer } from './reducerUtil'
// import {DatetoUTC, monthArrayLong} from '../../helpers/dateHelper'

// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import InitialStore from '../store/InitialStore'

import {  
          OPEN_CLOSE_SIDE_PANEL,
          SHOW_SPOTLIGHT,
          CLOSE_SPOTLIGHT,
          OPEN_MODAL,
          CLOSE_MODAL,
          OPEN_SPOTLIGHT_PAGE,
          CLOSE_SPOTLIGHT_PAGE,
          CHANGE_DISPLAY, 
        
        } from '../store/storeConstants';




// adjustedCurrentMonth = currentMonth + 1

// firstDay = `${adjustedCurrentMonth} 1 ${currentYear}`
// UTCFirstDay = parseInt(DatetoUTC(firstDay))

  const initialState = {

    view: 'journal',
    displaySidePanel: 'hide',
    display: 'spotlight',
    

    spotLightViews: {
      displaySpotLight: 'unseen',
      defaultSpotLight: 'spot1',
      displayedSpotLightId: 'spot1',
      spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
      
      displaySpotLightPage: false,
    },

    journalDisplay: {
      currentDaY: '',
      currentSection: '',
      lastSection: ''
    },

    modalDisplayed: false,
    modalType: '',

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



export const changeDisplay = (state, payload) => {
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

    [OPEN_SPOTLIGHT_PAGE] : openSpotLightPage,
    [CLOSE_SPOTLIGHT_PAGE] : closeSpotLightPage,
    [CHANGE_DISPLAY] : changeDisplay

    
  })