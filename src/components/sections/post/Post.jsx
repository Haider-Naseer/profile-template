import styles from "./post.module.scss";
import { Row, Col, Image } from "antd";
import DisplayPost from "../../reuseable/DisplayPost";
const Post = () => {
  return (
    <>
      <DisplayPost>
        <div className={styles.content_container}>
          <p>Peace On Earth A Wonderful Wish But No Way</p>
        </div>
      </DisplayPost>
      <DisplayPost>
        <div className={styles.content_container}>
          <p>
            One of the perks of working in an international company is sharing
            knowledge with your colleagues.{" "}
          </p>
          <Row gutter={[15, 15]}>
            <Col lg={12} sm={24} xs={24}>
              <Image src={"/assets/images/upload-profile-03.svg"} />
            </Col>
            <Col lg={12} className={styles.side_images}>
              <Image
                src={"/assets/images/upload-profile-01.svg"}
                className={styles.first_child}
              />
              <Image src={"/assets/images/upload-profile-02.svg"} />
            </Col>
          </Row>
        </div>
      </DisplayPost>
    </>
  );
};

export default Post;
