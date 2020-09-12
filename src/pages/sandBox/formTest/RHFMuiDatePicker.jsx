import React from 'react'

import { useForm, Controller } from "react-hook-form";



 


// Material UI -----------------------------
import { styled } from "@material-ui/core/styles"

// MUI date picker -------------------
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Icon from "@material-ui/core/Icon";
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

 
const TargetDateWrapper= styled('div')({
  border: '1px solid orange',
  borderRadius: '5px',
  width: '100%', 
  margin: '0 0 0 8px',
  
  '& input' : 
  { 
  height: '1rem',
  padding: '.4rem',
  fontSize: '.85rem',
  width: '15rem', 
  }
})

const IconContainer= styled(Icon)({
  color: 'orange'

})


// =====================================

const RHFMuiDatePicker = () => {
 
  const today = new Date()
  const {handleSubmit, errors, control} = useForm({
    defaultValues: {
                 
      datePickerWithDate:  today,
      datePickerNull:  null,
      
    }
         })


  const onSubmit = data => alert(JSON.stringify(data))

  // datepicker functions 
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
          

  return (
    <Wrapper>
     
      <div>  RHF MUI Date Pickers</div>


    <form onSubmit = {handleSubmit(onSubmit)}>

{/* ---- Date Picker  with NULL default ---------------*/}

    <FormSegmentWrapper>



 
              <SegmentHeader>
                Target date to complete
              </SegmentHeader>

               
                
                <TargetDateWrapper>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Controller
                        as={
                          <KeyboardDatePicker
                          
                            fullWidth
                            autoOk
                            // error={!!error}
                            inputVariant="outlined"
                            variant="inline"
                            format="MMMM dd yyyy"
                            // label="Year of registration"
                            // helperText={error}
                            value={selectedDate}
                            keyboardIcon={<IconContainer>today_icon</IconContainer>}
                            onChange={handleDateChange}
                          />
                        }
                        control={control}
                        name="datePickerNull"
                        placeholder="Choose Date"
                      />
                    </MuiPickersUtilsProvider>
    
                </TargetDateWrapper>

{/* ---- Date Picker With Default Date ---------------*/}

                <TargetDateWrapper>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Controller
                        as={
                          <KeyboardDatePicker
                          
                            fullWidth
                            autoOk
                            // error={!!error}
                            inputVariant="outlined"
                            variant="inline"
                            format="MMMM dd yyyy"
                            // label="Year of registration"
                            // helperText={error}
                            value={selectedDate}
                            keyboardIcon={<IconContainer>today_icon</IconContainer>}
                            onChange={handleDateChange}
                          />
                        }
                        control={control}
                        name="datePickerWithDate"
                        placeholder="Choose Date"
                      />
                    </MuiPickersUtilsProvider>

                    </TargetDateWrapper>

                         
            
          
    </FormSegmentWrapper>

 


      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMuiDatePicker
