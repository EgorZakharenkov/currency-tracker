import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Content, WrapperApp } from '@/components/App/styled';
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LastUpdate } from '@/components/LastUpdate';
import { DARK } from '@/constants';
import { routes } from '@/constants/routes';
import { darkTheme, lightTheme, theme } from '@/constants/theme';
import { useAppSelector } from '@/hooks/redux-hooks';
import GlobalStyle from '@/styles/global-styled';

export const App = () => {
  const valueTheme = useAppSelector((state) => state.theme.theme);
  const themeColors = valueTheme === DARK ? darkTheme : lightTheme;
  const themeApp = { ...theme, ...themeColors };

  return (
    <ThemeProvider theme={themeApp}>
      <WrapperApp>
        <GlobalStyle />
        <Header />
        <Banner />
        <LastUpdate time="12:30" />
        <Content>
          <Routes>
            {routes.map(({ element, path }) => (
              <Route path={path} element={element} />
            ))}
          </Routes>
        </Content>
        <Footer />
      </WrapperApp>
    </ThemeProvider>
  );
};
