import React, {useEffect, useState} from 'react'

import { useForm, Controller } from "react-hook-form";


// Material UI -----------------------------
import { styled } from "@material-ui/core/styles"
import { TextField, Checkbox } from "@material-ui/core";
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

const TimeFormLong= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  width: '8rem',

  '& input' : 
  {color: 'purple',
  height: '1rem',
  fontSize: '.85rem',
  padding: '.4rem',
  border: 'none'
  
  }
  
})
const ColorLabel = styled('div')({
  color: 'blue',
  margin: '.5rem 0',
  fontSize: '1.1rem',
  textDecoration: 'underline',
})


const OutputWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '1rem',

  '& label' : {
    color: 'blue',
    marginRight: '4px',
    fontWeight: 'bold'
  }
})



// =============================================

function DatetoUTC(aDate){


  let inputDate = new Date(aDate)
  let outputUTC = inputDate.getTime();

  return outputUTC

}

// =====================================

const RHFMuiDatePicker = () => {

  const [stateDateValue, setStateDateValue] = useState('')

  const today = new Date()
  const {handleSubmit, errors, control} = useForm({
    defaultValues: {
                 
      endDate:  today,
      // datePickerNull:  null,
      
    }
         })


  const onSubmit = data => {
    alert(JSON.stringify(data))
    console.log( '[DateFormatEx] ... data',  data)
    setStateDateValue({dateValue: data.endDate})

  }

  // datepicker functions 
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
          

  return (
    <Wrapper>
     
    <form onSubmit = {handleSubmit(onSubmit)}>

{/* ---- Date Picker  with NULL default ---------------*/}

        <SegmentHeader>
          Target Time
        </SegmentHeader>
 
        <FormSegmentWrapper>

          <TimeWrapper>
            <TimeSection> 
              <TimeLabel>mos</TimeLabel>
              
              <Controller as={TimeForm} name="startMos" 
                InputProps={{ disableUnderline: true }}
                control={control} 
                  
              />
              </TimeSection>
          
            <TimeSection> 
            <TimeLabel>wks</TimeLabel>
              
            <Controller as={TimeForm} name="startWks" 
              InputProps={{ disableUnderline: true }}
              control={control} 
                
            />
              </TimeSection>
          
            <TimeSection> 
              <TimeLabel>days</TimeLabel>
              
              <Controller as={TimeForm} name="startDays" 
                InputProps={{ disableUnderline: true }}
                control={control} 
                
              />
              </TimeSection>
          </TimeWrapper>
          
          <TimeWrapper>
            <TimeSection> 
            <TimeLabel>hrs</TimeLabel>
              
            <Controller as={TimeForm} name="startHrs" 
              InputProps={{ disableUnderline: true }}
              control={control} 
                
            />
              </TimeSection>
      
            <TimeSection> 
              <TimeLabel>mins</TimeLabel>
              
              <Controller as={TimeForm} name="startMins" 
                InputProps={{ disableUnderline: true }}
                control={control} 
                  
              />
              </TimeSection>
        
          </TimeWrapper>

        </FormSegmentWrapper>

 
-----------------------------------------------------------


{/* ====  Calendars Begin =============================*/} 

        <SegmentHeader>
          Target date to complete
        </SegmentHeader>

{/* ---- Start Day ---------------*/}

        <FormSegmentWrapper>
          <ColorLabel>Start Day </ColorLabel>
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
                    name="startDate"
                    placeholder="Choose Date"
                  />
                </MuiPickersUtilsProvider>

                </TargetDateWrapper>

                         
         
          
    </FormSegmentWrapper>

 {/* ---- End Day ---------------*/}

 <FormSegmentWrapper>
          <ColorLabel>End Day </ColorLabel>
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
                    name="endDate"
                    placeholder="Choose Date"
                  />
                </MuiPickersUtilsProvider>

                </TargetDateWrapper>

          
    </FormSegmentWrapper>

{/* ----- Time Setters ------------ */}

    <FormSegmentWrapper>

          <TimeWrapper>
            <ColorLabel>Start Time</ColorLabel>
            <TimeSection>

              <Controller as={TimeFormLong} name="startTime"
                InputProps={{ disableUnderline: true }}
                control={control}

              />
            </TimeSection>

            <ColorLabel>End Time</ColorLabel>
            <TimeSection>

              <Controller as={TimeFormLong} name="endTime"
                InputProps={{ disableUnderline: true }}
                control={control}

              />
            </TimeSection>
 
          </TimeWrapper> 

      </FormSegmentWrapper>

      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>
====================================================
{/* --------OUTPUTS --------------------- */}
    <SegmentHeader>
      Outputs
    </SegmentHeader>

    {/* --- Plain Date -------*/}
    <OutputWrapper> 
      <label>UTC is  :   </label>
       {DatetoUTC(stateDateValue.dateValue)}  
    </OutputWrapper>

    {/* --- Next whatever-------*/}
    <OutputWrapper> 
      <label>Next Whatver  :   </label>
      {/* {DatetoUTC(stateDateValue.dateValue)}  */}
    </OutputWrapper>

    </Wrapper>
  )
}


  export default RHFMuiDatePicker
