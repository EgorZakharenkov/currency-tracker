import styled, { css } from 'styled-components';

export const WrapperCardList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.paddings.gap50}px;
    padding: ${theme.paddings.xl}px 0;
  `}
`;

export const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.paddings.gap50}px;
`;
