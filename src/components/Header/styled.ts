import styled from 'styled-components';

export const StyledHeader = styled.header`
  max-width: ${({ theme }) => theme.widths.container}px;
  width: 100%;
  margin: 0 auto;
`;

export const WrapperHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.xl}px 0;
`;

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.paddings.gap70}px;
`;
