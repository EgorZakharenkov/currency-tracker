import styled from 'styled-components';

export const StyledHeader = styled.header`
  max-width: ${({ theme }) => theme.widths.container}px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.widths.container}px) {
    max-width: 100%;
    padding: ${({ theme }) => theme.paddings.gap30}px;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.xl}px 0;

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.paddings.md}px;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.paddings.gap70}px;

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.paddings.md}px;
    width: 100%;
  }
`;
