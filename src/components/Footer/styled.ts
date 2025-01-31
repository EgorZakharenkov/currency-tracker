import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.paddings.gap50}px;
    max-width: ${theme.widths.container}px;
    margin: ${theme.paddings.gap50}px auto;

    @media (max-width: ${theme.widths.container}px) {
      max-width: 100%;
      padding: ${theme.paddings.gap30}px;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${theme.paddings.gap100}px;
    @media (max-width: ${theme.widths.container}px) {
      flex-direction: column;
    }
  `}
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.gap30}px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.paddings.lg}px;
`;

export const FooterTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md}px;
    font-weight: ${theme.weights.lg};
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  `}
`;

export const WrapperListMenu = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: ${theme.paddings.gap70}px;
    @media (max-width: ${theme.media.mobile}px) {
      flex-wrap: wrap;
      gap: ${theme.paddings.gap30}px;
    }
  `}
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.gap40}px;
`;

export const WrapperListLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.md}px;
`;

export const FooterCopyRight = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm}px;
    font-weight: ${theme.weights.lg};
    color: ${theme.colors.gray};
    text-align: center;
  `}
`;
