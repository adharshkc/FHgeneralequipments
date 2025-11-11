import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";
import "./Featureproducts.css";

const products = [
  {
    name: "First Aid Cart",
    code: "FHR-ET07",
    img: "/images/featureproducts/featureproduct1.jpg",
  },
  {
    name: "Electric Operating Table",
    code: "OTE-4",
    img: "/images/featureproducts/featureproduct2.jpg",
  },
  {
    name: "Three Function Dialysis Chair",
    code: "FHZ-E04",
    img: "/images/featureproducts/featureproduct3.jpg",
  },
  {
    name: "Overbed Table",
    code: "FHT01",
    img: "/images/featureproducts/featureproduct4.jpg",
  },
  {
    name: "Examination Couch",
    code: "FHZ-E06",
    img: "/images/featureproducts/featureproduct5.jpg",
  },
];


export default function FeatureProducts() {
  const settings = {
    dots: false,
  infinite: true, // ✅ makes the slider loop endlessly
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="feature-products-section py-5">
      <Container fluid className="px-5">
        <Row className="align-items-center mb-4">
          <Col>
            <h2 className="fw-bold mb-1 text-dark text-start">Feature Products</h2>
            <p className="text-muted fw-semibold text-start">
              Discover our featured products designed with precision and care.
            </p>
          </Col>
        </Row>

        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="feature-card text-center p-3">
              <div className="feature-image-wrapper">
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-fluid"
                />
              </div>
              <h6 className="fw-semibold mt-3">{product.name}</h6>
              <p className="text-muted small">{product.code}</p>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-4">
          <Button variant="dark" className="view-all-btn px-4 py-2">
            VIEW ALL
          </Button>
        </div>
      </Container>
    </section>
  );
}
