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

        const photoUrls = await fetchPhotoUrls();

        // See https://www.npmjs.com/package/react-image-gallery for available properties
         const processedUrls = photoUrls.map((photo) => {
          return ({ original: photo.url,  originalHeight: '400px', loading: 'lazy'}); 
        });
console.log(processedUrls)
        setPhotos(processedUrls); 

      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenu();
  }, []);

  const fetchPhotoUrls = async () => {
    try {
      const folderRef = storageRef(storage, 'menuPhotos'); // Use storageRef to reference the storage folder
      const files = await listAllFiles(folderRef);
      const urls = await Promise.all(
        files.items.map(async (fileRef) => {
          const url = await getDownloadURL(fileRef);
          return { id: fileRef.name.split('.')[0], url };
        })
      );
      return urls;
    } catch (error) {
      console.error('Error fetching photo URLs:', error);
      return [];
    }
  };

  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.menuTitle}></h1>
      {menu ? (
        <>
          {/* Display menu content */}
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
          <div className={styles.imageGalleryContainer}>  {photos.length ? <ImageGallery items={photos} /> : <></>}</div>
        
          
   
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Menu;
