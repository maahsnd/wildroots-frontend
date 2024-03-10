import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h3>Contact us (we'd love to hear from you!)</h3>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <span>Email:</span>{' '}
          <a href="mailto:WildRootsKitchenVashon@gmail.com">
            WildRootsKitchenVashon@gmail.com
          </a>
        </div>
        <div className={styles.contactItem}>
          <span>Phone:</span> <a href="tel:+15034734349">(503) 473-4349</a>
        </div>
        <div className={styles.contactItem}>
          <span>Address:</span> Vashon, WA
        </div>
        <div className={styles.contactItem}>
          <span>Facebook:</span>{' '}
          <a
            href="https://www.facebook.com/profile.php?id=100064478480593"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wild Roots Kitchen Vashon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
