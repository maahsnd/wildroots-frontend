import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import {
  listAll as listAllFiles,
  getDownloadURL,
  ref as storageRef
} from 'firebase/storage'; // Import ref from storage
import styles from './menu.module.css'; // Import CSS module

function Menu() {
  const [menu, setMenu] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [captions, setCaptions] = useState({});

  /*   useEffect(() => {
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
        setPhotos(photoUrls);

        const captionsRef = dbRef(db, 'photo-captions');
        onDbValue(captionsRef, (snapshot) => {
          const captionsData = snapshot.val();
          if (captionsData) {
            setCaptions(captionsData);
          }
        });
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenu();
  }, []); */

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
      <h1 className={styles.menuTitle}>Menu</h1>
      {menu ? (
        <>
          {/* Display menu content */}
          {menu.sections.map((section) => (
            <div key={section.sectionTitle}>
              <h2>{section.sectionTitle}</h2>
              <p>{section.sectionDetail}</p>
              {/* Display items for this section */}
              <ul>
                {menu.items
                  .filter((item) => item.itemSection === section.sectionTitle)
                  .map((item) => (
                    <li key={item.itemTitle}>
                      <h3>{item.itemTitle}</h3>
                      <p>{item.itemDescription}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          {/* Display photos and captions */}
          <div className={styles.gallery}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.photo}>
                <img
                  src={photo.url}
                  alt={`Uploaded ${photo.id}`}
                  className={styles.image}
                />
                <p className={styles.caption}>{captions[photo.id]}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Menu;
