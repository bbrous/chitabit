import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {startingElapsedTime} from '../../../../app/helpers/timerHelpers'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, darkGrey, } from '../../../../styles/colors'
import {UTCtoDate, DatetoUTC, msToStringDisplay, convertElapsedTime} from '../../../../app/helpers/dateHelper'


// ----Material ui imports  -------
import { styled, createMuiTheme  } from "@material-ui/core/styles"



const theme = createMuiTheme(); // allows use of mui theme in styled component



//---------TASK Display STYLING ---------------------------------

const TaskTimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
 
  
backgroundColor: 'white',
  borderRadius: '3px',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskTimeRow= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TaskTimeStatus= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginRight: '.5rem',
  color: 'green ',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
 
const TaskTimeComponent= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
 


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TaskTime= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TaskTimeLabel= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 5px 0 1px',
  fontStyle: ' italic',
  
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ==========================
function CountDownDisplay(props) {

  let spotlightId = 'spot_1'
  let timerStatus = 'begun'
// let {spotlightId, taskId}  = props

  let timeStart = props.display.private.data.spotlightData.spotlights[spotlightId].timeStamp
 
 

  
  console.log('[COUNTDOWN DISPLAY] timerStart - ' , timeStart)



  // let timerData = props.display.private.data.spotlightData.spotlights[spotlightId].tasks[taskId].clock
  // let {timerStatus, accumulatedTime, lastDate }  = timerData


  // set intial state
  const [timerWeeks, setTimerWeeks] = useState('0')
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  const [status, setStatus] = useState(timerStatus)


  let interval = useRef()
  let startTimerRunning = useRef()
  let startTimerStopped = useRef()





    

  // startTimerStopped.current = () => {

  //   /*  
  //    shows frozen accumulated time
  //    derived from Redux task.clock.accumulatedTime
  //   */ 

  //   let displayTime = msToStringDisplay(accumulatedTime)
  //   let {days, hours, minutes, seconds} = displayTime

  //     setTimerDays(days)
  //     setTimerHours(hours)
  //     setTimerMinutes(minutes)
  //     setTimerSeconds(seconds)
    
  // }

  startTimerRunning.current = () => {
  /*  
     shows running time 
     calculated:  current (date-time) - (lastDate)
  */ 
 
    
 

    
    interval = setInterval(() => {
      // const now = new Date().getTime()
      // const  distance =  timeStart - now 
      
      // let displayTime = msToStringDisplay(distance)
      // let {weeks, days, hours, minutes, seconds} = displayTime

      const now = new Date().getTime()
      const  distance =  new Date(timeStart).getTime() - now 
      
      let displayTime = msToStringDisplay(distance)
      let {weeks, days, hours, minutes, seconds} = displayTime

        setTimerDays(weeks)
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
 

    }, 1000)

  }

  useEffect(()=>{

    setStatus(timerStatus)


        startTimerRunning.current()
      return  ()=> {clearInterval(interval)}




    
  //   if(status === 'running'){
  //     startTimerRunning.current()
  //     return  ()=> {clearInterval(interval)}
  //   }else{
  //     startTimerStopped.current()
  //   }
  }, [startTimerRunning, status,timerStatus]) 



  // []-----------------------------------------------
  return (
    <TaskTimeWrapper>


     
    <TaskTimeRow> 
 

      <TaskTimeComponent>
        {/* <TaskTime>3</TaskTime> */}
        <TaskTime>{timerWeeks}</TaskTime>


        <TaskTimeLabel>wks :</TaskTimeLabel>
      </TaskTimeComponent>
     
      <TaskTimeComponent>
        {/* <TaskTime>5</TaskTime> */}
        <TaskTime>{timerDays}</TaskTime>

        <TaskTimeLabel>days :</TaskTimeLabel>
      </TaskTimeComponent>
 
    
     
      <TaskTimeComponent>
        {/* <TaskTime>14</TaskTime> */}
        <TaskTime>{timerHours}</TaskTime>

        <TaskTimeLabel>hrs :</TaskTimeLabel>
     
      </TaskTimeComponent>
 
      <TaskTimeComponent>
        {/* <TaskTime>37</TaskTime> */}
        <TaskTime>{timerMinutes}</TaskTime>

        <TaskTimeLabel>mins :</TaskTimeLabel>

      </TaskTimeComponent>

      <TaskTimeComponent>
        {/* <TaskTime>41</TaskTime> */}
        <TaskTime>{timerSeconds}</TaskTime>

        <TaskTimeLabel>secs</TaskTimeLabel>
    
      </TaskTimeComponent>
    </TaskTimeRow>
    
    
    
    
              </TaskTimeWrapper>
  )
}// end TaskTimerDisplay

 

const mapState = state => ({
  display: state
})

export default connect(mapState)(CountDownDisplay)

