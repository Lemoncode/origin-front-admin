import { css } from 'emotion';
import { theme } from 'core/theme';

interface Props {
  isEditMode: boolean;
}

const getDynamicAreaNames = (props: Props) => {
  return props.isEditMode
    ? `'id employeeName'`
    : `'id temporalKey' 'employeeName .'`;
};

export const form = (props: Props) => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'id'
    ${props.isEditMode ? '' : `'temporalKey'`}
    'employeeName'
    'email'
    'isActive'
    'commands'
    'commands';
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      ${getDynamicAreaNames(props)}
      'email .'
      'isActive .'
      'commands commands';
  }
`;

export const id = css`
  grid-area: id;
`;

export const temporalKey = css`
  grid-area: temporalKey;
`;

export const name = css`
  grid-area: employeeName;
`;

export const email = css`
  grid-area: email;
`;

export const isActive = css`
  grid-area: isActive;
`;

export const commands = css`
  grid-area: commands;
`;
