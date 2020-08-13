import React, {useEffect, useState }  from 'react'

import {convertMS} from '../../../app/helpers/dateHelper'

import { styled, createMuiTheme } from "@material-ui/core/styles"
import { mediumGrey, lightGrey, chitVeryLightYellow } from '../../../styles/colors';


const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',


  

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '0',
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const TimeLeftWrapper = styled('div')({

  display: 'flex',
 
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  width: '90%',


  

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})


const TimeSegmentWrapper = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',


  

  [theme.breakpoints.down('sm')] : {
    // display: 'block'
  },

  [theme.breakpoints.down('xs')] : {
    // display:  'none',

  }

})

const Time = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'red',
  fontSize: '1.3em',
  width: '2.3rem',
  margin: '0 2px',
  backgroundColor: chitVeryLightYellow

})

const TimeLabel = styled('div')({

  color: mediumGrey,
  fontSize: '.8rem'

})
// ================================================

const RemainingTime = () => {


  let startDate = 1596807987000  //Aug 7, 2020 5:46 - Friday
  let endDate = 1597516287000   // Aug 15, 2020 10:31 AM ? - Saturday
  let msRemaining = endDate - startDate
 

 


    const [counter, setCounter] = useState(msRemaining);

    // Third Attempts
    useEffect(() => {
      
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1000), 1000);
        

        
      return () => clearInterval(timer);
      
    }, [counter]);

    let timeRemainingObject =  convertMS(counter)
console.log('[RemainingTime] time left min: ', timeRemainingObject.minute)
console.log('[RemainingTime] time left: sec', timeRemainingObject.seconds)

let days = timeRemainingObject.day
let hours = timeRemainingObject.hour
let mins = timeRemainingObject.minute
let secs = timeRemainingObject.seconds

  return (
    <Wrapper>
      
          {/* {timeRemainingObject.day} days - {timeRemainingObject.hour} hours - - {timeRemainingObject.minute} min - - {timeRemainingObject.seconds} sec */}

          
        <TimeLeftWrapper> 
          <TimeSegmentWrapper>
            <Time> {days} </Time>
            <TimeLabel>  days  </TimeLabel>
          </TimeSegmentWrapper>

          <TimeSegmentWrapper>
            <Time> {hours} </Time>
            <TimeLabel>  hours  </TimeLabel>
          </TimeSegmentWrapper>

          <TimeSegmentWrapper>
            <Time> {mins} </Time>
            <TimeLabel>  mins  </TimeLabel>
          </TimeSegmentWrapper>

          <TimeSegmentWrapper>
            <Time> {secs} </Time>
            <TimeLabel>  secs  </TimeLabel>
          </TimeSegmentWrapper>

        </TimeLeftWrapper>

    </Wrapper>
  )
}

export default RemainingTime
