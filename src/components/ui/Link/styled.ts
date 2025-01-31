import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.xs}px;
    &.active {
      font-weight: bold;
      color: ${theme.colors.activeLink};
      text-decoration: underline;
    }
  `}
`;
