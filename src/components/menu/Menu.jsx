import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import {
  listAll as listAllFiles,
  getDownloadURL,
  ref as storageRef
} from 'firebase/storage';
import styles from './menu.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

function Menu() {
  const [menu, setMenu] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menuRef = dbRef(db, 'menu');

        onDbValue(menuRef, (snapshot) => {
          const menuData = snapshot.val();
          if (menuData) {
            setMenu(menuData);
          }
        });
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    const fetchPhotoUrls = async () => {
      try {
        const folderRef = storageRef(storage, 'menuPhotos'); // Use storageRef to reference the storage folder
        const files = await listAllFiles(folderRef);
        const urls = await Promise.all(
          files.items.map(async (fileRef) => {
            const url = await getDownloadURL(fileRef);
            return {
              original: url,
              originalHeight: '400px',
              originalWidth: '600px',
              loading: 'lazy',
              showFullscreenButton: false
            };
          })
        );
        setPhotos(urls);
        return;
      } catch (error) {
        console.error('Error fetching photo URLs:', error);
        return [];
      }
    };
    fetchPhotoUrls();
  }, []);

  return (
    <div className={styles.menuContainer}>
      {menu ? (
        <>
          <p className={styles.orderingInstructions}>
            Food is available to order for pick up at our Farm Stand on
            Wednesday, Thursday and Friday. Orders must be placed by 8 pm
            Tuesday. You can place your order by emailing us at{' '}
            <span>
              <a href="mailto:WildRootsKitchenVashon@gmail.com">
                WildRootsKitchenVashon@gmail.com
              </a>{' '}
            </span>
            or texting us 503-473-4349. We prefer electronic payment at this
            time, and accept Zelle and Venmo.{' '}
          </p>
          {/* Display menu section content */}
          {menu.sections.map((section) => (
            <div key={section.sectionTitle} className={styles.sectionContainer}>
              <div className={styles.sectionTitleContainer}>
                <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>
                <p className={styles.sectionDetail}>{section.sectionDetail}</p>
              </div>

              {/* Display items for this section */}
              <ul>
                <hr />
                {menu.items
                  .filter((item) => item.itemSection === section.sectionTitle)
                  .map((item) => (
                    <li key={item.itemTitle}>
                      <h3 className={styles.itemTitle}>{item.itemTitle}</h3>
                      <p className={styles.itemDescription}>
                        {item.itemDescription}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <div className={styles.imageGalleryContainer}>
            {' '}
            {photos.length ? (
              <ImageGallery items={photos} />
            ) : (
              <>Loading photos</>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Menu;
