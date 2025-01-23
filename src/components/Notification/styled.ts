import styled from 'styled-components';
interface NotificationProps {
  isVisible: boolean;
}
export const NotificationWrapper = styled.div<NotificationProps>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.paddings.sm}px ${({ theme }) => theme.paddings.md}px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;
