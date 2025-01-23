import { FC } from 'react';

import { LoaderWrapper, Spinner } from '@/components/Loader/styled';

export const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};
