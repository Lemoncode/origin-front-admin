import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { matchField } from '@lemoncode/fonk-match-field-validator';

export const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    email: [
      {
        validator: Validators.email,
      },
      {
        validator: Validators.required,
      },
    ],
    temporalPassword: [
      {
        validator: matchField.validator,
        customArgs: { field: 'password' },
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
