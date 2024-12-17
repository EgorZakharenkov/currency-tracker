import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.paddings.gap50}px;
`;
export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.paddings.md}px;
`;
