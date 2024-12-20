import { useState } from 'react';

import { StyledHeader, WrapperHeader, WrapperLinks } from '@/components/Header/styled';
import { Link } from '@/components/ui/Link';
import { Switcher } from '@/components/ui/Switcher';
import { images } from '@/constants/images';
import { routes } from '@/constants/routes';
import { DARK, LIGHT } from '@/constants/themeConstants';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setTheme } from '@/store/Slices/Theme';

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleSwitch = () => {
    setActive((prevState) => !prevState);
    dispatch(setTheme(active ? DARK : LIGHT));
  };
  return (
    <StyledHeader>
      <WrapperHeader>
        <img src={images.headerLogo} alt="headerLogo" />
        <WrapperLinks>
          {routes.map(({ label, path }) => (
            <Link text={label} path={path} key={label} />
          ))}
        </WrapperLinks>
        <Switcher isActive={active} onToggle={handleSwitch} />
      </WrapperHeader>
    </StyledHeader>
  );
};
