import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "../App.css";
import "../appbar.css";
import { pageOne } from "./homeData";
import { title } from "./homeData";

function Banner() {
  return (
    <div style={{ height: "90vh", marginTop: "10px" }}>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={8}>
            <Carousel>
              {pageOne.map((item, index) => {
                return (
                  <Carousel.Item interval={2000}>
                    <Image
                      className="d-block w-100 carousel-image "
                      style={item.style}
                      src={item.imgSrc}
                      alt={item.name}
                      rounded
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>

        <div className="text-center ">
          <div className="d-flex justify-content-center">
            <h2
              className="display-5 mt-1 w-50"
              style={{
                color: "#06D001",
                width: "58% !important",
                backgroundColor: "rgb(16 21 33)",
                padding: "5px 0px",
                fontSize: "32px",
              }}
            >
              <span>
                <i className="bi bi-bag-heart-fill"></i>
                {title[0]}
              </span>
            </h2>
          </div>
          <div style={{}}>
            <p className="lead">{title[1]}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
