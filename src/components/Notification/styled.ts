import styled, { css } from 'styled-components';
interface NotificationProps {
  isVisible: boolean;
}
export const NotificationWrapper = styled.div<NotificationProps>`
  ${({ theme, isVisible }) => css`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: ${theme.paddings.sm}px ${theme.paddings.md}px;
    background-color: ${theme.colors.green};
    color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.sm}px;
    font-size: ${theme.fontSizes.sm}px;
    display: ${isVisible ? 'block' : 'none'};
    opacity: ${isVisible ? 1 : 0};
    transition: opacity 0.3s ease;
  `}
`;
