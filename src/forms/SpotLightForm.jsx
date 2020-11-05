import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {connect} from 'react-redux'
import{addSpotLight, closeModal} from '../app/redux/actions/mainActions'
import{spotlightIdGenerator} from '../app/helpers/idKeyGenerators'
// Material UI =============================

import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'

import { TextField, Checkbox, Button } from "@material-ui/core";
import { chitBlueDull, chitOrangeLight, lightGrey } from '../styles/colors';
 
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// MUI date picker -------------------
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Icon from "@material-ui/core/Icon";


const theme = createMuiTheme(); // mui theme for styled component

// ========================================

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  // backgroundColor: 'pink',
  width: '100%',
  height: '100%',
 

  '& form' : {
  
    width: '100%',
 
  }

})

const IconContainer= styled(Icon)({
  color: 'orange'

})

const FormContainer= styled('div')({
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

const CheckBoxWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
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

const StyledMultiline= styled(TextField)({
  border: '1px solid orange',
  borderRadius: '5px',
  // width: '80%', 
  margin: '0 0 0 8px',
  padding: '0',
  width: '26rem',
 
  
  '& textarea' : {
     
     fontSize: '.85rem'
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

const PopupCheckBox= styled(Checkbox)({
 
  '& input':
{  
  


  // backgroundColor: 'blue'
}
})


const SubmitWrapper= styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
 


})

const SubmitButton= styled(Button)({

  backgroundColor: chitBlueDull,
  color: 'white',
  border: 'none',
  padding: '0',
  width: '8rem',

  '&:hover':
    {  
      backgroundColor: chitOrangeLight,
      border: 'none'
    },
 


})

// ================= Checkbox  ===============
const useStyles = makeStyles({
  root: {
   
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 18,
    height: 18,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      borderRadius: 3,
      width: 18,
      height: 18,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        backgroundColor: 'orange',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}



// ===========================================
const SpotLightForm = (props) => {

  // console.log('[SPOTLIGHT FORM ] : props.display - ', props.display.private.data.spotlightData.spotlights)

  let allSpotlights = props.display.private.data.spotlightData.spotlights
  let newSpotlightId = spotlightIdGenerator(allSpotlights)

  const today = new Date() // for datepicker initial value

  const {register, handleSubmit, watch, errors, control, setValue} = useForm({
              defaultValues: {
                title: '',
                endEst:  null,
                mos: '',
                wks: '',
                days: '',
                hrs: '',
                mins: '',
                
                 
                popup: false
              }
         })
  // datepicker functions 
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
             

  const onSubmit = data => {
    props.addSpotLight(data, newSpotlightId) 
     props.closeModal()
  
  }
  // const onSubmit = data => alert(JSON.stringify(data))

  // return ==================== return ================= return ==============

  return (
    <Wrapper>
      {/* <div>       SpotLight Form - reducer main currently = true    </div> */}
      <FormContainer elevation = {2}>

        <FormHeader> New Spotlight</FormHeader>

        <FormWrapper>

          <form onSubmit = {handleSubmit(onSubmit) }>


{/*  title  ----------- */}

            <FormSegmentWrapper>

              <SegmentHeader>
                Goal or Objective
              </SegmentHeader>

              <Controller as={StyledTextField} 
                  name="title" 
                  InputProps={{ disableUnderline: true }}
                  control={control} 
                  defaultValue="" 
                  rules={{ 
                    required: true ,
                    maxLength: 40
                  
                  }}
                  />

                  {errors.title && errors.title.type === "required" && 
                    <ErrorWrapper>First name is required</ErrorWrapper>}
                  {errors.title && errors.title.type === "maxLength" && 
                    <ErrorWrapper>Maximum characters 40</ErrorWrapper>}
                    
            </FormSegmentWrapper>

{/*  Target Date ----------- */}

            <FormSegmentWrapper>
              <SegmentHeader>
                When you hope to get it done by: 
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
                            format="MM dd yyyy"
                            // label="Year of registration"
                            // helperText={error}
                            value={selectedDate}
                            keyboardIcon={<IconContainer>today_icon</IconContainer>}
                            onChange={handleDateChange}
                            orientation = 'landscape'


                          />
                        }
                        control={control}
                        name="endEst"
                        placeholder="MM DD YYYY"
                      />
                    </MuiPickersUtilsProvider>
    
                </TargetDateWrapper>

              </FormInput>            
            </FormSegmentWrapper>

{/*  Completion Time ----------- */}

            <FormSegmentWrapper>
              <SegmentHeader>
                How long you think it might take:
              </SegmentHeader>

                <TimeWrapper>
                   
                
                  <TimeSection> 
                  <TimeLabel>wks</TimeLabel>
                   
                  <Controller as={TimeForm} name="wks" 
                    InputProps={{ disableUnderline: true }}
                    control={control} 
                     
                  />
                   </TimeSection>
                
                  <TimeSection> 
                    <TimeLabel>days</TimeLabel>
                    
                    <Controller as={TimeForm} name="days" 
                      InputProps={{ disableUnderline: true }}
                      control={control} 
                     
                    />
                   </TimeSection>
            
                
                
                  <TimeSection> 
                  <TimeLabel>hrs</TimeLabel>
                   
                  <Controller as={TimeForm} name="hrs" 
                    InputProps={{ disableUnderline: true }}
                    control={control} 
                     
                  />
                   </TimeSection>
           
                  <TimeSection> 
                    <TimeLabel>mins</TimeLabel>
                    
                    <Controller as={TimeForm} name="mins" 
                      InputProps={{ disableUnderline: true }}
                      control={control} 
                       
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
                
              <Controller as={StyledMultiline} name="note" 
                  InputProps={{ outline: 'none' }}
                  
                  control={control} 
                  defaultValue="" 
                  multiline
                  variant="outlined"
                   
                  />


              </FormInput>            
            </FormSegmentWrapper>

{/*  Popup  ------------------- */}

            {/* <FormSegmentWrapper>

              <SegmentHeader>
                Make default Popup
              </SegmentHeader>
              <FormInput>
<CheckBoxWrapper>
                <Controller
              as={StyledCheckbox}
              name="popup"
              type="checkbox"
              control={control}
               
            />
                    <div>Show Spotlight as Popup</div>
                    </CheckBoxWrapper>
              </FormInput>            
            </FormSegmentWrapper> */}

            <SubmitWrapper>
            <SubmitButton type ="submit" >Submit</SubmitButton> 
            </SubmitWrapper>
          </form>
        </FormWrapper>

      </FormContainer>

    </Wrapper>
  )
}

 

const actions = {
  addSpotLight,
  closeModal 
}

const mapState = state => ({
  display: state
})

export default connect(mapState, actions)(SpotLightForm)

