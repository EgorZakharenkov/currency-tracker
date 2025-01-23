import { FC } from 'react';

import { StyledOption } from './styled';

interface OptionProps {
  value: string | number;
  onClick?: (value: string | number) => void;
}

export const Option: FC<OptionProps> = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };
  return <StyledOption onClick={handleClick}>{value}</StyledOption>;
};
