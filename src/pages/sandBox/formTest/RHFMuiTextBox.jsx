import React from 'react'

import { useForm, Controller } from "react-hook-form";



 


// Material UI -----------------------------
import { styled, createMuiTheme } from "@material-ui/core/styles"

import { TextField } from "@material-ui/core";

// ----------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const SubmitWrapper= styled('div')({
  color: 'blue',

  '& input' : {
    height: '1.4rem',
    width: '8rem' ,
    backgroundColor: 'orange',
    border: '1px solid red',
    borderRadius: '5px',
    color: 'white',
    marginBottom: '5px',
    cursor: 'pointer',

    '&:hover' :{
      color: 'blue'
    }
  }

})

const FormSegmentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '.5rem 0',


  // backgroundColor: 'yellow',
  width: '100%',


})

const SegmentHeader= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginBottom: '4px',
  fontSize: '.85rem',
  width: '100%',
  padding: '2px 4px',
  backgroundColor: 'lightGrey'

})

const ErrorWrapper= styled('div')({
  color: 'red'

})

const StyledTextField= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '26rem',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.85rem',
  padding: '.4rem',
  
  }


})



// =====================================

const RHFMuiTextBox = () => {
 
  const {handleSubmit, errors, control} = useForm({
              defaultValues: {
                // firstName: "bill",

              }
         })


  const onSubmit = data => alert(JSON.stringify(data))



  return (
    <Wrapper>
     
      <div>  RHF MUI Text Box</div>


    <form onSubmit = {handleSubmit(onSubmit)}>

{/*  Goal  ----------- */}

    <FormSegmentWrapper>

    <SegmentHeader>
      Goal or Objective
    </SegmentHeader>

    <Controller as={StyledTextField} name="goal" 
        InputProps={{ disableUnderline: true }}
        control={control} 
        defaultValue="" 
        rules={{ 
          required: true ,
          minLength: 5
        
        }}
        />

        {errors.goal && errors.goal.type === "required" && 
          <ErrorWrapper>First name is required</ErrorWrapper>}
        {errors.goal && errors.goal.type === "minLength" && 
          <ErrorWrapper>Maximum characters 5</ErrorWrapper>}
          
    </FormSegmentWrapper>

 


      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMuiTextBox
