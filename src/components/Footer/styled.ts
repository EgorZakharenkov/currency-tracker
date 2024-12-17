import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.gap50}px;
  max-width: ${({ theme }) => theme.widths.container}px;
  margin: ${({ theme }) => theme.paddings.gap50}px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.paddings.gap100}px;
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
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.weights.lg};
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const FooterDescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.weights.xs};
  color: ${({ theme }) => theme.colors.white};
`;

export const WrapperListMenu = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.paddings.gap70}px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.gap40}px;
`;
export const MenuTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.white};

  font-weight: ${({ theme }) => theme.weights.sm};
`;

export const WrapperListLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.md}px;
`;

export const FooterCopyRight = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.weights.lg};
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;
