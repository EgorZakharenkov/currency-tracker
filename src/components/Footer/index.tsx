import * as S from './styled';

import { Link } from '@/components/ui/Link';
import { images } from '@/constants/images';
import { Text } from '@/styles/styled';

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

export const Footer = () => {
  return (
    <S.StyledFooter>
      <S.Wrapper>
        <S.WrapperDescription>
          <S.WrapperInfo>
            <img src={images.headerLogo} alt="footerLogo" />
            <S.FooterTitle>Modsen Currency Tracker</S.FooterTitle>
          </S.WrapperInfo>
          <Text size="sm" color="white">
            Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12
            billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.
          </Text>
        </S.WrapperDescription>
        <S.WrapperListMenu>
          {fakeData.map(({ title, list }) => (
            <S.MenuItem>
              <Text size="md" color="white">
                {title}
              </Text>
              <S.WrapperListLinks>
                {list.map((link) => (
                  <Link text={link} path={link} key={link} />
                ))}
              </S.WrapperListLinks>
            </S.MenuItem>
          ))}
        </S.WrapperListMenu>
      </S.Wrapper>
      <S.FooterCopyRight>Startsup © 2023-2024, All Rights Reserved</S.FooterCopyRight>
    </S.StyledFooter>
  );
};
