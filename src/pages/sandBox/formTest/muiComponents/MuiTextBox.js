import React from "react";
import { useForm } from "react-hook-form";


export function Input({ register, name, ...rest }) {
  return <input name={name} ref={register} {...rest} />;
}


