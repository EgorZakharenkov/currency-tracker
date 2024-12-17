import { FC } from 'react';

import { StyledNavLink } from './styled';

interface LinkProps {
  text: string;
  path: string;
}

export const Link: FC<LinkProps> = ({ text, path }) => {
  return <StyledNavLink to={path}>{text}</StyledNavLink>;
};
