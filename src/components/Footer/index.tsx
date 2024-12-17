import {
  FooterCopyRight,
  FooterTitle,
  MenuItem,
  StyledFooter,
  Wrapper,
  WrapperDescription,
  WrapperInfo,
  WrapperListLinks,
  WrapperListMenu,
} from './styled';

import { Link } from '@/components/ui/Link';
import { images } from '@/constants/images';
import { Text } from '@/styles/styled';

export const Footer = () => {
  const fakeData = [
    {
      title: 'General',
      list: ['Market', 'Service'],
    },
    {
      title: 'Product',
      list: ['Sparks', 'Snaps'],
    },
    {
      title: 'Community',
      list: ['Ideas', 'Streams'],
    },
  ];
  return (
    <StyledFooter>
      <Wrapper>
        <WrapperDescription>
          <WrapperInfo>
            <img src={images.headerLogo} alt="footerLogo" />
            <FooterTitle>Modsen Currency Tracker</FooterTitle>
          </WrapperInfo>
          <Text size="sm" color="white">
            Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12
            billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.
          </Text>
        </WrapperDescription>
        <WrapperListMenu>
          {fakeData.map(({ title, list }) => (
            <MenuItem>
              <Text size="md" color="white">
                {title}
              </Text>
              <WrapperListLinks>
                {list.map((link) => (
                  <Link text={link} path={link} key={link} />
                ))}
              </WrapperListLinks>
            </MenuItem>
          ))}
        </WrapperListMenu>
      </Wrapper>
      <FooterCopyRight>Startsup © 2023-2024, All Rights Reserved</FooterCopyRight>
    </StyledFooter>
  );
};
