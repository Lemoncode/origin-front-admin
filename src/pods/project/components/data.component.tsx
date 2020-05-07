import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, CheckboxComponent } from 'common/components';
import { CommandFooterComponent } from '../../../common-app/command-footer';

export const DataComponent: React.FunctionComponent = () => {
  return (
    <Formik initialValues={{}} enableReinitialize={true} onSubmit={console.log}>
      {() => (
        <Form>
          <TextFieldComponent
            label="Id"
            name="id"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextFieldComponent label="Nombre" name="name" />
          <TextFieldComponent label="Id Externo" name="externalId" />
          <TextFieldComponent label="Comentarios" name="comments" multiline />
          <CheckboxComponent label="Activo" name="isActive" color="primary" />
        </Form>
      )}
    </Formik>
  );
};
