import React from 'react'

import{chitOrange, lightGrey, chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight, chitVeryLightYellow, mediumGrey} from '../../styles/colors'

import Paper from '@material-ui/core/Paper'

import { styled, createMuiTheme } from "@material-ui/core/styles"

import NotesIcon from '@material-ui/icons/Notes';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme(); // allows use of mui theme in styled component

// ---------------------------------






// ----------------------
const TaskContainer= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '98%',
    
  padding: '.25rem .5rem',
  margin: '.25rem 0',

// backgroundColor: lightGrey,

  fontSize: '.8rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

 

 

const TaskRow= styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '98%',
  margin: '2px 0',
  padding: '.25rem .5rem',
  // backgroundColor: 'red',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Task= styled('div')({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  // margin: '6px 0',
  

  flexWrap: 'wrap',

  fontSize: '.9rem',
  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
// -----------------------------
const CheckCircleWrapper= styled('div')({
  
  width: '1.1rem',
   
  // border: '1px solid grey',
  
  marginRight: '1rem',
  // color: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const CheckCircle= styled('div')({
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid grey',
  borderRadius: '200px',
   
  // color: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})




const IconsWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  // backgroundColor: 'yellow',
   marginLeft: '1rem',

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const NoteIcon= styled(NotesIcon)({
  backgroundColor: chitOrange,
  borderRadius: '5px',
  fontSize: '1.3rem',
  color: 'white',
  margin: '2px 0',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const ClockIcon= styled(QueryBuilderIcon)({
  
  color:chitOrange,
  fontSize: '1.6rem',
  margin: '2px 0',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const Options= styled(MenuIcon)({
  
  color:chitOrange,
  fontSize: '1.6rem',
  margin: '2px 0',
  // backgroundColor: 'yellow',
   

  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


// const IconsWrapper= styled('div')({
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   height: '8rem',
//   backgroundColor: 'yellow',
   

  


//   [theme.breakpoints.down('sm')] : {
//     // height: '1.25rem',
//     // backgroundColor: 'red'
//   },
// })

// const NoteIcon= styled(NotesIcon)({
//   backgroundColor: chitOrange,
//   borderRadius: '5px',
//   fontSize: '1.3rem',
//   color: 'white',
//   // backgroundColor: 'yellow',
   

  


//   [theme.breakpoints.down('sm')] : {
//     // height: '1.25rem',
//     // backgroundColor: 'red'
//   },
// })

// const ClockIcon= styled(QueryBuilderIcon)({
  
//   color:chitOrange,
//   fontSize: '1.6rem',
//   // backgroundColor: 'yellow',
   

  


//   [theme.breakpoints.down('sm')] : {
//     // height: '1.25rem',
//     // backgroundColor: 'red'
//   },
// })


// ====================================

export const SpotlightTasks = () => {
  return (

     <TaskContainer>


        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>Dabba Yabba dabba doo Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>

            This is Spotlight 2
            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2            
            This is Spotlight 2

          </Task>

          <IconsWrapper>
            <ClockIcon/>
          <NoteIcon/>
          
          </IconsWrapper>

        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
          
            <Options/>
        
          
          
        </TaskRow>

        
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1 bbb  T
          This is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  TThis is Task 1 bbb  T


          </Task>
          <IconsWrapper>
             
          <NoteIcon/>
          
          </IconsWrapper>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task21</Task>
        </TaskRow>



        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>


        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>

        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task 1</Task>
        </TaskRow>
        <TaskRow elevation ={1}>
          <CheckCircleWrapper>  <CheckCircle/>  </CheckCircleWrapper>
          <Task>This is Task28</Task>
        </TaskRow>









     </TaskContainer>

 
  )
}


export default SpotlightTasks
