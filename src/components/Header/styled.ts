import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    max-width: ${theme.widths.container}px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${theme.widths.container}px) {
      max-width: 100%;
      padding: ${theme.paddings.gap30}px;
    }
  `}
`;

export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.paddings.xl}px 0;

    @media (max-width: ${theme.media.tablet}px) {
      flex-direction: column;
      align-items: flex-start;
      gap: ${theme.paddings.md}px;
    }
  `}
`;

export const WrapperLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.paddings.gap70}px;

    @media (max-width: ${theme.media.tablet}px) {
      flex-direction: column;
      gap: ${theme.paddings.md}px;
      width: 100%;
    }
  `}
`;
