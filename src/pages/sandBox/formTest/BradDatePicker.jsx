import React from 'react';
import { useField, Field } from 'formik';

import {TextField} from 'formik-material-ui';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from 'material-ui-pickers';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import { styled, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme(); // allows use of mui theme in styled component

const StyledField= styled(TextField)({
 
  width: '90%',
  border: 'none',
  textAlign: 'center',height :30,
 '& input' : 
 {
 color: 'blue', 
 margin: '0',
 padding: '4px',
 border: '1px solid orange',
}

})

// ============================
const today = new Date();

export default function BradDatePicker({...props}) {

    const [field, meta] = useField(props);

      return (
        <Field
        name="bradDate"
        placeholder = {props.placeholder}
        component={StyledField}
        type = 'date'
        variant="outlined"
        
       
      />
    )
}