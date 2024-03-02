import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css'; // Import CSS module

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.siteTitle}>Wild Roots Farm and Kitchen</h1>
        <div className={styles.logo}></div>
        <div
          className={styles.menuIcon}
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <img src="" alt="img" />
        </div>
        <div className={`${styles.navElements} ${showNavbar && styles.active}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setShowNavbar(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setShowNavbar(false)}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/farm"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setShowNavbar(false)}
              >
                Farm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setShowNavbar(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setShowNavbar(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
