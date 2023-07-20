import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
