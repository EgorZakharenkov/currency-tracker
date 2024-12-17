import { Description, Title, WrapperBanner, WrapperContent, WrapperInfo } from './styled';

import { images } from '@/constants/images';

export const Banner = () => {
  return (
    <WrapperBanner>
      <WrapperContent>
        <WrapperInfo>
          <Title>
            Modsen Currency <br /> Tracker
          </Title>
          <Description>
            Quotes for the dollar and other <br /> international currencies.
          </Description>
        </WrapperInfo>
        <img src={images.bannerLogo} alt="banner icon" />
      </WrapperContent>
    </WrapperBanner>
  );
};
