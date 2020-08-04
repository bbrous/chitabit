
// import {SET_INITIAL_VIEW, CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY,CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED,

//   OPEN_MODAL, CLOSE_MODAL, 
  
//   SHOW_ACCORDION_DETAIL,CLOSE_ACCORDION_DETAIL, CHANGE_MONTH} from '../../app/store/storeConstants';

  import {OPEN_CLOSE_SIDE_PANEL, SHOW_SPOTLIGHT, CLOSE_SPOTLIGHT
          
          
        } from '../store/storeConstants';



        export const  openCloseSidePanel = (sidePanelState) => {
          console.log("[ACTION] - clicked : state is: ", sidePanelState)
          return {
            type: OPEN_CLOSE_SIDE_PANEL,
            payload: {
              displaySidePanel: sidePanelState
              
            }
          }
        }


        export const  showSpotLight = () => {
  
          return {
            type: SHOW_SPOTLIGHT,
            payload: {
              displaySpotLight: 'show'
              
            }
          }
        }
        
        export const  closeSpotLight = () => {
          
          return {
            type: CLOSE_SPOTLIGHT,
            payload: {
              displaySpotLight: 'seen'
              
            }
          }
        }