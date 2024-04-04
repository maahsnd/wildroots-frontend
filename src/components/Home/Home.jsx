import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Home() {
  /*   const [content, setContent] = useState(null); */
  /* 
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentRef = dbRef(db, 'general-info/home');

        onDbValue(contentRef, (snapshot) => {
          const contentData = snapshot.val();
          console.log(contentData);
          if (contentData) {
            setContent(contentData);
          }
        });
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchContent();
  }, []); */

  return (
    <div className={styles.homeContainer}>
      <img
        className={styles.homePhoto}
        src="https://source.unsplash.com/DUPFowqI6oI"
        alt="Generic pastoral photo"
      />
      <div className={styles.homeTextContainer}>
        <p className={styles.homeMainCaption}>
          Here at Wild Roots kitchen, located on beautiful Vashon Island, we
          focus on making Seasonal, Farm to Table food, most of which is grown
          on site in the Wild Roots Garden.
        </p>
        <hr />
        <div className={styles.galleryContainer}>
          <div className={styles.galleryItem}>
            <img src="https://source.unsplash.com/Rz8S_P7POfM" alt="" />
            <NavLink to="/menu" className={styles.galleryItemTitle}>
              <h4>Weekly Menus</h4>
            </NavLink>
            <p className={styles.galleryItemDescription}>
              {' '}
              We offer a wide variety of seasonal Soups, Salads, Sandwiches,
              Prepared Meals and Desserts.
            </p>
          </div>
          <div className={styles.galleryItem}>
            <img src="https://source.unsplash.com/g3QLvRGoR54" alt="" />
            <NavLink to="/farm-stand" className={styles.galleryItemTitle}>
              <h4>Farm Stand</h4>
            </NavLink>

            <p className={styles.galleryItemDescription}>
              Locally grown herbs, flowers and produce and so much more!
            </p>
          </div>
          <div className={styles.galleryItem}>
            <img src="https://source.unsplash.com/6DsMsaoFmqY" alt="" />
            <NavLink to="/farmers-market" className={styles.galleryItemTitle}>
              <h4>Farmer's Market</h4>
            </NavLink>

            <p className={styles.galleryItemDescription}>
              Look for us at the Vashon Farmers Market!
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.menuBlurb}>
          <p>Our weekly menu is posted under the menu tab every Sunday.</p>
          <p>We look forward to feeding you!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
