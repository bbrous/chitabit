// Junk = React react-datepicker sample


import React from 'react';
import { useField, useFormikContext } from 'formik';
// import { FormField, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




import { styled, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme(); // allows use of mui theme in styled component


const StyledDatePicker= styled('div')({
 
  width: '90%',
  border: 'none',
  height :30,
  backgroundColor: 'green',
 '& input' : 
 {
 color: 'blue', 
 margin: '0',
 padding: '4px',
 border: '1px solid orange',
 width: '25rem',
 height: '35px'
}

})



export default function BradDatePicker({label, ...props}) {
    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(props);
    return (
        <StyledDatePicker error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <DatePicker 
                {...field}
                {...props}
                // selected={(field.value && new Date(field.value)) || null}
                selected = {new Date()}
                onChange={value => setFieldValue(field.name, value)}
            />
            {meta.touched && meta.error ? (
                <div basic color='red'>{meta.error}</div>
            ) : null}
        </StyledDatePicker>
    )
}