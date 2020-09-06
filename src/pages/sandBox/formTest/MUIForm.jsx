import * as React from 'react';
 
import Button from '@material-ui/core/Button';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {LinearProgress, MenuItem} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
/*
Original CODE  https://codesandbox.io/s/j3l07vp2nw?from-embed=&file=/src/index.tsx:318-327

*/

import BradTextInput from './BradTextInput'
import BradDatePicker from './BradDatePicker'

import * as Yup from 'yup'

import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
} from 'formik-material-ui';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from 'material-ui-pickers';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import {Effect} from 'formik-effect';


import { veryLightGrey } from '../../../styles/colors'
// import{showSpotLight, closeSpotLight} from '../../app/redux/actions/mainActions'
// import InitialStore from '../../app/redux/store/InitialStore'


import {NavLink, withRouter, useLocation} from 'react-router-dom'
import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
// ----------------------------------------

const theme = createMuiTheme(); // allows use of mui theme in styled component

const StyledField= styled(TextField)({
 
  width: '90%',
 
 '& input' : 
 {color: 'red',
 backgroundColor: 'yellow'
}

})


// ------------------



const ranges = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

 
const today = new Date();

// ##################

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required')
     .min(2, 'Too Short!')
     .max(20, 'Too Long!'),

  lastName: Yup.string().required('Last name is also required').min(4, 'Too Short!'),

  email: Yup.string()
     .email('Invalid email')
     .required('Required'),

     password: Yup.string().required('Password is required')
     .min(4, 'password Too Short!'),

   passwordMatches: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),

    //  joinedAt:Yup.string()
    //  .required('Required').nullable
 

}) 

const MUIForm = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      select: '',
      multiSelect: [],
      joinedAt: null,
    }}

    validationSchema = {validationSchema}
    // validate={values => {
    //   const errors = {};
    //   if (!values.firstName) {
    //     errors.firstName = 'Required';
    //   }

    //   if (!values.lastName) {
    //     errors.lastName = 'Required';
    //   }

    //   if (!values.select || values.select !== '21-50') {
    //     errors.select = 'Please select 21-50';
    //   }

    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = 'Invalid email address';
    //   }

    //   if (!values.password) {
    //     errors.password = 'Required';
    //   }

    //   if (values.password && values.passwordMatches !== values.password) {
    //     errors.passwordMatches = 'Passwords must match';
    //   }

    //   if (!values.joinedAt) {
    //     errors.joinedAt = 'Date is required';
    //   }

    //   // if (values.multiSelect.length !== 2) {
    //   //   errors.multiSelect = 'Please choose 2 options';
    //   // }

    //   return errors;
    // }}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
    render={({
      submitForm,
      isValid,
      isSubmitting,
      values,
      setFieldValue,
      errors,
    }) => (
      <Form>
        
        {/* <Field
          name="firstName"
          label="First name *"
          component={StyledField}
          fullWidth
        /> */}

<BradTextInput name='firstName' placeholder='Event title' />

        <Field
          name="lastName"
          label="Last name *"
          component={StyledField}
          fullWidth
          
        />
        <Field name="email" label="Email *" component={StyledField} fullWidth />
        <Field
          name="password"
          label="Password *"
          component={StyledField}
          fullWidth
          type="password"
        />
        <Field
          name="passwordMatches"
          label="Re-type password *"
          component={StyledField}
          fullWidth
          type="password"
        />
        <Field
          type="text"
          name="select"
          label="Age"
          select
          helperText="Please choose 21-50"
          margin="normal"
          component={StyledField}
          fullWidth
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>



  <BradDatePicker
  name='date'
  placeholderText='Event date'
  timeFormat='HH:mm'
  showTimeSelect
  timeCaption='time'
  // dateFormat='MMMM d, yyyy h:mm a'
  autoComplete='off'
  />  

        {/* <FormControl fullWidth error={!!errors.joinedAt}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              name="joinedAt"
              value={values['joinedAt']}
              onChange={e => setFieldValue('joinedAt', e)}
              fullWidth
              minDate={today}
              clearable
              error={!!errors.joinedAt}
            />
          </MuiPickersUtilsProvider>
          <FormHelperText component="div">
            {!!errors.joinedAt && <div>{errors.joinedAt}</div>}
          </FormHelperText>
        </FormControl> */}






        {/* <Field
          type="text"
          name="multiSelect"
          label="Multiple Select"
          select
          multiple
          helperText="Choose 2 options"
          component={Select}
          fullWidth
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field> */}
        <br />
        <Button
          variant="raised"
          color="primary"
          disabled={!isValid}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Form>
    )}
  />
);

export default MUIForm
