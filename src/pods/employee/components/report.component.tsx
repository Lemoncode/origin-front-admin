import React from 'react';
import { Formik, Form } from 'formik';
import { SelectComponent } from 'common/components';
import { monthList } from 'common/constants';
import * as classes from './report.styles';
import { CommandFooterComponent } from 'common-app/command-footer';
import { cx } from 'emotion';

interface Props {
  className?: string;
  onCancel: () => void;
  onGenerateExcel: () => void;
}

export const ReportComponent: React.FunctionComponent<Props> = ({
  className,
  onCancel,
  onGenerateExcel,
}) => {
  return (
    <Formik
      initialValues={{}}
      enableReinitialize={true}
      onSubmit={onGenerateExcel}
    >
      {({ values }) => (
        <Form className={cx(classes.form, className)}>
          <SelectComponent
            name="month"
            label="Mes"
            items={monthList}
            className={classes.month}
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
            className={classes.year}
            disabled
          />
          <CommandFooterComponent
            onCancel={onCancel}
            className={classes.commands}
            labels={{ saveButton: 'Generar', cancelButton: 'Cancelar' }}
          />
        </Form>
      )}
    </Formik>
  );
};
