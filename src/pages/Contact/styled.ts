import styled, { css } from 'styled-components';

export const ContactContainer = styled.div`
  margin-top: ${({ theme }) => theme.paddings.gap70}px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.xl}px;
`;
export const InfoContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.paddings.xl}px;
    display: flex;
    flex-direction: column;
    gap: ${theme.paddings.md}px;
  `}
`;
export const WrapperText = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.paddings.md}px;
    align-items: center;
    img {
      width: ${theme.fontSizes.lg}px;
      cursor: pointer;
    }
  `}
`;
