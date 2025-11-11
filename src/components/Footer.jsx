import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-0 m-0">
      <Container>
        <Row className="gy-4 my-4">
          {/* Logo */}
          <Col md={3}>
            <div className="mb-3">
              <img
                src="/images/LogoGeneralEquipments.svg"
                alt="General Equipment Logo"
                style={{ width: "160px" }}
              />
            </div>

            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h6 className="fw-bold mb-3">Quick Link</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/product" className="footer-link">
                  Products
                </a>
              </li>
              <li>
                <a href="/blog" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Products */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Categories</h6>
            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>Hospital Bed</li>
                  <li>Exam Table</li>
                  <li>Operation Table</li>
                  <li>Operation Lamp</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled">
                  <li>Pendant</li>
                  <li>Stretcher</li>
                  <li>Medical Chair</li>
                  <li>Medical Trolley</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p className="mb-2">
              <FiPhone className="me-2" /> (323) 576-1942
            </p>
            <p className="mb-2">
              <FiMail className="me-2" /> info@fhgeneralequipment.com
            </p>
            <p className="mb-2">
              <FiMapPin className="me-2" />
              Lot 45 Brickdam, Stabroek Georgetown, Guyana, South America
            </p>
            <Button className="rounded-1 mt-3 custom-btn px-4 py-2">
              Get in Touch
            </Button>
          </Col>
        </Row>

        {/* <hr /> */}
        {/* <Row
          className="py-2 m-0 w-100"
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            fontSize: "0.9rem",
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
        >
          <Col md={6} className="text-center text-md-start">
            © {new Date().getFullYear()} FH General Equipment. All Rights
            Reserved.
          </Col>
          <Col md={6} className="text-center text-md-end">
            Designed and developed by{" "}
            <a
              href="https://blueweb2.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Blueweb2.com
            </a>
          </Col>
        </Row> */}
      </Container>
      <div fluid className="m-0 p-0 mb-0">
        <Row
          className="py-2 m-0 w-100"
          style={{
            backgroundColor: "#777777",
            color: "white",
            fontSize: "0.9rem",
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
        >
          <Col md={6} className="text-center text-md-start">
            © {new Date().getFullYear()} FH General Equipment. All Rights
            Reserved.
          </Col>
          <Col md={6} className="text-center text-md-end">
            Designed and developed by{" "}
            <a
              href="https://blueweb2.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Blueweb2.com
            </a>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
