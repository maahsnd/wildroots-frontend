import styles from './menu.module.css';
import { useState } from 'react';

function Menu() {
  const menuData = [
    {
      sectionTitle: 'Soups',
      sectionDetail: 'Available in quarts $18 or half gallons $28',
      sectionItems: [
        {
          itemTitle: 'Tuscan White Bean and Kale (Vegan and Gluten Free)',
          itemDescription:
            ' A rustic Italian soup filed with vegetables and white cannellini'
        }
      ]
    },
    {
      sectionTitle: 'Salads',
      sectionDetail: 'small $10 large $15',
      sectionItems: [
        {
          itemTitle: 'Autumn Panzanella (Vegan)',
          itemDescription:
            'A Tuscan chopped Salad that incorporates house baked bread soaked in balsamic vinegar to season the roasted vegetables such as kale, beets, brussels sprouts and butternut squash'
        }
      ]
    }
  ];
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.menuTitle}>Menu</h1>
      {menuData.map((section) => (
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
