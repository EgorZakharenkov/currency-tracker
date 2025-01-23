import styled from 'styled-components';

export const CardWrapper = styled.div`
  min-width: ${({ theme }) => theme.widths.card}px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.paddings.gap30}px;
  padding: ${({ theme }) => theme.paddings.gap30}px;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    min-width: 100%;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.sm}px;
`;
