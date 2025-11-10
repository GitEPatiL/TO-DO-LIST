// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  const red = '#FF4D5A';
  const border = '#D9D9DE';

  return (
    <footer style={{ padding: '48px 0 0', background: '#fff' }}>
      <Container>
        <Row className="g-4">
          {/* Brand + newsletter */}
          <Col lg={6}>
            <div className="mb-3 d-flex align-items-center gap-3">
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: '#fff',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    border: `3px solid ${red}`,
                    transform: 'rotate(10deg)',
                    borderRadius: 2,
                  }}
                />
              </div>
              <h4 className="m-0">do List</h4>
            </div>

            <p style={{ maxWidth: 520 }}>
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>

            <div className="d-flex gap-2" style={{ maxWidth: 520 }}>
              <Form.Control type="email" placeholder="Your email here" />
              <Button style={{ background: red, borderColor: red, paddingInline: 20 }}>Join</Button>
            </div>

            <small className="text-muted d-block mt-2" style={{ maxWidth: 520 }}>
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </small>
          </Col>

          {/* Links */}
          <Col lg={2} md={4} sm={6}>
            <h6 className="fw-bold mb-3">Useful Links</h6>
            <ul className="list-unstyled m-0">
              <li><a href="/" className="text-reset text-decoration-none">Home Page</a></li>
              <li><a href="/" className="text-reset text-decoration-none">About Us</a></li>
              <li><a href="/" className="text-reset text-decoration-none">Contact Us</a></li>
              <li><a href="/" className="text-reset text-decoration-none">Blog Posts</a></li>
              <li><a href="/" className="text-reset text-decoration-none">FAQs</a></li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled m-0">
              <li><a href="/" className="text-reset text-decoration-none">Help Center</a></li>
              <li><a href="/" className="text-reset text-decoration-none">User Guide</a></li>
              <li><a href="/" className="text-reset text-decoration-none">Community Forum</a></li>
              <li><a href="/" className="text-reset text-decoration-none">Feedback</a></li>
              <li><a href="/" className="text-reset text-decoration-none">Support</a></li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <h6 className="fw-bold mb-3">Connect With Us</h6>
            <ul className="list-unstyled m-0">
              <li className="d-flex align-items-center gap-2 mb-2">
                <FaFacebookF color={red} /> <a href="/" className="text-reset text-decoration-none">Facebook</a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FaInstagram color={red} /> <a href="/" className="text-reset text-decoration-none">Instagram</a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FaXTwitter color={red} /> <a href="/" className="text-reset text-decoration-none">X</a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FaLinkedinIn color={red} /> <a href="/" className="text-reset text-decoration-none">LinkedIn</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaYoutube color={red} /> <a href="/" className="text-reset text-decoration-none">YouTube</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Divider */}
        <div style={{ borderTop: `1px solid ${border}`, marginTop: 32, marginBottom: 16 }} />

        {/* Bottom bar */}
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center mb-2 mb-md-0">
            <small className="text-muted">© 2024 Osumare. All rights reserved.</small>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-md-end justify-content-center gap-4">
              <a href="/" className="text-muted text-decoration-none">Privacy Policy</a>
              <a href="/" className="text-muted text-decoration-none">Terms of Service</a>
              <a href="/" className="text-muted text-decoration-none">Cookie Settings</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
