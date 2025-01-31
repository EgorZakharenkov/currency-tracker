import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.paddings.gap40}px;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.paddings.lg}px;
    border-radius: ${theme.borderRadius.md}px;
    background-color: ${theme.colors.backgroundCard};
  `}
`;

export const FormTitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.paddings.gap30}px;
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.primary};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-block;
    width: 80px;
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.paddings.sm}px;
  `}
`;

export const Field = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.paddings.sm}px;
`;
export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.paddings.gap40}px;
    margin-top: ${theme.paddings.gap30}px;
  `}
`;
