import styled from 'styled-components';

export const WrapperCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.gap50}px;
  padding: ${({ theme }) => theme.paddings.xl}px 0;
`;
export const TitleList = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;
export const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.paddings.gap50}px;
`;
