import { FC, useState } from 'react';

import { Arrow, ContainerSelect, ContainerValue, OptionsList } from './styled';

import { Option } from '@/components/ui/Option';
import { images } from '@/constants/images';

type Option = {
  value: string;
};

interface SelectProps {
  options: Option[];
  setSelected: (value: string) => void;
  selected: string;
}
export const Select: FC<SelectProps> = ({ setSelected, options, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleSelected = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };
  return (
    <ContainerSelect>
      <ContainerValue onClick={handleOpen}>
        <span>{selected ? selected : 'Select value'}</span>
        <Arrow isOpen={isOpen} src={images.arrow} alt="arrow" />
      </ContainerValue>
      {isOpen && (
        <OptionsList isOpen={isOpen}>
          {options.map(({ value }) => (
            <Option key={value} onClick={handleSelected} value={value} />
          ))}
        </OptionsList>
      )}
    </ContainerSelect>
  );
};
