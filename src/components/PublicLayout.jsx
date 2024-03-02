import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav';

export const PublicLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
