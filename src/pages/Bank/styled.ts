import styled, { css } from 'styled-components';

export const BankContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.paddings.gap70}px;
    display: flex;
    flex-direction: column;
    gap: ${theme.paddings.xl}px;
    align-items: center;
  `}
`;

export const SearchContainer = styled.div`
  position: relative;
`;
