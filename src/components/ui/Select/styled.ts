import styled, { css } from 'styled-components';

interface OptionListProps {
  isOpen?: boolean;
}
export const ContainerSelect = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: ${theme.widths.select}px;
    border-radius: ${theme.paddings.xs}px;
    background-color: ${theme.colors.secondary};
    cursor: pointer;
  `}
`;

export const ContainerValue = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.paddings.sm}px;

    span {
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes.xs}px;
      padding: ${theme.paddings.xs}px ${theme.paddings.sm}px;
    }
  `}
`;
export const OptionsList = styled.div<OptionListProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: ${isOpen ? theme.heights.select : '0'}px;
    display: flex;
    flex-direction: column;
    transition: max-height 0.3s ease;
    overflow: auto;
    background-color: ${theme.colors.secondary};
    z-index: 10;

    &::-webkit-scrollbar {
      width: ${theme.paddings.xs}px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.primary};
      border-radius: ${theme.paddings.xs}px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.lightBlack};
      border-radius: ${theme.paddings.xs}px;
    }
  `}
`;
export const Arrow = styled.img<OptionListProps>`
  transition: 0.3s;
  rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0deg')};
`;
