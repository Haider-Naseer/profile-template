import styles from "./profile-cover.module.scss";
const ProfileCover = () => {
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
        <button>
          <img src={"/assets/images/edit-icon.svg"} />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCover;
