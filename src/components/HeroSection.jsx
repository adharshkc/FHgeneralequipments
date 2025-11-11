import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

export default function HeroSection() {
  // Use import.meta.env.BASE_URL — works in Vite, CRA, and GitHub Pages
  const baseURL = import.meta.env.BASE_URL || process.env.PUBLIC_URL || "";

  return (
    <Container fluid className="p-0">
      <Carousel fade interval={4000} className="hero-carousel">

        {/* ===== First Slide ===== */}
        <Carousel.Item>
          <div
            className="hero-slide-bg d-flex align-items-start text-center text-white"
            style={{
              backgroundImage: `url(${baseURL}images/Bannerofheroslide.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
            }}
          >
            <Row className="align-items-center text-md-start mt-5 p-5 ms-2 w-100 mb-4">
              <Col md={4} className="text-start ms-4">
                <div className="p-1">
                  <h1 className="fw-bold mb-3">
                    Innovation Meets <br /> Excellence
                  </h1>
                  <p className="mb-4 fs-5">
                    Delivering next-generation technology for a smarter, safer tomorrow.
                  </p>
                  <Button variant="light" className="custom-btn">
                    Learn More
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

        {/* ===== Second Slide ===== */}
        <Carousel.Item>
          <div
            className="hero-slide-bg d-flex align-items-start text-center text-dark"
            style={{
              backgroundImage: `url(${baseURL}images/frames/fhEquipmentsBanner.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
            }}
          >
            <Row className="align-items-center text-md-start mt-5 p-5 ms-2 w-100 mb-4">
              <Col md={4} className="text-start ms-4">
                <div className="p-1">
                  <h1 className="fw-bold mb-3">
                    Precision & <br /> Performance
                  </h1>
                  <p className="mb-4 fs-5">
                    Trusted equipment engineered to power professional solutions.
                  </p>
                  <Button variant="light" className="custom-btn">
                    Learn More
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

      </Carousel>
    </Container>
  );
}
