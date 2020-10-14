import React, {useState, useEffect, useRef} from 'react'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, darkGrey, } from '../../../../styles/colors'
import {UTCtoDate, DatetoUTC, convertMS, convertElapsedTime} from '../../../../app/helpers/dateHelper'

// ----Material ui imports  -------
import { styled, createMuiTheme  } from "@material-ui/core/styles"



const theme = createMuiTheme(); // allows use of mui theme in styled component



// ------------------
const TimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '4px',
  color: darkGrey,
backgroundColor: 'white',
  borderRadius: '3px',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const TimeRow= styled('div')({
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


const TimeComponent= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '30%',


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const Time= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
  fontSize: '.85rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const TimeLabel= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.65rem',
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

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
  marginRight: '1rem',
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
  margin: '0 8px 0 1px',
  fontStyle: ' italic',
  
  

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// ==================================
export function PopupTimerDisplay() {

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')



  let interval = useRef()
  function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }
  const startTimer = () => {

    const countdownDate = new Date( "2020-12-14T04:46:20.619Z").getTime()
    const startTime = new Date().getTime() - 5566000

    interval = setInterval(() => {
      const now = new Date().getTime()
      const  distance = now - startTime 

      const days = Math.floor(distance /  ( 1000 * 60 * 60 * 24) )
      const hours = Math.floor((distance % ( 1000 * 60 * 60 * 24) / ( 1000 * 60 * 60) ) )
      const minutes = Math.floor((distance % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) ) )
      const seconds = Math.floor((distance % ( 1000 * 60 ) / ( 1000) ) )

  
        setTimerDays(days)
        setTimerHours(addZeroBefore(hours))
        setTimerMinutes(addZeroBefore(minutes))
        setTimerSeconds(addZeroBefore(seconds))
 

    }, 1000)

  }

  useEffect(()=>{
    startTimer()
    return  clearInterval(interval.current)
  }, [])

  // ------
  return (
    <TimeWrapper>


     
    <TimeRow> 
      <TimeComponent>
        <Time>{timerDays}</Time>
        <TimeLabel>days</TimeLabel>
      </TimeComponent>
 

    
      <TimeComponent>
        <Time>{timerHours}</Time>
        <TimeLabel>hrs</TimeLabel>

      </TimeComponent>

      <TimeComponent>
        <Time>{timerMinutes}</Time>
        <TimeLabel>min</TimeLabel>

      </TimeComponent>

      <TimeComponent>
        <Time>{timerSeconds}</Time>
        <TimeLabel>secs</TimeLabel>
    
      </TimeComponent>
    </TimeRow>
    
    
    
    
              </TimeWrapper>
  )
}// end PopupTimerDisplay


// ==================================
export function TaskTimerDisplay() {

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')



  let interval = useRef()
  function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }
  const startTimer = () => {

    const countdownDate = new Date( "2020-12-14T04:46:20.619Z").getTime()
    const startTime = new Date().getTime() - 5566000

    interval = setInterval(() => {
      const now = new Date().getTime()
      const  distance = now - startTime 

      const days = Math.floor(distance /  ( 1000 * 60 * 60 * 24) )
      const hours = Math.floor((distance % ( 1000 * 60 * 60 * 24) / ( 1000 * 60 * 60) ) )
      const minutes = Math.floor((distance % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) ) )
      const seconds = Math.floor((distance % ( 1000 * 60 ) / ( 1000) ) )

  
        setTimerDays(addZeroBefore(days))
        setTimerHours(addZeroBefore(hours))
        setTimerMinutes(addZeroBefore(minutes))
        setTimerSeconds(addZeroBefore(seconds))
 

    }, 1000)

  }

  useEffect(()=>{
    startTimer()
    return  clearInterval(interval.current)
  }, [])

  // ------
  return (
    <TaskTimeWrapper>


     
    <TaskTimeRow> 

      <TaskTimeStatus>
        Running :
      </TaskTimeStatus>

      <TaskTimeComponent>
        <TaskTime>{timerDays}</TaskTime>
        <TaskTimeLabel>d :</TaskTimeLabel>
      </TaskTimeComponent>
 

    
      <TaskTimeComponent>
        <TaskTime>{timerHours}</TaskTime>
        <TaskTimeLabel>h :</TaskTimeLabel>

      </TaskTimeComponent>

      <TaskTimeComponent>
        <TaskTime>{timerMinutes}</TaskTime>
        <TaskTimeLabel>m :</TaskTimeLabel>

      </TaskTimeComponent>

      <TaskTimeComponent>
        <TaskTime>{timerSeconds}</TaskTime>
        <TaskTimeLabel>s</TaskTimeLabel>
    
      </TaskTimeComponent>
    </TaskTimeRow>
    
    
    
    
              </TaskTimeWrapper>
  )
}// end TaskTimerDisplay


