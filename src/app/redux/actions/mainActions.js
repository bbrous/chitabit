
// import {SET_INITIAL_VIEW, CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY,CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED,

//   OPEN_MODAL, CLOSE_MODAL, 
  
//   SHOW_ACCORDION_DETAIL,CLOSE_ACCORDION_DETAIL, CHANGE_MONTH} from '../../app/store/storeConstants';

  import {CHANGE_DISPLAY, 
          CHANGE_VIEW, 
          SET_INITIAL_VIEW,
          CHANGE_CHIT_DISPLAYED,
          OPEN_MODAL,
          CLOSE_MODAL,
          
          
        } from '../store/storeConstants';


export const  setInitialView = (id) => {
  return {
    type: SET_INITIAL_VIEW,
    payload: {
      page: id
    }
  }
}

export const  changeView = (newView) => {
  return {
   
    type: CHANGE_VIEW,
    payload: {
      view: newView
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

export const  changeChitDisplayed= (newChit) => {
  return {
    type: CHANGE_CHIT_DISPLAYED,
    payload: {
      chitIdDisplayed: newChit
    }
  }
}


export const  openModal = (modalType, newChit) => {


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

// export const  changeDisplayPerson= (newPerson) => {
//   return {
//     type: CHANGE_DISPLAY_PERSON,
//     payload: {
//       displayId: newPerson
//     }
//   }
// }

// export const  changeDisplayCategory= (newCategory) => {
//   return {
//     type: CHANGE_DISPLAY_CATEGORY,
//     payload: {
//       displayId: newCategory,
//       categoryId: newCategory
//     }
//   }
// }

// export const  changeDisplayChitType= (chitType) => {
//   return {
//     type: CHANGE_DISPLAY_CATEGORY,
//     payload: {
//       displayId: chitType 
//     }
//   }
// }











// export const  showAccordionDetail = (chitShown, openClose) => {

 
//   console.log(' [ mainActions ] -  showAccordionDetail:   '  , chitShown)
//   const accordionStatus = openClose ? false: true

//   return {
    
//     type: SHOW_ACCORDION_DETAIL,
    
//     payload: {
//       accordionOpen: accordionStatus,
//       chitAccordionId: chitShown
//     }
//   }
// }

// export const  closeAccordionDetails = () => {
//   console.log(' [ mainActions ] -  closeAccordionDetails clicked :  '  )
//   return {
//     type: CLOSE_ACCORDION_DETAIL,
//     payload: {
//       accordionOpen: false,
//       chitAccordionId: ''
      
//     }
//   }
// }




// export const  changeMonth = (utcDate, month, year) => {
//   return {
//     type: CHANGE_MONTH,
//     payload: {monthDisplay: {
//       utc: utcDate,
//       monthName : month,
//       monthYear: year
    
//     }
//     }
//   }
// }
