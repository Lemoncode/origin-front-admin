import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { matchField } from '@lemoncode/fonk-match-field-validator';

export const validationSchema: ValidationSchema = {
  field: {
    name: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Introduce un email válido',
      },
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
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
