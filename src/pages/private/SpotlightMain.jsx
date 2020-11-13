import React from 'react'

import {connect} from 'react-redux'
// import{openCloseSidePanel} from '../../app/redux/actions/mainActions'

import SpotLight from './spotLightElements/Spotlight'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow, mediumGrey} from '../../styles/colors'

import Paper from '@material-ui/core/Paper'


import { styled, createMuiTheme } from "@material-ui/core/styles"
import InfoIcon from '@material-ui/icons/Info'
import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const theme = createMuiTheme(); // allows use of mui theme in styled component

// ---------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: chitOrangeLight,
  height: '100%',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})

const Initial= styled('div')({
  display: 'block',
  width: '80%',
  backgroundColor: 'white',
  marginTop: '2rem',



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})

const NoneMessage= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  backgroundColor: 'white',
  marginTop: '2rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})


// ====================================

export const SpotlightMain = (props) => {


  let spotlightDisplayed = props.view.private.spotLightDisplay.displaySpotLight
  let spotlightId = props.view.private.spotLightDisplay.displayedSpotLightId

//  console.log('[SPOTLIGHT MAIN] view------spotlightDisplayed---' , spotlightDisplayed)
 console.log('[SPOTLIGHT MAIN] view------spotlightId---' , spotlightId)
 console.log('[SPOTLIGHT MAIN] view---------------------------------------' )



  return (
    <Wrapper>


   
          {spotlightDisplayed === 'initial' &&  
            <Initial>
              Spotlights are a goal and objective manager and decomposition tool.  

              They are much like a standard  a To do list with tasks and subtasks.  But spotlights are designed to track progress towards an objective.  When a single task, a group of child tasks or the entire spotlight is completed, they can be converted into chits.  This allows them to be added to your chit ledger and journal.

              Spotlights are based on decomposition of an undertaking … that is the breaking down the objective into individual subtasks in the order they should be performed  to accomplish the undertaking.   An individual subtask of the overall objective can be further be decomposed into subtasks… this makes it a child spotlight of the overall spotlight.

              There differences between a spotlight and a task are: 

                - Spotlights can be broken down into smaller steps.  These smaller steps
                  can be tasks or spotlights.
                - Spotlights can have a target date-time objective.
                - Tasks can be timed   

              To turn the task into a spotlight, right click on the desired task and choose the “convert to spotlight” menu option.

              To start a timer on a spotlight, click on the timer icon… it will turn green and blink to indicate the timer is running.  It will continue to run until you either pause the timer by clicking on the blinking green icon or complete the task.

              Notes can be added to both spotlights and tasks.  This can be especially valuable to record thoughts about a specific task even though you won’t get to it for days or weeks.  

              To create a note, right click on the spotlight or task and choose the “ create note” option.

              Tasks can be reordered by left-clicking and holding - while holding the mouse button down move the task to the new position.

              Double clicking on a child spotlight will replace the current opened spotlight with the child spotlight.  Double clicking on a task has no affect.

            </Initial>
          
         }

      {spotlightDisplayed === 'show' && !spotlightId   &&  
            <NoneMessage>
              <div>Choose a spotlight to be displayed</div>
              <div>or</div>
              <div>Create a new spotlight</div>
            </NoneMessage>
          
           }
    
            {spotlightDisplayed === 'show' && spotlightId   &&  
             <SpotLight 
                id = {spotlightId}
             />  }

    </Wrapper>
  )
}

 
const actions = {
  // openCloseSidePanel,

}

const mapState = state => ({
  view: state
});

export default connect(mapState, actions)(SpotlightMain)