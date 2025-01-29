import styled from 'styled-components';

export const StyledOption = styled('div')`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  padding: ${({ theme }) => theme.paddings.xs}px ${({ theme }) => theme.paddings.sm}px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlack};
  }
`;
