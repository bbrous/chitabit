// junk 1 

import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import { useForm, Controller } from "react-hook-form";


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function RHFMui() {

  const { handleSubmit, control, errors } = useForm();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
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
      name="yearOfRegistration"
      placeholder="Year of registration"
    />
  </MuiPickersUtilsProvider>
  );
}

export default RHFMui
