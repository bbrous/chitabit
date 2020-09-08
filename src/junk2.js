import React, { ReactElement } from "react";
import { TextField } from "@material-ui/core";
import { useFormContext, ErrorMessage, Controller } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  requiredError?: string;
  rules?: any;
  validations: Array<{ key: string; message: string }>;
  [key: string]: any;
}

const getErrorMessage = (errors: any, validations: any): string => {
  console.log(errors);
  return JSON.stringify(errors);
};

export default function SLTextField({
  name,
  label,
  requiredError,
  rules,
  validations,
  ...otherProps
}: Props): ReactElement {
  const { errors, register, setValue } = useFormContext();
  return (
    <>
      <Controller
        as={
          <TextField
            {...otherProps}
            label={label}
            helperText={getErrorMessage(errors[name], validations)}
            error={!!errors[name]}
          />
        }
        rules={rules}
        name={name}
        register={register}
        setValue={setValue}
      />
      <ErrorMessage errors={errors} name={name} />
    </>
  );
}
