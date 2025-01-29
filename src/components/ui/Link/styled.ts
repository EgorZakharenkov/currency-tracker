import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.activeLink};
    text-decoration: underline;
  }
`;
