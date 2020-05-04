import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, CheckboxComponent } from 'common/components';
import { CommandFooterComponent } from '../../../common-app/command-footer';
import * as classes from './data.styles';

export const DataComponent: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{}}
      enableReinitialize={true}
      onSubmit={console.log}
      validate={Promise.resolve}
    >
      {({ values }) => (
        <Form className={classes.form}>
          <TextFieldComponent label="Id" name="id" />
          <TextFieldComponent label="Clave Temporal" name="temporalKey" />
          <TextFieldComponent label="Nombre" name="name" />
          <TextFieldComponent label="Email" name="email" />
          <CheckboxComponent name="active" label="Activo" color="primary" />
          <CommandFooterComponent onCancel={console.log} />
        </Form>
      )}
    </Formik>
  );
};
