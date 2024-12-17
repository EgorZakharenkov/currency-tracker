import { FC } from 'react';

import { CardWrapper, WrapperInfo } from './styled';

import { images } from '@/constants/images';
import { Text } from '@/styles/styled';

interface CardProps {
  currency: string;
  valueInUSD: string;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ currency, valueInUSD, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <img src={images.dollarIcon} alt="card icon" />
      <WrapperInfo>
        <Text size="lg" color="lightGray">
          {currency}
        </Text>
        <Text size="md" color="gray">
          {valueInUSD}$
        </Text>
      </WrapperInfo>
    </CardWrapper>
  );
};
