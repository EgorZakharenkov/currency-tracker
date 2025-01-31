import styled, { css } from 'styled-components';

export const WrapperApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    max-width: ${theme.widths.container}px;
    margin: 0 auto;

    @media (max-width: ${theme.widths.container}px) {
      max-width: 100%;
      padding: ${theme.paddings.gap30}px;
    }
  `}
`;
