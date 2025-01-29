import styled from 'styled-components';

interface SwitcherProps {
  isActive: boolean;
}
export const SwitchWrapper = styled.div<SwitcherProps>`
  width: ${({ theme }) => theme.widths.switcher}px;
  height: ${({ theme }) => theme.heights.switcher}px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.paddings.xl}px;
  display: flex;
  align-items: center;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.lightBlack : 'transparent')};
  cursor: pointer;
  transition: 0.3s ease;
`;

export const Circle = styled.div<SwitcherProps>`
  width: ${({ theme }) => theme.widths.circle}px;
  height: ${({ theme }) => theme.widths.circle}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${({ isActive }) => (isActive ? 'translateX(25px)' : 'translateX(0)')};
`;
