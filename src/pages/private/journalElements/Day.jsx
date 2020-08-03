import React from 'react'
import{ chitOrangeLight, chitVeryLightYellow, darkGrey } from '../../../styles/colors'
import { styled, createMuiTheme } from "@material-ui/core/styles"

import Section from './Section'
import InputForm from './InputForm'
import Chit from './Chit'
import Paper from '@material-ui/core/Paper'

const theme = createMuiTheme(); // allows use of mui theme in styled component
//--------------------------------------

const Wrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '1rem 0',
  padding: '0',
  width: '96%',
  backgroundColor: chitVeryLightYellow,
  fontSize: '.8rem',
 

   
})

const DayHeader= styled('div')({
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'center',
 
  padding: '0 1rem',
  width: '100%',
  height: '2rem',
  backgroundColor: darkGrey,
  color: 'white',
  fontSize: '1.1rem',
  borderRadius: '5px 5px 0 0',
  

   
})

const DayContent= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  // margin: '1.75rem 0',
  padding: '.7rem',
  width: '100%',

 

   
})

const Day = () => {
  return (
    <Wrapper>
      <DayHeader>
        <div>
          June 4 2020 - Monday
        </div>
        <div>
          It's a great day to be me
        </div>
      </DayHeader>
      <DayContent>


          <Section/>
          <Section/>
          <Chit/>
          <InputForm/>


      </DayContent>
    </Wrapper>
  )
}

export default Day
