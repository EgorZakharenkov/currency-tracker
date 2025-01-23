import styled from 'styled-components';

interface OptionListProps {
  isOpen?: boolean;
}
export const ContainerSelect = styled.div`
  position: relative;
  width: ${({ theme }) => theme.widths.select}px;
  border-radius: ${({ theme }) => theme.paddings.xs}px;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const ContainerValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.paddings.sm}px;

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    padding: ${({ theme }) => theme.paddings.xs}px ${({ theme }) => theme.paddings.sm}px;
  }
`;
export const OptionsList = styled.div<OptionListProps>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: ${({ isOpen, theme }) => (isOpen ? theme.heights.select : '0')}px;
  display: flex;
  flex-direction: column;
  transition: max-height 0.3s ease;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 10;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.paddings.xs}px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.paddings.xs}px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightBlack};
    border-radius: ${({ theme }) => theme.paddings.xs}px;
  }
`;
export const Arrow = styled.img<OptionListProps>`
  transition: 0.3s;
  rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0deg')};
`;
