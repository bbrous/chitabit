import React, { useRef } from 'react'

import { useForm, Controller } from "react-hook-form";



 


// Material UI -----------------------------
import { styled } from "@material-ui/core/styles"

// import Radio from '@material-ui/core/Radio';
 
import { withStyles } from '@material-ui/core/styles';

import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Slider
} from "@material-ui/core";

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





const FormInput= styled('div')({
 
 
})

// ########################################################################
// #### FOR STYLED CHECK BOX  #################

// const useStyles = makeStyles({
//   root: {
   
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//   },
//   icon: {
//     borderRadius: 8,
//     width: 30,
//     height: 30,
//     boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//     backgroundColor: '#f5f8fa',
//     backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//     '$root.Mui-focusVisible &': {
//       outline: '2px auto rgba(19,124,189,.6)',
//       outlineOffset: 2,
//     },
//     'input:hover ~ &': {
//       backgroundColor: '#ebf1f5',
//     },
    
//     'input:disabled ~ &': {
//       boxShadow: 'none',
//       background: 'rgba(206,217,224,.5)',
//     },
//   },
//   checkedIcon: {
    
//     backgroundColor: '#137cbd',
//     backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//     '&:before': {
//       display: 'block',
//       borderRadius: 8,
//       width: 30,
//       height: 30,
//       backgroundImage:
//         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//         " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//         "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//         backgroundColor: 'orange',
//       content: '""',
//     },
//     'input:hover ~ &': {
//       backgroundColor: '#106ba3',
//     },
//   },
// });

const OrangeRadio = withStyles({
  root: {
    color: 'orange',
    '&$checked': {
      color: 'orange',
    },
    
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

// ########################################################################
// ########################################################################


// =====================================

const RHFMuiRadio = () => {
 
  const {register, handleSubmit, watch, errors, control} = useForm({
    defaultValues: {
      popup: false
      
    }
})

const [selectedValue, setSelectedValue] = React.useState('a');

const handleChange = (event) => {
  setSelectedValue(event.target.value);
};
  const onSubmit = data => alert(JSON.stringify(data))


 

  return (
    <Wrapper>
     
      <div>  RHF MUI Radio</div>


    <form onSubmit = {handleSubmit(onSubmit)}>

{/*  Material UI checkbox  ----------- */}

    <FormSegmentWrapper>

    <SegmentHeader>
      styled Radio
    </SegmentHeader>

 
      <FormInput> 

 

        <Controller
          as={
            <RadioGroup aria-label="gender">
              <FormControlLabel
                value="female"
                control={<OrangeRadio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<OrangeRadio />} label="Male" />
            </RadioGroup>
          }
          name="RadioGroup"
          control={control}
        />




        </FormInput>   

      
      </FormSegmentWrapper>


      <SubmitWrapper>
        <input type="submit"/>
      </SubmitWrapper>

    </form>

    </Wrapper>
  )
}


  export default RHFMuiRadio
