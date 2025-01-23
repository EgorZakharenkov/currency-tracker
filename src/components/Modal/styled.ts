import styled from 'styled-components';
interface ModalProps {
  isOpen: boolean;
}
export const Overlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  padding: ${({ theme }) => theme.paddings.lg}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  max-width: ${({ theme }) => theme.widths.modal}px;
  margin: ${({ theme }) => theme.paddings.xs}px;
  width: 100%;
  position: relative;
`;
