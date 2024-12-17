import styled from 'styled-components';

export const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.lg}px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddings.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`;

export const CurrentCurrencyBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.paddings.sm}px;
  font-size: ${({ theme }) => theme.fontSizes.min}px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.xs}px;
`;

export const ResultBlock = styled.div`
  margin-top: ${({ theme }) => theme.paddings.sm}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.weights.lg};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
