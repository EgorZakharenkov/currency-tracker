import styled, { css } from 'styled-components';

export const ConverterContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.paddings.lg}px;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.paddings.lg}px;
    border-radius: ${theme.borderRadius.md}px;
  `}
`;

export const CurrentCurrencyBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${theme.fontSizes.xs}px;
    color: ${theme.colors.white};

    @media screen and (max-width: ${theme.media.mobile}px) {
      flex-direction: column;
      align-items: start;
      gap: ${theme.paddings.md}px;
    }
  `}
`;

export const ResultBlock = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.paddings.sm}px;
    font-size: ${theme.fontSizes.xs}px;
    font-weight: ${theme.weights.lg};
    color: ${theme.colors.white};
    text-align: center;

    @media screen and (max-width: ${theme.media.mobile}px) {
      text-align: start;
    }
  `}
`;
export const WrapperBtns = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.paddings.gap100}px;
`;
export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.paddings.sm}px ${theme.paddings.lg}px;
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.md}px;
  `}
`;
