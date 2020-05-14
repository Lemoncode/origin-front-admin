import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
    externalId: [
      {
        validator: Validators.required,
        message: 'Campo obligatorio',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
