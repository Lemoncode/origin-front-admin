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
          <TextFieldComponent
            label="Id"
            name="id"
            className={classes.id}
            disabled
          />
          <TextFieldComponent
            label="Clave Temporal"
            name="temporalKey"
            className={classes.temporalKey}
            disabled
          />
          <TextFieldComponent
            label="Nombre"
            name="name"
            className={classes.name}
            disabled
          />
          <TextFieldComponent
            label="Email"
            name="email"
            className={classes.email}
            disabled
          />
          <CheckboxComponent
            name="active"
            label="Activo"
            color="primary"
            className={classes.isActive}
            disabled
          />
          <CommandFooterComponent
            onCancel={console.log}
            className={classes.commands}
          />
        </Form>
      )}
    </Formik>
  );
};
