import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.paddings.gap70}px;
    width: ${theme.widths.container}px;
    background: ${theme.colors.backgroundCard};
    padding: ${theme.paddings.xl}px;
    @media (max-width: ${theme.widths.container}px) {
      max-width: 100%;
      padding: ${theme.paddings.gap30}px;
    }
  `}
`;
