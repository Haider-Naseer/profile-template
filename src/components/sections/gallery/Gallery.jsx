import styles from "./gallery.module.scss";
import { Row, Col, Image } from "antd";
const Gallery = () => {
  const Gallery = [
    { image: "photo-01.svg" },
    { image: "photo-02.svg" },
    { image: "photo-03.svg" },
    { image: "photo-04.svg" },
  ];
  return (
    <div className={styles.gallery_container}>
      <div className={styles.heading}>
        <h2>Photo</h2>
        <span>View all</span>
      </div>
      <Row gutter={[10, 10]}>
        {Gallery?.map((item) => {
          return (
            <Col lg={12}>
              <Image src={`/assets/images/${item?.image}`} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Gallery;
