import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import MenuIcon from '../../assets/menu-icon.svg?react';

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <NavLink to="/" className={styles.siteTitle}>
            Wild Roots Farm and Kitchen
          </NavLink>
          <div
            className={styles.menuIcon}
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <div className={styles.menuIconFrame}>
              <span className={styles.menuIconBars}></span>
              <span className={styles.menuIconBars}></span>
              <span className={styles.menuIconBars}></span>
            </div>
          </div>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
