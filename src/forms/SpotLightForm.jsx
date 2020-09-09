import React from 'react'
import { useForm, Controller } from "react-hook-form";



// Material UI =============================

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'

import { TextField, Checkbox } from "@material-ui/core";
import { chitBlueDull, lightGrey } from '../styles/colors';

// MUI date picker -------------------
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { red } from '@material-ui/core/colors';


const theme = createMuiTheme(); // mui theme for styled component

// ========================================

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  backgroundColor: 'pink',
  width: '100%',
  height: '100%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const FormContainer= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  backgroundColor: 'white',
  width: '100%',
  // height: '98%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const FormHeader= styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  margin: '4px 0 8px 0',
  fontSize: '1.1rem',
  color: chitBlueDull,

})

const FormWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  
  // backgroundColor: 'yellow',
  width: '100%',
  // height: '98%',
 

  '& form' : {
  
    width: '100%',
    // backgroundColor: 'green'
 
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
  backgroundColor: lightGrey

})

const FormInput= styled('div')({
   display: 'block'


})

const ErrorWrapper= styled('div')({
  color: 'red'

})

// ======  Fields   ==========================



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

const TimeWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
 
})

const TimeSection= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '12 rem',
  // backgroundColor: 'red',

  margin: '.5rem 8px',
})

const TimeLabel= styled('div')({
  width: '2rem'

})

const TimeForm= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '2rem',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.85rem',
  padding: '.4rem',
  border: 'none'
  
  }
  
})

// ===========================================
const SpotLightForm = () => {

  const today = new Date() // for datepicker initial value

  const {register, handleSubmit, watch, errors, control} = useForm({
              defaultValues: {
                // goal: "bill",
                datePickerDate:  null,
                email: "bluebill1049@hotmail.com",
                isDeveloper: true
              }
         })
  // datepicker functions 
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
             

  const onSubmit = data => alert(JSON.stringify(data))


  // return ==================== return ================= return ==============

  return (
    <Wrapper>
      <div>       SpotLight Form - reducer main currently = true    </div>
      <FormContainer elevation = {2}>

        <FormHeader> New Spotlight</FormHeader>

        <FormWrapper>

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
                    maxLength: 40
                  
                  }}
                  />

                  {errors.goal && errors.goal.type === "required" && 
                    <ErrorWrapper>First name is required</ErrorWrapper>}
                  {errors.goal && errors.goal.type === "maxLength" && 
                    <ErrorWrapper>Maximum characters 40</ErrorWrapper>}
                    
            </FormSegmentWrapper>

{/*  Target Date ----------- */}

            <FormSegmentWrapper>
              <SegmentHeader>
                Target date to complete
              </SegmentHeader>

              <FormInput>
                
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
                        
                            onChange={handleDateChange}
                          />
                        }
                        control={control}
                        name="datePickerDate"
                        placeholder="Choose Date"
                      />
                    </MuiPickersUtilsProvider>
    
                </TargetDateWrapper>

              </FormInput>            
            </FormSegmentWrapper>

{/*  Completion Time ----------- */}

            <FormSegmentWrapper>
              <SegmentHeader>
                Estimated time to complete
              </SegmentHeader>

                <TimeWrapper>
                  <TimeSection> 
                    <TimeLabel>mos</TimeLabel>
                    
                    <Controller as={TimeForm} name="mos" 
                      InputProps={{ disableUnderline: true }}
                      control={control} 
                      defaultValue="" 
                    />
                   </TimeSection>
                
                  <TimeSection> 
                  <TimeLabel>wks</TimeLabel>
                   
                  <Controller as={TimeForm} name="wks" 
                    InputProps={{ disableUnderline: true }}
                    control={control} 
                    defaultValue="" 
                  />
                   </TimeSection>
                
                  <TimeSection> 
                    <TimeLabel>days</TimeLabel>
                    
                    <Controller as={TimeForm} name="days" 
                      InputProps={{ disableUnderline: true }}
                      control={control} 
                      defaultValue="" 
                    />
                   </TimeSection>
                </TimeWrapper>
                
                <TimeWrapper>
                  <TimeSection> 
                  <TimeLabel>hrs</TimeLabel>
                   
                  <Controller as={TimeForm} name="hrs" 
                    InputProps={{ disableUnderline: true }}
                    control={control} 
                    defaultValue="" 
                  />
                   </TimeSection>
           
                  <TimeSection> 
                    <TimeLabel>mins</TimeLabel>
                    
                    <Controller as={TimeForm} name="mins" 
                      InputProps={{ disableUnderline: true }}
                      control={control} 
                      defaultValue="" 
                    />
                   </TimeSection>
              
                </TimeWrapper>

                    
            </FormSegmentWrapper>


{/*  Note  ------------------- */}

            <FormSegmentWrapper>
              <SegmentHeader>
                Spotlight note
              </SegmentHeader>

              <FormInput>
                <input/>  
              </FormInput>            
            </FormSegmentWrapper>

{/*  Popup  ------------------- */}

            <FormSegmentWrapper>
              <SegmentHeader>
                Make default popup
              </SegmentHeader>

              <FormInput>
                <input type = 'checkbox' />  
              </FormInput>            
            </FormSegmentWrapper>


            <button>Submit</button>

          </form>
        </FormWrapper>

      </FormContainer>

    </Wrapper>
  )
}

export default SpotLightForm
