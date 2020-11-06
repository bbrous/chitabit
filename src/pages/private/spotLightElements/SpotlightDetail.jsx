import React, {Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'

import SpotLightTasks from './SpotLightTasks'
import SpotLightTaskForm from '../../../forms/SpotLightTaskForm'
import {UTCtoDate, DatetoUTC, convertMS, msToStringDisplay} from '../../../app/helpers/dateHelper'
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
 width: '100%',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
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
   

  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},


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

const DetailRowRemaining= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 width: '100%',
// backgroundColor: 'aqua',
marginTop: '8px',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
  },
})



const DetailRowDifference= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '8px',
 


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    
  },
})



const DetailRowLeftDifference= styled('div')({

 
 color: 'grey',
  
   

  '&.redHighlight' : {color: 'red'},
  '&.greenHighlight' : {color:'green'},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const DetailRowRightDifference= styled('div')({
  display: 'flex',
  flexDirection: 'row',
 
  justifyContent: 'center',
  alignItems: 'center',
   
 
  
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
  let targetDate, beginDate, targetDateInMilliseconds, beginDateInMilliseconds, completedDateInMilliseconds 

  if(endEst) {
    targetDateInMilliseconds = DatetoUTC(endEst)
    // format target Date in milliseconds for display
    targetDate  =  UTCtoDate(targetDateInMilliseconds)
  
    // console.log('[SPOTLIGHT Detail] -- REMAINING' ,  days, hours, mins, secs)


  }else{
    targetDate  = 'No target date provided'
    
  }
  if(timeStamp) {
    beginDateInMilliseconds = DatetoUTC(timeStamp)
    // format target Date in milliseconds for display
    beginDate  =  UTCtoDate(beginDateInMilliseconds)
  
    // console.log('[SPOTLIGHT ] -- REMAINING' ,  days, hours, mins, secs)


  }else{
    targetDate  = 'No target date provided'
    
  }

  completedDateInMilliseconds = DatetoUTC(completedTimeStamp)
  let dateDifferenceMS =  targetDateInMilliseconds - completedDateInMilliseconds
  let dateDifference = msToStringDisplay(Math.abs(dateDifferenceMS))

  let targetTime = msToStringDisplay(timeEst)
  let differenceTimeInMilliseconds = timeEst- (completedDateInMilliseconds - beginDateInMilliseconds)
  let differenceTime = msToStringDisplay(Math.abs(differenceTimeInMilliseconds))

     
  // completedDateInMilliseconds = DatetoUTC(completedTimeStamp)
  // let dateDifferenceMS =  targetDateInMilliseconds - completedDateInMilliseconds
  // let dateDifference = msToStringDisplay(dateDifferenceMS)
  // console.log('[SPOTLIGHT Detail] -- dateDifference' ,  dateDifference)
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
          <DetailRowRight  className = 'blueHighlight'> 
            {targetDate} 
          </DetailRowRight>
          }
          
        </DetailRow>
  
        <DetailRow>
          <DetailRowLeft>Began: </DetailRowLeft>
 
          <DetailRowRight
           
          >
            {beginDate} 
          </DetailRowRight>
          
          
        </DetailRow>
        
        {!completedTimeStamp &&
        <DetailRowRemaining>
          <CountDownDisplay/>
        </DetailRowRemaining>
      }

        {spotlightStatus === 'completed' && 
        <CompletedWrapper>  
        <DetailRow>
          <DetailRowLeft>Ended: </DetailRowLeft>
 
          <DetailRowRight> {UTCtoDate(DatetoUTC(completedTimeStamp))} </DetailRowRight>
          
          
        </DetailRow>

        {dateDifferenceMS < 0 && 
          <DetailRowDifference>
            <DetailRowLeftDifference
            className = 'redHighlight'
            
            > Goal missed by: </DetailRowLeftDifference>
  
            <DetailRowRightDifference
              className = 'redHighlight'
            
            > 
            - {dateDifference.weeks} wks :    
            {dateDifference.days} days :   
            {dateDifference.hours} hrs :   
            {dateDifference.minutes} mns
            
            </DetailRowRightDifference>
            
            
          </DetailRowDifference>
        }
        {dateDifferenceMS > 0 &&
          <DetailRowDifference>
            <DetailRowLeftDifference
            className='greenHighlight'
            >Goal achieved by: </DetailRowLeftDifference>

            <DetailRowRightDifference
              className='greenHighlight'

            >
           {dateDifference.weeks} wks   
            {dateDifference.days} days   
            {dateDifference.hours} hrs   
            {dateDifference.minutes} mns

        </DetailRowRightDifference>


          </DetailRowDifference>
        }

      </CompletedWrapper>
      }
</VariablesLeft>

{/* ---RIGHT SIDE ------------------ */}

<VariablesRight>



        {/* <DetailRow>
          <DetailRowLeft>Targeted End: </DetailRowLeft>
 
          <DetailRowRight> {targetDate} </DetailRowRight>
          
          
        </DetailRow> */}

      {timeEst && 
      <DetailRow>
          <DetailRowLeft>Est Time: </DetailRowLeft>
 
          <DetailRowRight>
          {targetTime.weeks > 0 &&
            <div>{targetTime.weeks} w ::   </div>
          }
          {targetTime.days > 0 &&
            <div>{targetTime.days} d ::   </div>
          }

            {targetTime.hours} h ::   
            {targetTime.minutes} m 
             </DetailRowRight>
          
          
        </DetailRow>
  }

{!timeEst && 
      <DetailRow>
          <DetailRowLeft>Est Time: </DetailRowLeft>
 
          <DetailRowRight>
          No target time created
             </DetailRowRight>
          
          
        </DetailRow>
  }
        <DetailRow>
          <DetailRowLeft>Began: </DetailRowLeft>
 
          
          <DetailRowRight>{new Date(timeStamp).toLocaleString()}</DetailRowRight>
          
        </DetailRow>
 
        {spotlightStatus === 'completed' && 
        <CompletedWrapper>  
        <DetailRow>
          <DetailRowLeft>Ended: </DetailRowLeft>
 
          <DetailRowRight>{new Date(completedTimeStamp).toLocaleString()}</DetailRowRight>
          
          
        </DetailRow>


        {differenceTimeInMilliseconds < 0 && 
          <DetailRowDifference>
            <DetailRowLeftDifference
            className = 'redHighlight'
            
            > Goal missed by: </DetailRowLeftDifference>
  
            <DetailRowRightDifference
              className = 'redHighlight'
            
            > 
            {differenceTime.weeks} w ::  
            {differenceTime.days} d ::  
            {differenceTime.hours} h ::  
            {differenceTime.minutes} m
            
            </DetailRowRightDifference>
            
            
          </DetailRowDifference>
        }
        {differenceTimeInMilliseconds > 0 &&
          <DetailRowDifference>
            <DetailRowLeftDifference
            className='greenHighlight'
            >Goal achieved by: </DetailRowLeftDifference>

            <DetailRowRightDifference
              className='greenHighlight'

            >
           {differenceTime.weeks} w ::  
            {differenceTime.days} d ::  
            {differenceTime.hours} h ::  
            {differenceTime.minutes} m

        </DetailRowRightDifference>


          </DetailRowDifference>
        }








        {/* <DetailRow>
        <DetailRowRight>
          {differenceTime.weeks > 0 &&
            <div>{differenceTime.weeks} w: </div>
          }
          {differenceTime.days > 0 &&
            <div>{differenceTime.days} d: </div>
          }

            {differenceTime.hours} h: 
            {totalTime.minutes} m
             </DetailRowRight>
          
          
        </DetailRow> */}







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
