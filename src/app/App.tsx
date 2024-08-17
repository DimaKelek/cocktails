import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import './styles/App.scss';
import { NavBar } from '@components';

export const App = (): ReactElement => {
  return (
    <div className={'mainContainer'}>
      <NavBar />
      <div className={'outletContainer'}>
        <Outlet />
      </div>
    </div>
  );
};
