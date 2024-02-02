import styles from "./create-post.module.scss";
const CreatePost = () => {
  return (
    <div className={styles.create_post_container}>
      <div className={styles.input_post}>
        <img src={"/assets/images/profile.svg"} />
        <input placeholder=" post something..." />
      </div>
      <img src={"/assets/images/gallery-icon.svg"} />
    </div>
  );
};

export default CreatePost;
