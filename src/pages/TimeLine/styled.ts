import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.widths.container}px;
  background: ${({ theme }) => theme.colors.backgroundCard};
  padding: ${({ theme }) => theme.paddings.xl}px;
  @media (max-width: ${({ theme }) => theme.widths.container}px) {
    max-width: 100%;
    padding: ${({ theme }) => theme.paddings.gap30}px;
  }
`;
