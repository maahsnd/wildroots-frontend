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
          Whole food menus that are organic, seasonally focused and locally
          sourced, prepared from scratch by hand.
        </p>
        <hr />
        <p>Our weekly menu is posted under the menu tab every Sunday.</p>
      </div>
    </div>
  );
}

export default Home;
