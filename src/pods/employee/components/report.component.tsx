import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import { SelectComponent } from 'common/components';

export const ReportComponent: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{}}
      enableReinitialize={true}
      onSubmit={console.log}
      validate={Promise.resolve}
    >
      {({ values }) => (
        <Form>
          <SelectComponent name="month" label="Mes" items={[]} />
          <SelectComponent name="year" label="Año" items={[]} />
          <Button variant="contained" color="primary">
            Generar
          </Button>
        </Form>
      )}
    </Formik>
  );
};
