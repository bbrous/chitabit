// chit reducer

import produce from 'immer';

import {InitialChits} from './InitialChits'

import {

  DUMMY_CONSTANT

        } from './chitConstants';







const chitReducer = produce((draft = InitialChits, action) => {
  const { type, payload } = action;

  switch(type) {

  case DUMMY_CONSTANT: 
        {
       
        draft.displaySidePanel = payload.displaySidePanel
        return draft;
      }// end OPEN_CLOSE_SIDE_PANEL


 

//   case OPEN_MODAL : 
//   {

//     let spotlightFormId = payload.spotlightFormId ? payload.spotlightFormId: ''

//    draft.modalType = payload.modalType
//   //  draft.spotlightFormId = payload.spotlightFormId
//   draft.spotlightFormId = spotlightFormId
//    draft.modalDisplayed = true
//    return draft;
   
//  }// end CHANGE_DISPLAY_SPOTLIGHT  


 default:
  return draft
} // end default
      
    });

export default chitReducer