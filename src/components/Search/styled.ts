import styled, { css } from 'styled-components';

export const StyledSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.paddings.lg}px;
    margin-top: ${theme.paddings.lg}px;
    background: ${theme.colors.search};
    border-radius: ${theme.borderRadius.sm}px;

    input {
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.xs}px;
      background: transparent;
    }
  `}
`;
