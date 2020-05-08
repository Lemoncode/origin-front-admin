import React from 'react';
import { Formik, Form } from 'formik';
import { SelectComponent } from 'common/components';
import { monthList } from 'common/constants';
import { CommandFooterComponent } from 'common-app/command-footer';

interface Props {
  onCancel: () => void;
}

export const ReportComponent: React.FunctionComponent<Props> = ({
  onCancel,
}) => {
  return (
    <Formik initialValues={{}} enableReinitialize={true} onSubmit={console.log}>
      {() => (
        <Form>
          <SelectComponent
            name="month"
            label="Mes"
            items={monthList}
            disabled
          />
          <SelectComponent
            name="year"
            label="Año"
            items={[
              {
                id: '2020',
                name: '2020',
              },
            ]}
            disabled
          />
          <CommandFooterComponent
            onCancel={onCancel}
            labels={{ saveButton: 'Generar', cancelButton: 'Cancelar' }}
          />
        </Form>
      )}
    </Formik>
  );
};
