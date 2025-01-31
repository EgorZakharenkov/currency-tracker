import styled from 'styled-components';

export const MapWrap = styled.div`
  margin-top: ${({ theme }) => theme.paddings.xl}px;
  position: relative;
  width: calc(1280px - 77px);
  height: calc(70vh - 77px);
`;

export const MapContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
