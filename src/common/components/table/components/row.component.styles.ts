import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  &:nth-child(even) {
    background-color: ${theme.palette.table.row.main};
  }
`;
