import { createReducer } from './reducerUtil'
// import {DatetoUTC, monthArrayLong} from '../../helpers/dateHelper'

// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import {  CHANGE_DISPLAY, 
          CHANGE_VIEW,
          CHANGE_CHIT_DISPLAYED,
          OPEN_MODAL,
          CLOSE_MODAL
        
        } from '../store/storeConstants';

// ======Initialize displayMonth paramaters ================
// create a timeStamp for the first day of the current month for initial state

// let today, currentDate, currentYear, currentMonth, adjustedCurrentMonth, firstDay, UTCFirstDay, monthName

// today = Date.now()
// currentDate = new Date(today)
// currentYear = currentDate.getFullYear()
// currentMonth = currentDate.getMonth()
// monthName = monthArrayLong[currentMonth]

// ===========================================================


// adjustedCurrentMonth = currentMonth + 1

// firstDay = `${adjustedCurrentMonth} 1 ${currentYear}`
// UTCFirstDay = parseInt(DatetoUTC(firstDay))

  const initialState = {

    view: 'ledger',
    display: 'twoParty',
    
    chitIdDisplayed:null,
    modalDisplayed: false,
    modalType: '',
   
    // displayId: 'all',
    // categoryId: 'all',
    // viewType: null,
    

    // chitModalId: '',
    // chitModalDisplayed: false,
    // accordionOpen: false,
    // chitAccordionId: '',
    // monthDisplay: {'utc': UTCFirstDay, 'monthName' : monthName, 'monthYear': currentYear}
  }

  export const createInitialView = (state, payload) => {
    let initialView
  
    
    if(payload.page ===  'twoParty') {initialView = 'chit'}
    if(payload.page ===  'personal') {initialView = 'chit'}
    if(payload.page ===  'work') {initialView = 'ledger'}
  
    return  Object.assign({...state}, {viewDisplayed: initialView, page: payload.page})
  
  }


  export const changeView = (state, payload) => {
    // console.log(   'changeView view fired'  )
   return  Object.assign({...state}, payload)
 
 }

 export const changeDisplay = (state, payload) => {
  // console.log("hey change display clicked")
 return  Object.assign({...state}, payload)

}

export const changeSidePanelView = (state, payload) => {
  // console.log("hey change display clicked")
 return  Object.assign({...state}, payload)

}

export const openModal = (state, payload) => {


  return  Object.assign({...state}, payload)
}

export const closeModal = (state, payload) => {
   
  return  Object.assign({...state}, payload)
}

export const changeChitDisplayed = (state, payload) => {
  return  Object.assign({...state}, payload)
}


  // export const changeDisplayPerson = (state, payload) => {
  //   return  Object.assign({...state}, payload)
  // }

  // export const changeDisplayCategory = (state, payload) => {
  //   console.log(' [ REDUCER payload ] -  changeDisplayCategory :  '  , payload)

  //   return  Object.assign({...state}, payload)
  // }

  // export const changeDisplayChitType = (state, payload) => {
  //   console.log(' [ REDUCER payload ] -  changeDisplayChitType :  '  , payload)

  //   return  Object.assign({...state}, payload)
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
    // [SET_INITIAL_VIEW] : createInitialView,
    [CHANGE_VIEW] : changeView,
    [CHANGE_DISPLAY] : changeDisplay,
    
    // [CHANGE_DISPLAY_PERSON] : changeDisplayPerson,
    // [CHANGE_DISPLAY_CATEGORY] : changeDisplayCategory,
    // [CHANGE_DISPLAY_CHIT_TYPE] :changeDisplayChitType,

    [CHANGE_CHIT_DISPLAYED] : changeChitDisplayed,
    [OPEN_MODAL] : openModal,
    [CLOSE_MODAL] : closeModal,

    // [SHOW_ACCORDION_DETAIL]  : showAccordionDetail,
    // [CLOSE_ACCORDION_DETAIL]  : closeAccordionDetail,
    // [CHANGE_MONTH] : changeMonth
    
  })