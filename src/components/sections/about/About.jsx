import { Row, Col } from "antd";
import styles from "./about.module.scss";
const About = () => {
  const listing = [
    { image: "location-icon.svg", name: "Yogyakarta, ID" },
    { image: "hear-icon.svg", name: "Single" },
    { image: "calendar-icon.svg", name: "Joined June 2012" },
    { image: "website-icon.svg", name: "dribble.com/fawait" },
    { image: "work.svg", name: "Working at Sebo Studio" },
  ];
  return (
    <div className={styles.about_container}>
      <h2>About</h2>
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam,
      </p>
      <Row className={styles.stats_section}>
        <Col lg={6} sm={6} xs={6}>
          <div className={`${styles.inner_container} ${styles.first_child}`}>
            <span>Post</span>
            <h2>1.3K</h2>
          </div>
        </Col>
        <Col lg={9} sm={9} xs={9}>
          <div className={styles.inner_container}>
            <span>Following</span>
            <h2>3,154</h2>
          </div>
        </Col>
        <Col lg={9} sm={9} xs={9}>
          <div className={`${styles.inner_container} ${styles.last_child}`}>
            <span>Followers</span>
            <h2>2,054</h2>
          </div>
        </Col>
      </Row>
      {listing?.map((item, index) => {
        return (
          <div className={styles.listing} key={index}>
            <img src={`/assets/images/${item?.image}`} />
            <span>{item?.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default About;
