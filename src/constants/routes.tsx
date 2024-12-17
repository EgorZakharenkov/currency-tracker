import { ReactNode } from 'react';

import { Bank } from '@/pages/Bank';
import { Contact } from '@/pages/Contact';
import { Home } from '@/pages/Home';
import { TimeLine } from '@/pages/TimeLine';

interface RoutesType {
  label: string;
  path: string;
  element: ReactNode;
}

export const routes: RoutesType[] = [
  {
    label: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    label: 'Timeline',
    path: '/timeline',
    element: <TimeLine />,
  },
  {
    label: 'Bank card',
    path: '/bank',
    element: <Bank />,
  },
  {
    label: 'Contact',
    path: '/contact',
    element: <Contact />,
  },
];
