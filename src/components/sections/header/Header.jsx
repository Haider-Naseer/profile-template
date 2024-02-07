import styles from "./header.module.scss";
import { Image, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
const Header = () => {
  const items = [
    {
      key: "1",
      label: <span>Notification</span>,
      icon: <img preview={false} src="/assets/images/bell-icon.svg" />,
    },
    {
      key: "2",
      label: <span>Message</span>,
      icon: <img preview={false} src="/assets/images/chat-icon.svg" />,
    },
    {
      key: "3",
      label: <span>Create</span>,
      icon: <img preview={false} src="/assets/images/add-icon.svg" />,
    },
    {
      key: "4",
      label: <span>Profile</span>,
      icon: <img preview={false} src="/assets/images/profile.svg" />,
    },
  ];

  return (
    <div className={styles.header_section}>
      <div>
        <Image preview={false} src="/assets/images/logo.svg" />
      </div>
      <div></div>
      <div className={styles.profile_setting}>
        <div className={styles.mobile_menu}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className={styles.profile_icon}
            >
              <UserOutlined />
            </a>
          </Dropdown>
        </div>

        <div className={styles.web_menu}>
          <img preview={false} src="/assets/images/bell-icon.svg" />
          <img preview={false} src="/assets/images/chat-icon.svg" />
          <img preview={false} src="/assets/images/add-icon.svg" />
          <img preview={false} src="/assets/images/profile.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
