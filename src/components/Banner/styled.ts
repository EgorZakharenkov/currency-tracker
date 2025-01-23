import styled from 'styled-components';

export const WrapperBanner = styled.div`
  background: ${({ theme }) => theme.colors.gradientBg};
  padding: ${({ theme }) => theme.paddings.gap40}px ${({ theme }) => theme.paddings.gap100}px;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    padding: ${({ theme }) => theme.paddings.gap30}px;
  }
`;

export const WrapperContent = styled.div`
  max-width: ${({ theme }) => theme.widths.container}px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.paddings.gap40}px;

  @media (max-width: ${({ theme }) => theme.widths.container}px) {
    max-width: 100%;
    padding: ${({ theme }) => theme.paddings.gap30}px;
  }
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.paddings.xl}px;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    align-items: center;
  }
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title}px;
  background: ${({ theme }) => theme.colors.gradient};
  font-weight: ${({ theme }) => theme.weights.lg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: end;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.weights.xs};
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
`;
