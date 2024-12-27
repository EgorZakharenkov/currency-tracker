import styled from 'styled-components';

export const Input = styled.input`
  padding: ${({ theme }) => theme.paddings.sm}px;
  font-size: ${({ theme }) => theme.fontSizes.min}px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.xs}px;
`;
