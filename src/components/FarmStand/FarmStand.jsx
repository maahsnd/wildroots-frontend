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
          At Wild Roots Farm and Garden we take joy in producing locally grown
          Vegetables, Fruits, Herbs and Flowers that are used at Wild Roots
          Kitchen and offered to the community in our Farm Stand. Seasonal
          produce is grown using organic and permaculture methods that make the
          most of our Northwest Climate and habitats. We are excited to share
          what we grow with our community, and hope to see you soon.
        </p>
      </div>
      {content && (
        <>
          <div className={styles.farmStandInfoContainer}>
            <p className={styles.farmText}>{content[0].description}</p>
          </div>
          <hr />
          <div className={styles.farmStandMenuContainer}>
            <div className={styles.textContainer}>
              <h4 className={styles.farmText}>Current offerings</h4>
              <p className={styles.farmText}> {content[1].description}</p>
            </div>
            <div className={styles.imageGalleryContainer}>
              <ReactImageGallery items={photos} />
            </div>
          </div>

          {content.length > 2 ? (
            <>
              <hr />
              <div className={styles.farmMiscellaneousContainer}>
                <p className={styles.farmText}>{content[2].description}</p>
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