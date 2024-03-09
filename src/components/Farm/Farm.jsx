import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import styles from './farm.module.css';

function Farm() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentRef = dbRef(db, 'general-info/farm');

        onDbValue(contentRef, (snapshot) => {
          const contentData = snapshot.val();
          console.log(contentData);
          if (contentData) {
            setContent(contentData);
          }
        });
      } catch (error) {
        console.error('Error fetching farm data:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className={styles.farmContainer}>
      <div className={styles.farmTextContainer}>
        {content && content.map((item) => <p>{item.description}</p>)}
      </div>
    </div>
  );
}

export default Farm;
