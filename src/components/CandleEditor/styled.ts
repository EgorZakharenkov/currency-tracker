import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.gap40}px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddings.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
`;

export const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.paddings.gap30}px;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.label`
  display: inline-block;
  width: 80px;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.paddings.sm}px;
`;

export const Field = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.paddings.sm}px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.paddings.gap40}px;
  margin-top: ${({ theme }) => theme.paddings.gap30}px;
`;
