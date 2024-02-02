import styles from "./header.module.scss";
import { Image } from "antd";
const Header = () => {
  return (
    <div className={styles.header_section}>
      <div>
        <Image preview={false} src="/assets/images/logo.svg" />
      </div>
      <div></div>
      <div className={styles.profile_setting}>
        <img preview={false} src="/assets/images/bell-icon.svg" />
        <img preview={false} src="/assets/images/chat-icon.svg" />
        <img preview={false} src="/assets/images/add-icon.svg" />
        <img preview={false} src="/assets/images/profile.svg" />
      </div>
    </div>
  );
};

export default Header;
