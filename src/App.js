import "./App.css";
import { Row, Col } from "antd";
import Header from "./components/sections/header/Header";
import ProfileCover from "./components/sections/profile-cover/ProfileCover";
import About from "./components/sections/about/About";
import Gallery from "./components/sections/gallery/Gallery";
import CreatePost from "./components/sections/create-post/CreatePost";
import Post from "./components/sections/post/Post";
import Footer from "./components/sections/footer/Footer";

function App() {
  return (
    <div className="layout">
      <div className="container">
        <Header />
        <div className="sub_container">
          <ProfileCover />
          <Row gutter={[18, 0]}>
            <Col lg={8}>
              <About />
              <Gallery />
            </Col>
            <Col lg={16}>
              <CreatePost />
              <Post />
              <Footer />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
