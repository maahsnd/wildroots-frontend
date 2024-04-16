import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <img
        className={styles.homePhoto}
        src="https://source.unsplash.com/DUPFowqI6oI"
        alt="Generic pastoral photo"
      />
      <div className={styles.homeTextContainer}>
        <p className={styles.homeMainCaption}>
          Here at Wild Roots kitchen, located on beautiful Vashon Island, we
          focus on making Seasonal, Farm to Table food, most of which is grown
          on site in the Wild Roots Garden.
        </p>
        <hr />
        <div className={styles.galleryContainer}>
          <div className={styles.galleryItem}>
            <NavLink to="/menu" className={styles.galleryItemTitle}>
              <img
                className={styles.galleryImage}
                src="https://res.cloudinary.com/dscsiijis/image/upload/c_scale,e_sharpen:100,q_100,w_300/v1712589705/wildRoots/salad_f7bzxs.jpg"
                alt=""
              />
              <h4>Weekly Menus</h4>
            </NavLink>
            <p className={styles.galleryItemDescription}>
              {' '}
              We offer a wide variety of seasonal Soups, Salads, Sandwiches,
              Prepared Meals and Desserts.
            </p>
          </div>
          <div className={styles.galleryItem}>
            <NavLink to="/farm-stand" className={styles.galleryItemTitle}>
              <img
                className={styles.galleryImage}
                src="https://res.cloudinary.com/dscsiijis/image/upload/c_scale,e_sharpen:100,q_100,w_400/v1712589524/wildRoots/honey_crisp_shelf_berhqj.jpg"
                alt=""
              />
              <h4>Farm Stand</h4>
            </NavLink>

            <p className={styles.galleryItemDescription}>
              Locally grown herbs, flowers and produce and so much more!
            </p>
          </div>
          <div className={styles.galleryItem}>
            <NavLink to="/farmers-market" className={styles.galleryItemTitle}>
              <img
                className={styles.galleryImage}
                src="https://res.cloudinary.com/dscsiijis/image/upload/c_scale,e_sharpen:100,q_100,w_400/v1712589537/wildRoots/farm_stand_dahlias_hg3slj.jpg"
                alt=""
              />
              <h4>Farmer's Market</h4>
            </NavLink>

            <p className={styles.galleryItemDescription}>
              Look for us at the Vashon Farmers Market!
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.menuBlurb}>
          <p>Our weekly menu is posted under the menu tab every Sunday.</p>
          <p>We look forward to feeding you!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
