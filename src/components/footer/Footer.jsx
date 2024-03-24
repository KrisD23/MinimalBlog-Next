import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>KD</div>
      <div className={styles.text}>
        KD creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
