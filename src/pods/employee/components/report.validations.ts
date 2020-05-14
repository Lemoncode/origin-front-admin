import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    month: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
