import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function MySwitch({ value = false, onChange }) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={value}
          onChange={() => onChange(!value)}
          value="checkedA"
        />
      }
      label="Safe JSON"
    />
  );
}