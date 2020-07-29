import { createReducer } from './reducerUtil'
// import {DatetoUTC, monthArrayLong} from '../../helpers/dateHelper'

// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import {  
          OPEN_CLOSE_SIDE_PANEL
        
        } from '../store/storeConstants';




// adjustedCurrentMonth = currentMonth + 1

// firstDay = `${adjustedCurrentMonth} 1 ${currentYear}`
// UTCFirstDay = parseInt(DatetoUTC(firstDay))

  const initialState = {

    view: 'journal',
    displaySidePanel: 'hide',

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
  

    



//   export const showAccordionDetail = (state, payload) => {


//     return  Object.assign({...state}, payload)
//   }

//   export const closeAccordionDetail = (state, payload) => {
     
//     return  Object.assign({...state}, payload)
//   }


//   export const changeMonth = (state, payload) => {
     
//    return  Object.assign({...state}, payload)
 
//  }
// =================================================

  export default createReducer(initialState, {
  
    [OPEN_CLOSE_SIDE_PANEL] : openCloseSidePanel,


    
  })