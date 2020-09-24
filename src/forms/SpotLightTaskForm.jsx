import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {connect} from 'react-redux'

import{addTask} from '../app/redux/actions/mainActions'

// Material UI =============================

import { styled, createMuiTheme, makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'

import { TextField, Checkbox, Button } from "@material-ui/core";
import { chitBlueDull, chitOrangeLight, darkGrey, chitBlueLight } from '../styles/colors';
 
 

import Icon from "@material-ui/core/Icon";


const theme = createMuiTheme(); // mui theme for styled component

// ========================================

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
 
  // backgroundColor: 'pink',
  width: '100%',
  

})

const FormWrapper= styled('form')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '4px 1rem',
  borderRadius: '5px',
  backgroundColor: 'white'


})


const StyledTextField= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '16rem',
  backgroundColor: 'white',
  marginRight: '8px',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.8rem',
  padding: '.4rem',
  
  }


})

const ButtonWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  
  justifyContent: 'center',
  alignItems: 'center',

  
  // backgroundColor: 'pink',
  // width: '100%',
  
 

})

const SubmitButton= styled(Button)({

  backgroundColor: chitBlueLight,
  color: 'white',
  border: 'none',
  padding: '0',
  width: '8rem',
  fontSize: '.7rem',
  textTransform: 'none',
  margin: '2px',
  '&:hover':
    {  
      backgroundColor: chitOrangeLight,
      border: 'none'
    },
 


})

// =============================================


function SpotLightTaskForm() {

  const {register, handleSubmit, watch, errors, control, setValue} = useForm({
    defaultValues: {
      todo: '',

    }
})

// &&&&&&&&&   ADD TASK ACTION HERE   &&&&&&&&&&&&&&&&&&&









const onSubmit = data => alert(JSON.stringify(data))











// &&&&&&&&&   ADD TASK ACTION HERE   &&&&&&&&&&&&&&&&&&&

  return (
    <Wrapper>
      <FormWrapper onSubmit = {handleSubmit(onSubmit)}>
      <Controller as={StyledTextField} 
                  name="todo" 
                  InputProps={{ disableUnderline: true }}
                  control={control} 
                  defaultValue="" 
                  rules={{ 
                    required: true ,
                    maxLength: 40
                  
                  }}
                  />

                  {/* {errors.goal && errors.goal.type === "required" && 
                    <ErrorWrapper>First name is required</ErrorWrapper>}
                  {errors.goal && errors.goal.type === "maxLength" && 
                    <ErrorWrapper>Maximum characters 40</ErrorWrapper>} */}

        <ButtonWrapper>
          <SubmitButton type ="submit"> Add as Task </SubmitButton>
          <SubmitButton type ="submit"> Add as Spotlight </SubmitButton>
        </ButtonWrapper>

      </FormWrapper>
      
    </Wrapper>
  )
}

 

const actions = {
  addTask
}

const mapState = state => ({
  display: state
})

export default connect(mapState, actions)(SpotLightTaskForm)
