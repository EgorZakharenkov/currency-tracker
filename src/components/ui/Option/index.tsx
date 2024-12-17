import { FC } from 'react';

import { StyledOption } from './styled';

interface OptionProps {
  value: string;
  onClick?: (value: string) => void;
}

export const Option: FC<OptionProps> = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };
  return <StyledOption onClick={handleClick}>{value}</StyledOption>;
};
