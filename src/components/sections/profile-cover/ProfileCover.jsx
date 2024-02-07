import styles from "./profile-cover.module.scss";
import { Dropdown } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ProfileCover = () => {
  const items = [
    {
      key: "1",
      label: <span> Edit Profile</span>,
      icon: <EditOutlined />,
    },
  ];

  return (
    <div className={styles.profile_container}>
      <img
        preview={false}
        className={styles.hero_image}
        src="/assets/images/hero-banner.svg"
      />
      <div className={styles.profile_detail}>
        <div className={styles.detail}>
          <img src={"/assets/images/hero_profile.svg"} />
          <div>
            <h1>Ahmad Nur Fawaid</h1>
            <span>@fawait</span>
          </div>
        </div>

        <div className={styles.mobile_menu}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()} className={styles.edit_icon}>
              <img src={"/assets/images/more_menu.png"} />
            </a>
          </Dropdown>
        </div>

        <div className={styles.web_menu}>
          <button>
            <img src={"/assets/images/edit-icon.svg"} />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;
