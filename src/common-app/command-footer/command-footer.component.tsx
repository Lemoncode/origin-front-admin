import * as React from 'react';
import { cx } from 'emotion';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { namespaces } from 'core/i18n';
import { keys } from './translations';
import * as classes from './command-footer.style';

interface LabelProps {
  cancelButton?: string;
  saveButton?: string;
}

interface Props {
  onCancel: () => void;
  onSave?: () => void;
  labels?: LabelProps;
  className?: string;
}

export const CommandFooterComponent: React.FunctionComponent<Props> = props => {
  const { onCancel, onSave, className } = props;
  const { t } = useTranslation(namespaces.commonApp.commandFooter);
  const labels: LabelProps = {
    cancelButton: t(keys.buttons.cancel),
    saveButton: t(keys.buttons.save),
    ...props.labels,
  };

  return (
    <div className={cx(classes.footerButtonsContainer, className)}>
      <Button variant="contained" color="primary" onClick={onCancel}>
        {labels.cancelButton}
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          if (onSave) onSave();
        }}
      >
        {labels.saveButton}
      </Button>
    </div>
  );
};
