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




        const initialState = {

          view: '',
          displaySidePanel: 'hide',
          display: 'spotlight',
          modalDisplayed: false,
          modalType: 'spotLightForm',
      
          spotLightDisplay: {
            displaySpotLight: 'show',  // or 'none'  or 'show ' 
            displayedSpotLightId: 'spot1',
            // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
            
            // displaySpotLightPage: false,
          },

      
          journalDisplay: {
            currentDaY: '',
            currentSection: '',
            lastSection: ''
          },
      
      
      
          data: InitialStore
      
        }

 

export default function reducer_Main(state = initialState, {type, payload}) {
  switch(type) {
    case OPEN_CLOSE_SIDE_PANEL: 
        return Object.assign({
          ...state,
          payload
        })
        
    case SHOW_SPOTLIGHT : 
        return Object.assign({
          ...state,
          payload
        })

    case CLOSE_SPOTLIGHT : 
        return Object.assign({
          ...state,
          payload
        })

    case OPEN_MODAL : 
        return Object.assign({
          ...state,
          payload
        })

    case CLOSE_MODAL : 
        return Object.assign({
          ...state,
          payload
        })


    case OPEN_SPOTLIGHT_PAGE : 
        return Object.assign({
          ...state,
          payload
        })

    case CLOSE_SPOTLIGHT_PAGE : 
    alert('clicked')
        return Object.assign({
          ...state,
          payload
        })

    case CHANGE_DISPLAY_SPOTLIGHT : 
        return Object.assign({
          ...state,
          payload
        })

    case CHANGE_DISPLAY : 
        return Object.assign({
          ...state,
          payload
        })

 
        case UPDATE_TASK_ARRAY : 
        return Object.assign({
          ...state,
          payload
        })

 

    default:
      return state
  }


  
}
