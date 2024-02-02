import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <ul className={styles.first_child}>
        <li>Contact Us </li>
        <li>Terms of use </li>
        <li>Cookies Policy</li>
        <li>Help & Support </li>
      </ul>
      <ul>
        <li>Facebook</li>
        <li>Linkedin</li>
        <li>Instagram</li>
        <li>Youtube </li>
      </ul>
      <div className={styles.copy_write}>
        <ul>
          <li>Halal Networks © 2023. All rights reserved</li>
        </ul>
        <ul>
          <li>User Agreement</li>
          <li>Privacy Pplicy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
