import styled, { css } from 'styled-components';

interface SwitcherProps {
  isActive: boolean;
}
export const SwitchWrapper = styled.div<SwitcherProps>`
  ${({ theme, isActive }) => css`
    width: ${theme.widths.switcher}px;
    height: ${theme.heights.switcher}px;
    border: 2px solid ${theme.colors.gray};
    border-radius: ${theme.paddings.xl}px;
    display: flex;
    align-items: center;
    background-color: ${isActive ? theme.colors.lightBlack : 'transparent'};
    cursor: pointer;
    transition: 0.3s ease;
  `}
`;

export const Circle = styled.div<SwitcherProps>`
  ${({ theme, isActive }) => css`
    width: ${theme.widths.circle}px;
    height: ${theme.widths.circle}px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${isActive ? 'translateX(25px)' : 'translateX(0)'};
  `}
`;
