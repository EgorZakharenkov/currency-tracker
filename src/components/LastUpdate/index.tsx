import { FC } from 'react';

import { Wrapper, WrapperInfo } from '@/components/LastUpdate/styled';
import { images } from '@/constants/images';
import { SubTitle } from '@/styles/styled';
interface LastUpdateProps {
  time: string;
}

export const LastUpdate: FC<LastUpdateProps> = ({ time }) => {
  return (
    <Wrapper>
      <WrapperInfo>
        <img src={images.circle} alt="circle icon" />
        <SubTitle color="primary" size="md">
          Last updated at {time}pm{' '}
        </SubTitle>
      </WrapperInfo>
    </Wrapper>
  );
};
