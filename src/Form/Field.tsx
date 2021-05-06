import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React from "react";


interface Props extends FieldProps {
  placeholder: string;
}

export const MyField: React.FC<Props> = ({ placeholder, field }) => {
  return <TextField  placeholder={placeholder} {...field} />;
};
