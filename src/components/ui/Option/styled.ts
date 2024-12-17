import styled from 'styled-components';

export const StyledOption = styled('div')`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  padding: ${({ theme }) => theme.paddings.xs}px ${({ theme }) => theme.paddings.sm}px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlack};
  }
`;
