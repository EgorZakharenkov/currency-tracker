import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  background: ${({ theme }) => theme.colors.backgroundCard};
  padding: ${({ theme }) => theme.paddings.xl}px;
`;
