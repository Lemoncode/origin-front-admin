import { css } from 'emotion';
import { theme } from 'core/theme';

export const footer = css`
  border-bottom: 0;
`;

export const total = css`
  font-weight: bold;
`;

export const color = {
  success: css`
    color: ${theme.palette.success.main};
  `,
  error: css`
    color: ${theme.palette.error.dark};
  `,
  warning: css`
    color: ${theme.palette.warning.main};
  `,
};
