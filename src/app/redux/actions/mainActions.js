
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
          ADD_SPOTLIGHT,
          CHANGE_DISPLAY,
          UPDATE_TASK_ARRAY,
          ADD_TASK
          
          
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

          // console.log('[mainActions I be clicked - newSpotlight = ' , newSpotlight)
          return {
            type: CHANGE_DISPLAY_SPOTLIGHT,
            payload: {
           
              displayedSpotLightId: newSpotlight
            }
          }
        }
        

        export const  openModal = (modalType, newChit) => {

          // console.log('[mainActions I be clicked - type = ' , modalType)
          console.log('[mainActions OPEN_MODALOPEN_MODALOPEN_MODAL = ' , modalType)
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




        
        export const  updateTaskArray = (id, taskArray) => {

          console.log('[mainActions I be clicked - type, update = ' , taskArray)
          
          return {
            type: UPDATE_TASK_ARRAY,
            payload: {
              id: id, 
              taskArray: taskArray,
               
              
            }
          }
        }

        export const  addTask = (id, newTask, newTaskId) => {
          console.log('MAIN ACTIONS - add newTask clicked --- ', newTask)
          console.log('MAIN ACTIONS - add id clicked --- ', id)
          return {
            type: ADD_TASK,
            payload: {
              id: id,
              task: newTask,
              newTaskId: newTaskId
            }
          }
        }

        export const  addSpotLight = (spotlight, newSpotlightId) => {
          console.log('MAIN ACTIONS - add spotlight clicked')
          return {
            type: ADD_SPOTLIGHT,
            payload: {
              spotlight : spotlight,
              newSpotlightId: newSpotlightId
            }
          }
        }
        
        