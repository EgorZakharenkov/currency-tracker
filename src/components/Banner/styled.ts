import styled, { css } from 'styled-components';

export const WrapperBanner = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradientBg};
    padding: ${theme.paddings.gap40}px ${theme.paddings.gap100}px;
    @media (max-width: ${theme.media.tablet}px) {
      padding: ${theme.paddings.gap30}px;
    }
  `}
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.widths.container}px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    gap: ${theme.paddings.gap40}px;

    @media (max-width: ${theme.widths.container}px) {
      max-width: 100%;
      padding: ${theme.paddings.gap30}px;
    }
    @media (max-width: ${theme.media.tablet}px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  `}
`;

export const WrapperInfo = styled.div`
    ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: ${theme.paddings.xl}px;
      @media (max-width: ${theme.media.tablet}px) {
        align-items: center;
      }
    `}}
  
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.title}px;
    background: ${theme.colors.gradient};
    font-weight: ${theme.weights.lg};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: end;
    @media (max-width: ${theme.media.tablet}px) {
      text-align: center;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm}px;
    font-weight: ${theme.weights.xs};
    color: ${theme.colors.lightGray};
    text-align: center;
  `}
`;
