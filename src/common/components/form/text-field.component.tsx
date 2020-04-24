import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';

type Props = Partial<FieldRenderProps<any, any>>;

export const TextFieldComponent: React.FunctionComponent<Props &
  TextFieldProps> = props => {
  const { input, meta, ...rest } = props;
  const textFieldProps = Boolean(input) ? input : rest;
  let inputProps = rest.inputProps;
  if (input) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, onChange, value, ...restInputProps } = input;
    inputProps = restInputProps;
  }

  const hasError = Boolean(meta && meta.touched && meta.error);

  return (
    <MuiTextField
      {...rest}
      name={textFieldProps.name}
      onChange={textFieldProps.onChange}
      value={textFieldProps.value}
      error={hasError}
      helperText={hasError ? meta.error : ''}
      inputProps={inputProps}
      fullWidth={true}
    />
  );
};
