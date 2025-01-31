import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    min-width: ${theme.widths.card}px;
    display: flex;
    align-items: center;
    gap: ${theme.paddings.gap30}px;
    padding: ${theme.paddings.gap30}px;
    background: ${theme.colors.backgroundCard};
    border-radius: ${theme.borderRadius.sm}px;
    border: 1px solid ${theme.colors.gray};
    cursor: pointer;
    @media (max-width: ${theme.media.mobile}px) {
      min-width: 100%;
    }
  `}
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.sm}px;
`;
