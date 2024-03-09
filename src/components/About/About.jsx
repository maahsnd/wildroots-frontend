import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutTextContainer}>
        <p>
          We make nourishing and seasonal cuisine to order from our professional
          kitchen located on beautiful Vashon Island. We utilize as many local
          ingredients as possible, some of which are grown on site in the Wild
          Roots Garden
        </p>
      </div>
    </div>
  );
}

export default About;
