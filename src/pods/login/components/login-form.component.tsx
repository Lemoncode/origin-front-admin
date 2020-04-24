import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import { literals } from 'core/i18n';
import { FormComponent, TextFieldComponent } from 'common/components';
import { Login, createEmptyLogin } from '../login.vm';
import { formValidation } from '../login.validation';
import * as classes from './login-form.styles';

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginFormComponent: React.FC<Props> = ({ onLogin }) => (
  <Form
    onSubmit={onLogin}
    initialValues={createEmptyLogin()}
    validate={formValidation.validateForm}
    render={({ handleSubmit }) => (
      <FormComponent className={classes.root} onSubmit={handleSubmit}>
        <Field
          name="user"
          label={`${literals.components.fields.user} *`}
          variant="outlined"
          component={TextFieldComponent}
        />
        <Field
          name="password"
          label={`${literals.components.fields.password} *`}
          variant="outlined"
          type="password"
          component={TextFieldComponent}
        />
        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth={true}
        >
          {literals.components.actions.login}
        </Button>
      </FormComponent>
    )}
  />
);
