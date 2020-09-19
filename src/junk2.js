import { createReducer } from './reducerUtil'
import {DatetoUTC, monthArrayLong} from '../../helpers/dateHelper'

// import {SET_INITIAL_VIEW , CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY, CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED, OPEN_MODAL,SHOW_ACCORDION_DETAIL, CLOSE_ACCORDION_DETAIL, CLOSE_MODAL, CHANGE_MONTH} from '../store/storeConstants';
 
import {  CHANGE_DISPLAY, 
          CHANGE_VIEW,
          CHANGE_CHIT_DISPLAYED,
          OPEN_MODAL,
          CLOSE_MODAL,
          OPEN_CLOSE_SIDE_PANEL,
          CHANGE_MONTH,
          CHANGE_DISPLAY_PERSON, 
          CHANGE_DISPLAY_CATEGORY,
          CHANGE_DISPLAY_CHIT_TYPE
        
        } from '../store/storeConstants';

// ======Initialize paramaters for "monthFilter" ================
// create a timeStamp for the first day of the current month for initial state

let today, currentDate, currentYear, currentMonth, adjustedCurrentMonth, firstDay, UTCFirstDay, monthName

today = Date.now()
currentDate = new Date(today)
currentYear = currentDate.getFullYear()
currentMonth = currentDate.getMonth()
monthName = monthArrayLong[currentMonth]

// ===========================================================


adjustedCurrentMonth = currentMonth + 1

firstDay = `${adjustedCurrentMonth} 1 ${currentYear}`
UTCFirstDay = parseInt(DatetoUTC(firstDay))

  const initialState = {

    view: 'chit',
    display: 'twoParty',
    displaySidePanel: 'hide',
    chitIdDisplayed:null,
    modalDisplayed: false,
    modalType: '',
    monthFilter: {
      'utc': UTCFirstDay, 'monthName' : monthName, 'monthYear': currentYear},
   
    displayId: 'all',
    categoryId: 'all',

  }




// ===========================================================================
  
export default function reducer_Main(state = initialState, {type, payload}) {
  switch(type) {

    case OPEN_CLOSE_SIDE_PANEL: 
        return Object.assign({
          ...state,
          displaySidePanel: payload.displaySidePanel
        })

    case OPEN_MODAL : 
        return Object.assign({
          ...state,
          modalType: payload.modalType,
          chitIdDisplayed: payload.chitIdDisplayed,
          modalDisplayed: true
        })

    case CLOSE_MODAL : 
        return Object.assign({
          ...state,
          modalType: payload.modalType,
          chitIdDisplayed: payload.chitIdDisplayed,
          modalDisplayed: false
        })


    case CHANGE_DISPLAY : 
        return Object.assign({
          ...state,
          display: payload.display
           
        })


    case CHANGE_VIEW : 
        return Object.assign({
          ...state,
          view: payload.view
           
        })


    case CHANGE_CHIT_DISPLAYED : 
        return Object.assign({
          ...state,
          chitIdDisplayed: payload.chitIdDisplayed
           
        })


    case CHANGE_DISPLAY_PERSON : 
        return Object.assign({
          ...state,
          displayId: payload.displayId
           
        })
  

    case CHANGE_DISPLAY_CATEGORY : 
        return Object.assign({
          ...state,
          displayId: payload.displayId,
          categoryId: payload.categoryId,
          
          
        })

                

    case CHANGE_MONTH : 
        return Object.assign({
          ...state,
          monthFilter: payload.monthFilter
          
          
        })

    default:
      return state
  }


  
}
