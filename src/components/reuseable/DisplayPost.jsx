import { Row, Col } from "antd";
import styles from "./display-post.module.scss";
const DisplayPost = ({ children }) => {
  const listing = [
    { image: "message.svg", text: "7 Comments" },
    { image: "heart-icon.svg", text: "12 Likes" },
    { image: "share-icon.svg", text: "0 Share" },
  ];
  return (
    <div className={styles.display_post_container}>
      <Row className={styles.sub_container}>
        <Row className={styles.header_container}>
          <Col lg={16} className={styles.header}>
            <img src={"/assets/images/profile.svg"} />
            <div>
              <h2>Ahmad Nur Fawaid</h2>
              <span>12 April at 09.28 PM</span>
            </div>
          </Col>
          <Col lg={8}></Col>
        </Row>
        {children}
        <div className={styles.action_container}>
          {listing?.map((item, index) => {
            return (
              <div className={styles.action} key={index}>
                <img src={`/assets/images/${item?.image}`} />
                <span>{item?.text}</span>
              </div>
            );
          })}
        </div>
      </Row>
      <Row className={styles.footer}>
        <Col lg={2} sm={2} xs={2} className={styles.input_post}>
          <img src={"/assets/images/profile.svg"} />
        </Col>
        <Col lg={22} sm={20} xs={20} className={styles.create_post}>
          <input placeholder="Write your comment ..." />
          <img src={"/assets/images/attachment.svg"} />
          <img src={"/assets/images/emoji.svg"} />
          <img src={"/assets/images/gallery.svg"} />
        </Col>
      </Row>
    </div>
  );
};

export default DisplayPost;
