import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    width: ${theme.heights.switcher}px;
    height: ${theme.heights.switcher}px;
    border: 5px solid ${theme.colors.lightGray};
    border-top: 5px solid ${theme.colors.spinner};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  `}
`;
