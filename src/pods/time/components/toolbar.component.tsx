import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';
import { literals } from 'core/i18n';
import * as classes from './toolbar.styles';

export const ToolbarComponent = () => {
  return (
    <Toolbar variant="dense">
      <Button className={classes.menuButton} variant="outlined">
        {literals.components.date.today}
      </Button>
      <IconButton className={classes.menuButton}>
        <LeftIcon />
      </IconButton>
      <IconButton className={classes.menuButton}>
        <RightIcon />
      </IconButton>
      <Typography>Febrero de 2020</Typography>
    </Toolbar>
  );
};
