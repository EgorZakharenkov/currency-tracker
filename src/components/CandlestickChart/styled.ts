import styled from 'styled-components';

export const ChartCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartBox = styled.div`
  padding: ${({ theme }) => theme.paddings.lg}px;
`;
