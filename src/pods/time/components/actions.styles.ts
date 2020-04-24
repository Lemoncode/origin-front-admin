import { css } from 'emotion';
import { theme } from 'core/theme';

export const container = css`
  display: flex;
  justify-content: flex-end;
  margin-top: ${theme.spacing(0.2)}rem;
  & > * {
    min-width: ${theme.spacing(1)}rem;
    margin-left: ${theme.spacing(0.2)}rem;
  }
`;
