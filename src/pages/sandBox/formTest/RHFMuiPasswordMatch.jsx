import React, { useRef } from 'react'

import { useForm, Controller } from "react-hook-form";



 


// Material UI -----------------------------
import { styled } from "@material-ui/core/styles"

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

const FormInput= styled('div')({
 

  '& input' : 
  {
    border: '1px solid orange',
    borderRadius: '5px',
    // width: '80%', 
    margin: '0 0 0 8px',
    width: '26rem',
    height: '2rem',
    outline: 'none' ,
  },
 
})

// =====================================

const RHFMuiPasswordMatch = () => {
 
  const {register, handleSubmit, watch, errors, control} = useForm({
    defaultValues: {
      // firstName: "bill",
      
    }
})


  const onSubmit = data => alert(JSON.stringify(data))


  const password = useRef({});
  password.current = watch("password", "");

  return (
    <Wrapper>
     
      <div>  RHF MUI Password Match</div>


    <form onSubmit = {handleSubmit(onSubmit)}>

{/*  Password Match  ----------- */}

    <FormSegmentWrapper>

    <SegmentHeader>
      Password
    </SegmentHeader>

    {/* <Controller as={StyledTextField} 
        name="password" 
        type = 'password'
        InputProps={{ disableUnderline: true }}
        control={control} 
        defaultValue="" 
        rules={{ 
          required: true ,
          minLength: 5
        
        }}

        />

        {errors.password && errors.password.type === "required" && 
          <ErrorWrapper>You must specify a password"</ErrorWrapper>}
        {errors.password && errors.password.type === "minLength" && 
          <ErrorWrapper>Minimum characters 5</ErrorWrapper>} */}
      <FormInput> 
      <input
          name="password"
          type="password"
          ref={register({
            required: "You must specify a password",
            minLength: {
              value: 5,
              message: "Password must have at least 8 characters"
            }
          })}
        />
        {errors.password && <ErrorWrapper>{errors.password.message}</ErrorWrapper>}

        </FormInput>   
    </FormSegmentWrapper>



    <FormSegmentWrapper>

        <SegmentHeader>
          Repeat Password
        </SegmentHeader>

        {/* <Controller as={StyledTextField} 
            name="password_repeat" 
            type = 'password'
            InputProps={{ disableUnderline: true }}
            control={control} 
            defaultValue="" 
            ref={register({
              validate: value =>
                value === password.current || "The passwords do not match"
            })}
    
        /> */}
        <FormInput> 
          <input
            name="password_repeat"
            type="password"
            ref={register({
              validate: value =>
                value === password.current || "The passwords do not match"
            })}
          />

          {errors.password_repeat && <ErrorWrapper>{errors.password_repeat.message}</ErrorWrapper>}
        </FormInput>
      
</FormSegmentWrapper>


      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMuiPasswordMatch
