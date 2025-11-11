import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { MapPin, Phone, Mail, User } from "lucide-react";
import "../../App.css";


import './product.css';


export default function Contact() {
  const contactDetails = [
    {
      icon: <MapPin size={40} color="#fff" />,
      title: "Address",
      text: "Lot 45 Brickdam, Stabroek Georgetown, Guyana, South America",
    },
    {
      icon: <Phone size={40} color="#fff" />,
      title: "Phone Number",
      text: "+86 15150227928",
    },
    {
      icon: <Mail size={40} color="#fff" />,
      title: "E-mail",
      text: "Leon@yanmedical.cn",
    },
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header text-center py-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">Home</p>
      </div>

      {/* Contact Info Cards */}
      <Container className="py-5">
        <Row className="g-4 justify-content-center">
          {contactDetails.map((item, index) => (
            <Col md={4} sm={6} key={index} className="d-flex">
              <Card className="contact-card  border-1 text-center p-4 flex-fill d-flex flex-column justify-content-center">
                <div className="icon-box mx-auto mb-3">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted mb-0">{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Get in Touch Section */}
      <Container className="py-5">
        <Row className="align-items-center g-4">
          {/* Contact Form */}
          <Col md={6}>
            <div className="p-4 rounded-4 bg-light shadow-sm">
              <h3 className="fw-bolder mb-3">Get In Touch</h3>
              <p className="text-muted mb-4">
                Your email address is safe with us. 
              </p>

              <Form>
                <Form.Group className="mb-3 position-relative">
                  <User className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} size={20} />
                  <Form.Control type="text" placeholder="Your Name" style={{ paddingLeft: '40px' }} />
                </Form.Group>

                <Form.Group className="mb-3 position-relative">
                  <Mail className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} size={20} />
                  <Form.Control type="email" placeholder="Email Address" required style={{ paddingLeft: '40px' }} />
                </Form.Group>

                <Form.Group className="mb-3 position-relative">
                  <Phone className="position-absolute text-muted" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} size={20} />
                  <Form.Control type="text" placeholder="Phone Number" style={{ paddingLeft: '40px' }} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write Your Message..."
                  />
                </Form.Group>

                {/* Send Message Button */}
                <Button variant="dark" className="px-4 py-2 rounded-3 custom-btn w-25" style={{ fontSize: "12px" }} >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Map Section */}
          <Col md={6}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.404249786726!2d-58.16169922517304!3d6.806268220631946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dbf29c1c2a2bfb1%3A0x8b2a99a9cfcd64f2!2sLot%2045%20Brickdam%2C%20Stabroek%2C%20Georgetown%2C%20Guyana!5e0!3m2!1sen!2sin!4v1730622451729!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
