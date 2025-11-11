import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  const content = {
    story: {
      title: "Redefining Healthcare Convenience",
      text: `
       lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      `,
    },
    mission: {
      title: "Empowering Wellness for Every Individual",
      text: `
        Our mission at MediPlus is to make healthcare accessible and affordable for everyone.
        We aim to bridge the gap between patients and quality healthcare products by delivering
        trusted medicines and wellness essentials right to your doorstep.
      `,
    },
    vision: {
      title: "Shaping the Future of Healthcare",
      text: `
        Our vision is to revolutionize healthcare by becoming the leading online pharmacy,
        known for exceptional service, genuine products, and a commitment to improving lives globally.
      `,
    },
  };

  return (
    <Container fluid className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side Image */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <Image
              src="/images/about/about-hero.webp"
              alt="About image"
              fluid
              rounded
              className="w-100"
            />
          </Col>

          {/* Right Side Content */}
          <Col xs={12} md={6}>
            <div className="tabs mb-3">
              <span
                className={`tab ${activeTab === "story" ? "active" : ""}`}
                onClick={() => setActiveTab("story")}
              >
                OUR STORY
              </span>
              <span
                className={`tab ${activeTab === "mission" ? "active" : ""}`}
                onClick={() => setActiveTab("mission")}
              >
                OUR MISSION
              </span>
              <span
                className={`tab ${activeTab === "vision" ? "active" : ""}`}
                onClick={() => setActiveTab("vision")}
              >
                OUR VISION
              </span>
            </div>

            <h3 className="fw-bold mb-3">{content[activeTab].title}</h3>
            <p className="about-text">{content[activeTab].text}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
