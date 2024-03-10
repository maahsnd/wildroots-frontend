import { useState, useEffect } from 'react';
import { db, storage } from '../../firebase-config';
import { ref as dbRef, onValue as onDbValue } from 'firebase/database';
import styles from './farm.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';
import {
  listAll as listAllFiles,
  getDownloadURL,
  ref as storageRef
} from 'firebase/storage';

function Farm() {
  const [content, setContent] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentRef = dbRef(db, 'general-info/farm');

        onDbValue(contentRef, (snapshot) => {
          const contentData = snapshot.val();
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

  useEffect(() => {
    const fetchPhotoUrls = async () => {
      try {
        const folderRef = storageRef(storage, 'farmPhotos'); // Use storageRef to reference the storage folder
        const files = await listAllFiles(folderRef);
        const urls = await Promise.all(
          files.items.map(async (fileRef) => {
            const url = await getDownloadURL(fileRef);
            return {
              original: url,
              originalHeight: '400px',
              loading: 'lazy'
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
        <h3>Wild roots farm is ... permanent, static description...</h3>
      </div>
      {content && (
        <>
          <div className={styles.farmStandInfoContainer}>
            <p>{content[0].description}</p>
          </div>
          <hr />
          <div className={styles.farmStandMenuContainer}>
            <div className={styles.textContainer}>
              <h4>Current offerings</h4>
              <p>{content[1].description}</p>
            </div>
            <ReactImageGallery items={photos} />
          </div>

          {content.length > 2 ? (
            <>
              <hr />
              <div className={styles.farmMiscellaneousContainer}>
                <p>{content[2].description}</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default Farm;
