import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.paddings.sm}px;
    font-size: ${theme.fontSizes.min}px;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.borderRadius.xs}px;
  `}
`;
