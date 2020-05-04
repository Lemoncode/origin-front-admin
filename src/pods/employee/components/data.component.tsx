import React from 'react';
import { Formik, Form } from 'formik';
import { cx } from 'emotion';
import Button from '@material-ui/core/Button';
import { TextFieldComponent, CheckboxComponent } from 'common/components';
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
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary">
              Cancelar
            </Button>
            <Button variant="contained" color="primary" onClick={console.log}>
              Grabar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
