import { Outlet } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

export const PublicLayout = () => {
  return (
    <div className="page-container">
      <Nav />
      <Outlet />

      <Footer />
    </div>
  );
};
