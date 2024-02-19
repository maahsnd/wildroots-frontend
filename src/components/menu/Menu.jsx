import styles from './menu.module.css';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { set, ref, onValue, remove, update } from 'firebase/database';

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        setMenu(data.menu.items);
      }
    });
  }, []);

  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.menuTitle}>Menu</h1>
      {menu &&
        menu.map((section) => (
          <ul className={styles.menuSection} key={section.sectionTitle}>
            <div className={styles.sectionTitleContainer}>
              <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>
              <p className={styles.sectionDetail}>{section.sectionDetail}</p>
            </div>

            {section.sectionItems.map((item) => (
              <li className={styles.dishContainer} key={item.itemTitle}>
                <h3 className={styles.dishTitle}>{item.itemTitle}</h3>
                <p className={styles.dishDescription}>{item.itemDescription}</p>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

export default Menu;
