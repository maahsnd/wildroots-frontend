import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import styles from './farmStand.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';
import {
  listAll as listAllFiles,
  getDownloadURL,
  ref as storageRef
} from 'firebase/storage';

function FarmStand() {
  const [content, setContent] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentRef = dbRef(db, 'general-info/farmStand');

        onDbValue(contentRef, (snapshot) => {
          const contentData = snapshot.val();
          if (contentData) {
            setContent(contentData);
          }
        });
      } catch (error) {
        console.error('Error fetching farm stand data:', error);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    const fetchPhotoUrls = async () => {
      try {
        const folderRef = storageRef(storage, 'farmStandPhotos'); // Use storageRef to reference the storage folder
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
    <div className={styles.farmContainer}>
      <div className={styles.farmInfoContainer}>
        <h3 className={styles.farmTitle}>Local Food For Local Folks!</h3>
        <p className={styles.farmText}>
          At Wild Roots Kitchen and Farm we take joy in producing locally grown
          Vegetables, Fruits, Herbs and Flowers that are used at Wild Roots
          Kitchen and offered to the community in our Farm Stand, and at the
          Farmer's market. Seasonal produce is grown using organic and
          permaculture methods that make the most of our Northwest Climate and
          habitats. We are excited to share what we grow with our community, and
          hope to see you soon.
        </p>
      </div>
      {content && (
        <>
          <div className={styles.farmStandInfoContainer}>
            <p className={styles.farmText}>{content[0].description}</p>
          </div>
          <hr />
          <div className={styles.farmStandMenuContainer}>
            <div className={styles.itemContainer}>
              <h4 className={styles.farmText}>What's in stock now:</h4>
              <ul>
                {content.slice(1).map((item) => {
                  return (
                    <li className={styles.farmStandItem} key={item.description}>
                      {' '}
                      {item.description}{' '}
                    </li>
                  );
                })}
              </ul>
            </div>
            {photos.length > 0 && (
              <div className={styles.imageGalleryContainer}>
                <ReactImageGallery items={photos} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default FarmStand;
