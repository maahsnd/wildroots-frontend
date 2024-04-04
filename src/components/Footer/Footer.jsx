import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h5>Wild Roots Farm and Kitchen</h5>
      <p>(503) 473-4349</p>
      <p>
        <a href="mailto:WildRootsKitchenVashon@gmail.com">
          WildRootsKitchenVashon@gmail.com
        </a>
      </p>
      <p>Vashon, WA, United States, Washington</p>

      <a href="https://www.facebook.com/profile.php?id=100064478480593">
        <img
          className={styles.facebookIcon}
          alt="Facebook"
          fetchpriority="high"
          src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Facebook.png"
        ></img>
      </a>
    </div>
  );
}

export default Footer;
