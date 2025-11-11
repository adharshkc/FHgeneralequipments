import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PartnerSection = () => {
 const partners = [
  { name: "AVEUS", logo: `/images/aveus.svg` },
  { name: "KUMHO TIRES", logo: `/images/kumho.svg` },
  { name: "ALCON", logo: `/images/alcon.svg` },
  { name: "SPAL", logo: `/images/spal.svg` },
  { name: "YAN MEDICAL", logo: `/images/yanmedical.svg` },
];


  return (
    <Container className="text-center my-5">
      <h3 className="fw-bold mb-4">Our Partners</h3>
      <Row className="justify-content-center align-items-center">
        {partners.map((partner, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="mb-4">
            <img
              src={partner.logo}
              alt={partner.name}
              className="img-fluid"
              style={{ maxHeight: "70px", objectFit: "contain" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PartnerSection;
