import React from 'react'
import { useForm, Controller } from "react-hook-form";


// Material UI =============================

import { styled, createMuiTheme, makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'

import { TextField, Checkbox, Button } from "@material-ui/core";
import { chitBlueDull, chitOrangeLight, lightGrey } from '../styles/colors';
 
 

import Icon from "@material-ui/core/Icon";


const theme = createMuiTheme(); // mui theme for styled component

// ========================================

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  // backgroundColor: 'pink',
  width: '100%',
  
 

  '& form' : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
 
  }

})

const ButtonWrapper= styled('div')({
  display: 'flex',
  
  justifyContent: 'center',
  alignItems: 'center',
  
  // backgroundColor: 'pink',
  width: '100%',
  
 

})


function SpotLightTaskForm() {
  return (
    <Wrapper>
      <form>
        <TextField/>

        <ButtonWrapper>
          <Button> New Task </Button>
          <Button> New Child Spotlight </Button>
        </ButtonWrapper>

      </form>
      
    </Wrapper>
  )
}

export default SpotLightTaskForm
