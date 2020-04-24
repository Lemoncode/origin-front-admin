import React from 'react';
import Button from '@material-ui/core/Button';
import { literals } from 'core/i18n';
import * as classes from './actions.styles';

export const ActionsComponent: React.FC = () => (
  <div className={classes.container}>
    <Button variant="contained" color="secondary" size="small">
      {literals.components.actions.cancel}
    </Button>
    <Button variant="contained" color="primary" size="small">
      {literals.components.actions.save}
    </Button>
  </div>
);
