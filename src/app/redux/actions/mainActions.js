
// import {SET_INITIAL_VIEW, CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY,CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED,

//   OPEN_MODAL, CLOSE_MODAL, 
  
//   SHOW_ACCORDION_DETAIL,CLOSE_ACCORDION_DETAIL, CHANGE_MONTH} from '../../app/store/storeConstants';

  import {OPEN_CLOSE_SIDE_PANEL,
          
          
        } from '../store/storeConstants';


  export const  openCloseSidePanel = (sidePanelState) => {

    return {
      type: OPEN_CLOSE_SIDE_PANEL,
      payload: {
        displaySidePanel: sidePanelState
        
      }
    }
  }