import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, CheckboxComponent } from 'common/components';
import { CommandFooterComponent } from '../../../common-app/command-footer';
import * as classes from './data.styles';
import { cx } from 'emotion';
import { Employee } from '../employee.vm';

interface Props {
  employee: Employee;
  className?: string;
  onSave: (employee: Employee) => void;
  isEditMode: boolean;
  onCancel: () => void;
}

export const DataComponent: React.FunctionComponent<Props> = ({
  employee,
  className,
  onSave,
  isEditMode,
  onCancel,
}) => {
  console.log(employee);
  return (
    <Formik
      initialValues={employee}
      enableReinitialize={true}
      onSubmit={onSave}
    >
      {() => (
        <Form className={cx(classes.form({ isEditMode }), className)}>
          <TextFieldComponent
            label="Id"
            name="id"
            className={classes.id}
            InputProps={{
              readOnly: true,
            }}
            value={employee.id}
          />
          {!isEditMode && (
            <TextFieldComponent
              label="Clave Temporal"
              name="temporalKey"
              className={classes.temporalKey}
              disabled
              value={employee.temporalKey}
            />
          )}
          <TextFieldComponent
            label="Nombre"
            name="name"
            className={classes.name}
            disabled
            value={employee.name}
          />
          <TextFieldComponent
            label="Email"
            name="email"
            className={classes.email}
            disabled
            value={employee.email}
          />
          <CheckboxComponent
            name="isActive"
            label="Activo"
            color="primary"
            className={classes.isActive}
            disabled
            value={employee.isActive}
          />
          <CommandFooterComponent
            onCancel={onCancel}
            className={classes.commands}
          />
        </Form>
      )}
    </Formik>
  );
};
