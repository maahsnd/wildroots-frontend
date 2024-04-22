import styles from './about.module.css';
function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutBannerPhoto}>
        <img
          className={styles.aboutBannerPhoto}
          src="https://res.cloudinary.com/dscsiijis/image/upload/v1713744010/wildRoots/437583841_1077254886710527_7048450739019885853_n-1_uzbjzk.jpg"
          alt="Aerial photo of Vashon Island"
        />
        <span>Photo credit: Maisie Starr</span>
      </div>

      <h3 className={styles.aboutTitle}>Meet the Owner</h3>
      <hr />
      <div className={styles.aboutTextContainer}>
        <p>
          Hi! I am Claudia, founder of Wild Roots Farm and Garden and our
          recently established Wild Roots Kitchen. I have an over 30 year
          Culinary background that includes Farm to Table Foods and Artisan
          Baked Goods. I started my career in the San Francisco Bay Area in the
          early '90s as a Baker and Personal Chef and then moved to Portland in
          2003 to purchase a 20 acre farm and establish my Catering Company and
          Farm. My family moved to Vashon in 2012, and I have been building Wild
          Roots Farm and Kitchen ever since. I love to grow our own foods, make
          healthy delicious meals and offer fresh, local produce to the Vashon
          Community
        </p>
      </div>
      <hr />
    </div>
  );
}

export default About;
