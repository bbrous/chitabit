import { createReducer } from './reducerUtil'
import produce from 'immer';

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

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

          modalDisplayed: true,
          modalType: 'spotLightForm',

          spotLightDisplay: {
            displaySpotLight: 'show',  // or 'none'  or 'show ' 
            displayedSpotLightId: 'spot1',
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
     
   }// end CHANGE_DISPLAY_SPOTLIGHT

    case CHANGE_DISPLAY_SPOTLIGHT : 
         {
          draft.spotLightDisplay.displayedSpotLightId = payload.displayedSpotLightId
          return draft;
          
        }// end CHANGE_DISPLAY_SPOTLIGHT




    case UPDATE_TASK_ARRAY : 
         {
          let id = payload.id
              let taskArray = payload.taskArray
          draft.data.spotlightData.spotlights[id].taskArray = taskArray
          return draft;
          
        }// end CHANGE_DISPLAY_SPOTLIGHT

     



  // --------------------------------------------
    default:
      return draft
  } // end default
          
        });

export default reducer_Main


