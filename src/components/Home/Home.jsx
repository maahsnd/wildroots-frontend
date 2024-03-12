import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import styles from './Home.module.css';

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
        <p>
          Here at Wild Roots kitchen, located on beautiful Vashon Island, we
          focus on making Seasonal, Farm to Table food, most of which is grown
          on site in the Wild Roots Garden. We offer a wide variety of Soups,
          Salads, Sandwiches, Prepared Meals and Desserts inspired by what is in
          peak season in our gardens. Look for us at the Vashon Farmers Market,
          check out what's in our Farm Stand or find our weekly Menus on
          Facebook and place an order. We look forward to feeding you!
        </p>
        <hr />
        <p>Our weekly menu is posted under the menu tab every Sunday.</p>
      </div>
    </div>
  );
}

export default Home;
