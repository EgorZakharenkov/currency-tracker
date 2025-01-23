import { FC } from 'react';

import { CardWrapper, WrapperInfo } from './styled';

import { currencyImages } from '@/constants/images';
import { SubTitle, Text } from '@/styles/styled';

interface CardProps {
  currency: string;
  valueInUSD: string;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ currency, valueInUSD, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <img src={currencyImages[currency.toLowerCase()]} alt="card icon" />
      <WrapperInfo>
        <SubTitle size="lg" color="lightGray">
          {currency}
        </SubTitle>
        <Text size="md" color="gray">
          {valueInUSD}$
        </Text>
      </WrapperInfo>
    </CardWrapper>
  );
};
