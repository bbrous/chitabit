import React, { useRef } from 'react'

import { useForm, Controller } from "react-hook-form";

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "react-datepicker/dist/react-datepicker.css";

 


// Material UI -----------------------------
import { styled, createMuiTheme } from "@material-ui/core/styles"

import { TextField, Checkbox } from "@material-ui/core";

// ----------------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component


const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'pink',
  width: '100%',
  height: '100%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const InputWrapper= styled('div')({
  color: 'blue',

  '& input' : {
    height: '1.4rem',
    width: '100%',
    backgroundColor: 'yellow',
    border: '1px solid red',
    borderRadius: '5px',
    color: 'orange',
    marginBottom: '5px'
  }

})

const MaterialUIWrapper= styled('div')({
  color: 'red'

})

const ErrorWrapper= styled('div')({
  color: 'aqua'

})

const MuiTextFieldStyled= styled(TextField)({
  width: '80%', 
  '& input' : 
  {color: 'purple',
  height: '3rem',

}
})



// =====================================

const RHFMui = () => {

  const today = new Date()
  const {register, handleSubmit, watch, errors, control} = useForm({
              defaultValues: {
                // firstName: "bill",
                datePickerDate: today,
                email: "bluebill1049@hotmail.com",
                isDeveloper: true
              }
         })

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
             

  const onSubmit = data => alert(JSON.stringify(data))

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <Wrapper>
     
      <div>  RHF MUI here </div>


    <form onSubmit = {handleSubmit(onSubmit)}>

      <InputWrapper>
        {/* <input type="text" name ='firstName' defaultValue = 'test' ref ={register}/> */}

        <Controller as={MuiTextFieldStyled} name="firstName" 
                  control={control} 
                  defaultValue="" 
                  rules={{ required: true }}
                  />
        {errors.firstName && errors.firstName.type === "required" && 
        <ErrorWrapper>First name is required</ErrorWrapper>}
        
      </InputWrapper>

      <InputWrapper>
        <input name ='exampleRequired' 
                type="text" 
                ref ={register({
                  required: true,
                  minLength: 5
          
          })}
        />
  
          {errors.exampleRequired && errors.exampleRequired.type === "required" && <ErrorWrapper>This is required</ErrorWrapper>}
          {errors.exampleRequired && errors.exampleRequired.type === "minLength" && <ErrorWrapper>TMust be greater than 5</ErrorWrapper>}
       
      </InputWrapper>

      <InputWrapper>
        <label>Password</label>
        <input
          name="password"
          type="password"
          ref={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
        />
        {errors.password && <ErrorWrapper>{errors.password.message}</ErrorWrapper>}
      </InputWrapper>

      <InputWrapper>
        <label>Repeat password</label>
        <input
          name="password_repeat"
          type="password"
          ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}
        />
        {errors.password_repeat && <ErrorWrapper>{errors.password_repeat.message}</ErrorWrapper>}

      </InputWrapper>

      <MaterialUIWrapper>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          as={
            <KeyboardDatePicker
              fullWidth
              autoOk
              // error={!!error}
              inputVariant="outlined"
              variant="inline"
              format="dd-MM-yyyy"
              label="Year of registration"
              // helperText={error}
              value={selectedDate}
          
              onChange={handleDateChange}
            />
          }
          control={control}
          name="datePickerDate"
          placeholder="Year of registration"
        />
  </MuiPickersUtilsProvider>
  
      </MaterialUIWrapper>


      <InputWrapper>
        <input type="submit"/>
      </InputWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMui
