import React from 'react'
import{chitOrangeLight, chitBlueDull, chitBlueLight, chitBlueVeryLight } from '../styles/colors'

import { styled, createMuiTheme } from "@material-ui/core/styles"


const theme = createMuiTheme(); // allows use of mui theme in styled component


const Wrapper= styled('div')({
  display: 'flex',
  //  position: 'absolute',
  //  top: '3.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  height: '1.7rem',
  width: '100%',
  backgroundColor: 'white',
  padding: '4px 0',
  margin: '1.5rem 0 1rem 0',
 
})

// const ButtonWrapper= styled('div')({
//   display: 'flex',
//   position: 'absolute',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   height: '1.75rem',
//   width: '100%',
//   backgroundColor: 'gold',
 
   
// })

const ActionButton= styled('div')({
  display: 'flex',
  
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100%',
  width: '24%',
  margin: '0 2px',
  backgroundColor: chitBlueDull,
  borderRadius: '5px',
  fontSize: '.8rem',
  color: 'white',
 
  '&:hover' : {
    backgroundColor: chitOrangeLight,
    textDecoration: 'none',
    color: chitBlueDull,
    fontWeight: 'bold'
  }
   
})


const ActionButtonDisabled= styled('div')({
  display: 'flex',
  
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100%',
  width: '24%',
  margin: '0 2px',
  backgroundColor: chitBlueVeryLight,
  borderRadius: '5px',
  fontSize: '.8rem',
  color: 'white',
 

   
})


// ==============================

const JournalButtons = () => {
  return (
    <Wrapper>
      <ActionButton>New Day</ActionButton>
      <ActionButton>Add Section</ActionButton>
      <ActionButton>New Chit</ActionButton>
      <ActionButtonDisabled>Save  </ActionButtonDisabled>


    </Wrapper>
  )
}


export default JournalButtons
