import { FC } from 'react';

import { Wrapper, WrapperInfo } from '@/components/LastUpdate/styled';
import { images } from '@/constants/images';
import { Text } from '@/styles/styled';
interface LastUpdateProps {
  time: string;
}

export const LastUpdate: FC<LastUpdateProps> = ({ time }) => {
  return (
    <Wrapper>
      <WrapperInfo>
        <img src={images.circle} alt="circle icon" />
        <Text color="lightGray" size="md">
          Last updated at {time}pm{' '}
        </Text>
      </WrapperInfo>
    </Wrapper>
  );
};
