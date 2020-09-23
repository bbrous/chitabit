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
          modalType: '',
      
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
        return  {
          ...state,
          displaySidePanel: payload.displaySidePanel
        }// end OPEN_CLOSE_SIDE_PANEL


    case OPEN_MODAL : 
    console.log('REDUCER MAIN -- OPEN modal ACTION PASSED')
        return {
          ...state,
          modalType: payload.modalType,
          chitIdDisplayed: payload.chitIdDisplayed,
          modalDisplayed: true
        }// end OPEN_MODAL

    case CLOSE_MODAL : 
        return  {
          ...state,
          modalType: payload.modalType,
          chitIdDisplayed: payload.chitIdDisplayed,
          modalDisplayed: false
        }//end CLOSE_MODAL


    case CHANGE_DISPLAY_SPOTLIGHT : 
        return {
          ...state,
          spotLightDisplay: {
            ...state.spotLightDisplay,
            displayedSpotLightId: payload.displayedSpotLightId
          }
        }// end CHANGE_DISPLAY_SPOTLIGHT


    case UPDATE_TASK_ARRAY : 
        let id = payload.id
        let taskArray = payload.taskArray
        
        console.log('REDUCER MAIN -- UpdateTaskArray ACTION PASSED')
        return {
          ...state,
          data: {...state.data, 
                  spotlightData: {
                                ...state.data.spotlightData, 
                                  spotlights: {
                                      ...state.data.spotlightData.spotlights,
                                      [id]: {...state.data.spotlightData.spotlights[id], taskArray:taskArray}
                                      
                                   }
                                  
               
        
        }}
      }// end UPDATE_TASK_ARRAY


  // --------------------------------------------

    // case CHANGE_DISPLAY : 
    //     return Object.assign({
    //       ...state,
    //       payload
    //     })

 
        // case UPDATE_TASK_ARRAY : 
        // console.log('REDUCER MAIN -- UpdateTaskArray ACTION PASSED' , payload)
        // return {
        //   ...state,
        //   payload
        // }

  

    // case OPEN_SPOTLIGHT_PAGE : 
    //     return Object.assign({
    //       ...state,
    //       payload
    //     })

    // case CLOSE_SPOTLIGHT_PAGE : 
    // alert('clicked')
    //     return Object.assign({
    //       ...state,
    //       payload
    //     })

            

    // case SHOW_SPOTLIGHT : 
    //     return Object.assign({
    //       ...state,
    //       payload
    //     })

    // case CLOSE_SPOTLIGHT : 
    //     return Object.assign({
    //       ...state,
    //       payload
    //     })      



  // --------------------------------------------
    default:
      return state
  } // end default


  
}// end function reducer_Main
