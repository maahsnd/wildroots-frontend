import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

export const PublicLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
