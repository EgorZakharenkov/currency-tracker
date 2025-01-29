import styled from 'styled-components';

interface TitleProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'lightGray' | 'gray';
  border?: boolean;
}

export const SubTitle = styled.h2<TitleProps>`
  font-size: ${({ theme, size }) => theme.fontSizes[size]}px;
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme }) => theme.weights.sm};
  padding-bottom: ${({ theme, border }) => (border ? theme.paddings.xs : '0')}px;
  border-bottom: ${({ theme, border }) => (border ? `1px solid ${theme.colors.gray}` : 'none')};
`;

export const Text = styled.span<TitleProps>`
  font-size: ${({ theme, size }) => theme.fontSizes[size]}px;
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme }) => theme.weights.sm};
  padding-bottom: ${({ theme, border }) => (border ? theme.paddings.xs : '0')}px;
  border-bottom: ${({ theme, border }) => (border ? `1px solid ${theme.colors.gray}` : 'none')};
`;
