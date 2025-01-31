import styled, { css } from 'styled-components';

export const StyledSuggestions = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: calc(100% + 10px);
    width: 100%;
    list-style: none;
    background: ${theme.colors.search};
    border-radius: ${theme.borderRadius.sm}px;
    overflow: hidden;
    z-index: 10;

    li {
      padding: ${theme.paddings.md}px;
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.xs}px;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background: ${theme.colors.activeLink};
      }

      &:not(:last-child) {
        border-bottom: 1px solid ${theme.colors.gray};
      }
    }
  `}
`;
