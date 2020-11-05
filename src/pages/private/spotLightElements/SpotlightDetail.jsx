import React, {Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'

import SpotLightTasks from './SpotLightTasks'
import SpotLightTaskForm from '../../../forms/SpotLightTaskForm'
import {UTCtoDate, DatetoUTC, convertMS} from '../../../app/helpers/dateHelper'
import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, mediumGrey, mediumLightGrey,  veryLightGrey} from '../../../styles/colors'
import{ changeSpotlightCompletedStatus} from '../../../app/redux/actions/mainActions'

import {SpotlightCheckbox} from '../../../forms/formElements/CheckBox'
import MenuPopup from './MenuPopup'
import ClockPopup from './timer/TimerPopup'
import NotePopup from './NotePopup'

import CountDownDisplay from './timer/CountDownDisplay'

// &&&&   TEMP Initial Store Import -- Get from Database
// import InitialStore from '../../../app/redux/store/InitialStore'




//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




import { styled, createMuiTheme } from "@material-ui/core/styles"
import InfoIcon from '@material-ui/icons/Info'
import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper'
const theme = createMuiTheme(); // allows use of mui theme in styled component


//  -------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  // marginLeft: '2.5rem',

  width: '100%',
  // backgroundColor: 'yellow',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
  
  },
})

const StatusRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: lightGrey,
  marginBottom: '8px',
  padding: '2px 0',
  color: 'black',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StatusRowLeft= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingRight: '1rem',

  // backgroundColor: 'gold',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
     
  },
})

const StatusRowRight= styled('div')({
  display: 'flex',
  flexDirection: 'row',
   
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  '&.blueHighlight' : {color: chitBlueDull, fontWeight: 'bold'},
  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},

 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// -----------------------------------

const VariablesWrapper= styled('div')({
  display: 'flex',
   
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  

  width: '100%',
  // backgroundColor: 'blue',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
  
  },
})

const VariablesLeft= styled('div')({
  display: 'flex',
  flexDirection: 'column',
   
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft: '.25rem',
  fontSize: '.7rem',
  color: 'black',
  width: '50%',
  // backgroundColor: 'pink',


 

 

borderRight: '1px solid grey',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
 
  },
})

const VariablesRight= styled('div')({
  display: 'flex',
  flexDirection: 'column',
   
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft: '.25rem',
  fontSize: '.7rem',
  color: 'black',
  width: '50%',
  // backgroundColor: 'orange',
 

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
     
  },
})

const DetailRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
  },
})



const DetailRowOrange= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitOrange,
  marginLeft: '2.5rem',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})




const DetailRowLeft= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '6rem',
 color: 'grey',
  // backgroundColor: 'gold',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRight= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  // backgroundColor: 'green',
  
  '&.blueHighlight' : {color: chitBlueDull, fontWeight: 'bold'},
  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CompletedWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
   
 
  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})




// ---------------------------------

function SpotlightDetail(props) {
  const {spotlightId, endEst, timeEst,  timeStamp, completedTimeStamp, spotlightStatus}= props

  let statusDisplay


  if(spotlightStatus === 'completed') {statusDisplay = 'Spotlight Completed'}
  if(spotlightStatus === 'begun' ){statusDisplay = 'In Progress'}
  if(spotlightStatus === 'inactive' ){statusDisplay ='Not Yet Started'}

  console.log('[SPOTLIGHT DETAIL - id -  ', spotlightId)
  console.log('[SPOTLIGHT DETAIL - endEst - ', endEst)
  console.log('[SPOTLIGHT DETAIL - timeEst - ', timeEst )
  console.log('[SPOTLIGHT DETAIL - timeStamp -  ', timeStamp)
  console.log('[SPOTLIGHT DETAIL - completedTimeStamp - ', completedTimeStamp)
  console.log('[SPOTLIGHT DETAIL - spotlightStatus - ', spotlightStatus)
  console.log('========================')
  
  // convert target Date in ISO to UTC for addition/subtraction etc
  let targetDate, beginDate 

  if(endEst) {
    let targetDateInMilliseconds = DatetoUTC(endEst)
    // format target Date in milliseconds for display
    targetDate  =  UTCtoDate(targetDateInMilliseconds)
  
    // console.log('[SPOTLIGHT Detail] -- REMAINING' ,  days, hours, mins, secs)


  }else{
    targetDate  = 'No target date provided'
    
  }
  if(timeStamp) {
    let beginDateInMilliseconds = DatetoUTC(timeStamp)
    // format target Date in milliseconds for display
    beginDate  =  UTCtoDate(beginDateInMilliseconds)
  
    // console.log('[SPOTLIGHT ] -- REMAINING' ,  days, hours, mins, secs)


  }else{
    targetDate  = 'No target date provided'
    
  }


  return (
    <Wrapper>





         <StatusRow>
          <StatusRowLeft>Status: </StatusRowLeft>
            {spotlightStatus === 'inactive' &&
              <StatusRowRight
                 
              
              > {statusDisplay} 
              </StatusRowRight>
  
              }
              {spotlightStatus === 'completed' &&
                <StatusRowRight
                  className = 'redHighlight'
                
                > {statusDisplay} 
                </StatusRowRight>
 
              }

            {spotlightStatus === 'begun' &&
              <StatusRowRight
                className='greenHighlight'

              > {statusDisplay}
              </StatusRowRight>

            }
          
          
          
        </StatusRow>

<VariablesWrapper>

<VariablesLeft>
 
        {/* <DetailRow>
          <DetailRowLeft>Targeted End: </DetailRowLeft>
 
          <DetailRowRight> {targetDate} </DetailRowRight>
          
          
        </DetailRow> */}
      
        <DetailRow>
          <DetailRowLeft>Targeted End: </DetailRowLeft>

          {!endEst && 
          <DetailRowRight> No Targeted End  </DetailRowRight>
          }

          {endEst && 
          <DetailRowRight> 
            {UTCtoDate(DatetoUTC(endEst))} 
          </DetailRowRight>
          }
          
        </DetailRow>
  
        <DetailRow>
          <DetailRowLeft>Began: </DetailRowLeft>
 
          <DetailRowRight
            className = 'blueHighlight'
          >
            {UTCtoDate(DatetoUTC(timeStamp))} 
          </DetailRowRight>
          
          
        </DetailRow>
        
        {!completedTimeStamp &&
        <DetailRow>
          <CountDownDisplay/>
        </DetailRow>
      }

        {spotlightStatus === 'completed' && 
        <CompletedWrapper>  
        <DetailRow>
          <DetailRowLeft>Ended: </DetailRowLeft>
 
          <DetailRowRight> 12 Nov, 2020 </DetailRowRight>
          
          
        </DetailRow>

        <DetailRow>
          <DetailRowLeft>Difference: </DetailRowLeft>
 
          <DetailRowRight
            className = 'redHighlight'
          
          > + 3 d 2h 21m </DetailRowRight>
          
          
        </DetailRow>
        </CompletedWrapper>
        }
</VariablesLeft>

{/* ---RIGHT SIDE ------------------ */}

<VariablesRight>



        {/* <DetailRow>
          <DetailRowLeft>Targeted End: </DetailRowLeft>
 
          <DetailRowRight> {targetDate} </DetailRowRight>
          
          
        </DetailRow> */}
 
 <DetailRow>
          <DetailRowLeft>Est Time: </DetailRowLeft>
 
          <DetailRowRight>+ 3 d 2h 21m </DetailRowRight>
          
          
        </DetailRow>
  
        <DetailRow>
          <DetailRowLeft>Began: </DetailRowLeft>
 
          <DetailRowRight>12 Nov, 2020 8:45 AM </DetailRowRight>
          
          
        </DetailRow>
 
        {spotlightStatus === 'completed' && 
        <CompletedWrapper>  
        <DetailRow>
          <DetailRowLeft>Ended: </DetailRowLeft>
 
          <DetailRowRight> 12 Nov, 2020 2:55 PM </DetailRowRight>
          
          
        </DetailRow>

        <DetailRow>
          <DetailRowLeft>Total Time: </DetailRowLeft>
 
          <DetailRowRight> + 3 d 2h 21m </DetailRowRight>
          
          
        </DetailRow>

        <DetailRow>
          <DetailRowLeft>Difference: </DetailRowLeft>
 
          <DetailRowRight> -  6h 27m </DetailRowRight>
          
          
        </DetailRow>
        </CompletedWrapper>
        }
  
</VariablesRight>
        
        


</VariablesWrapper>
    </Wrapper>
  )
}
 

const actions = {
  // changeDisplaySpotlight,
  changeSpotlightCompletedStatus
}

const mapState = state => ({
  display: state
})

export default connect(mapState, actions)(SpotlightDetail)
