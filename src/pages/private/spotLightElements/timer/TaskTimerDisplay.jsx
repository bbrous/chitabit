import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import{chitOrange,  mediumGrey, mediumLightGrey, chitOrangeLight, darkGrey, } from '../../../../styles/colors'
import {UTCtoDate, DatetoUTC, convertMS, convertElapsedTime} from '../../../../app/helpers/dateHelper'

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
function TaskTimerDisplay() {

  const [timerDays, setTimerDays] = useState('0')
  const [timerHours, setTimerHours] = useState('0')
  const [timerMinutes, setTimerMinutes] = useState('0')
  const [timerSeconds, setTimerSeconds] = useState('0')



  let interval = useRef()
  let startTimer = useRef()
  // function addZeroBefore(n) {
  //   return (n < 10 ? '0' : '') + n;
  // }
  startTimer.current = () => {


    const startTime = new Date().getTime() - 566000

    interval = setInterval(() => {
      const now = new Date().getTime()
      const  distance = now - startTime 

      const days = Math.floor(distance /  ( 1000 * 60 * 60 * 24) )
      const hours = Math.floor((distance % ( 1000 * 60 * 60 * 24) / ( 1000 * 60 * 60) ) )
      const minutes = Math.floor((distance % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) ) )
      const seconds = Math.floor((distance % ( 1000 * 60 ) / ( 1000) ) )

  
        setTimerDays(days)
        setTimerHours( hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
 

    }, 1000)

  }

  useEffect(()=>{
    startTimer.current()
    return  ()=> {clearInterval(interval)}
  }, [startTimer])

  // ------
  return (
    <TaskTimeWrapper>


     
    <TaskTimeRow> 

      <TaskTimeStatus>
        Running :
      </TaskTimeStatus>
      {timerDays > 0 && 
      <TaskTimeComponent>
        <TaskTime>{timerDays}</TaskTime>
        <TaskTimeLabel>d :</TaskTimeLabel>
      </TaskTimeComponent>
 
      }
    {timerHours > 0 && 
      <TaskTimeComponent>
        <TaskTime>{timerHours}</TaskTime>
        <TaskTimeLabel>h :</TaskTimeLabel>
     
      </TaskTimeComponent>
 }
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

 

const mapState = state => ({
  display: state
})

export default connect(mapState)(TaskTimerDisplay)

