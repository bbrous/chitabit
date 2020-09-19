
// import {SET_INITIAL_VIEW, CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY,CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED,

//   OPEN_MODAL, CLOSE_MODAL, 
  
//   SHOW_ACCORDION_DETAIL,CLOSE_ACCORDION_DETAIL, CHANGE_MONTH} from '../../app/store/storeConstants';

  import {OPEN_CLOSE_SIDE_PANEL, 
          SHOW_SPOTLIGHT, 
          CLOSE_SPOTLIGHT,
          OPEN_MODAL,
          CLOSE_MODAL,
          CHANGE_DISPLAY_SPOTLIGHT,
          OPEN_SPOTLIGHT_PAGE,
          CLOSE_SPOTLIGHT_PAGE,
          CHANGE_DISPLAY,
          UPDATE_TASK_ARRAY
          
          
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


        // export const  showSpotLight = () => {
  
        //   return {
        //     type: SHOW_SPOTLIGHT,
        //     payload: {
               
        //       spotLightViews: {

        //       displaySpotLight: 'show',
               
        //       defaultSpotLight: 'spot1',
        //       displayedSpotLightId: 'spot1',
        //       spotLightsArray: ['spot1','spot2','spot3','spot4','spot5'],  
        //       }
              
        //     }
        //   }
        // }
        
        export const  closeSpotLight = () => {
          
          return {
            type: CLOSE_SPOTLIGHT,
            payload: {
               
              spotLightViews: {
              displaySpotLight: 'seen'
              }
            }
          }
        }

        export const  updateSpotLightView = () => {
  
          return {
            type: SHOW_SPOTLIGHT,
            payload: {
               
              spotLightViews: {

      
               
              defaultSpotLight: 'spot1',
              displayedSpotLightId: 'all',
              spotLightsArray: ['spot1','spot2','spot3','spot4','spot5'],  
              }
              
            }
          }
        }

        export const  changeDisplaySpotlight= (newSpotlight) => {
          return {
            type: CHANGE_DISPLAY_SPOTLIGHT,
            payload: {
              spotLightViews: {
              displayedSpotLightId: newSpotlight
            }}
          }
        }
        

        export const  openModal = (modalType, newChit) => {

          console.log('[mainActions I be clicked - type = ' , modalType)
          
          return {
            type: OPEN_MODAL,
            payload: {
              modalType: modalType, 
              chitIdDisplayed: newChit,
              modalDisplayed: true
              
            }
          }
        }
        
        
        export const  closeModal = () => {
          
          return {
            type: CLOSE_MODAL,
            payload: {
              modalType: '',
              chitIdDisplayed: '',
              modalDisplayed: false
              
            }
          }
        }

        export const  openSpotLightPage = (modalType, newChit) => {

          console.log('[mainActions I be clicked')

          return {
            type: OPEN_SPOTLIGHT_PAGE,
            payload: {
              displaySpotLightPage: true,
              
            }
          }
        }
        
        
        export const  closeSpotLightPage= () => {
          
          return {
            type: CLOSE_SPOTLIGHT_PAGE,
            payload: {
              
              displaySpotLightPage: false,
              
            }
          }
        }

        export const  changeDisplay = (newDisplay) => {
          return {
            type: CHANGE_DISPLAY,
            payload: {
              display: newDisplay
            }
          }
        }

        
        export const  updateTaskArray = ( TaskArray) => {
          return {
            
            type: UPDATE_TASK_ARRAY,
            payload: TaskArray
            
          }
        }
        