import styled, { css } from 'styled-components';

export const StyledOption = styled('div')`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.xs}px;
    padding: ${theme.paddings.xs}px ${theme.paddings.sm}px;
    transition: 0.3s;

    &:hover {
      background: ${theme.colors.lightBlack};
    }
  `}
`;
