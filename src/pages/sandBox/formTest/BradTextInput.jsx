import React from 'react';
import { useField, Field } from 'formik';

import {TextField} from 'formik-material-ui';


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

export default function MyTextInput({...props}) {
    // const [field, meta] = useField(props);
    return (
      <Field
      name="firstName"
      placeholder = {props.placeholder}
      component={StyledField}
      variant="outlined"
      
    /> 
    )
}