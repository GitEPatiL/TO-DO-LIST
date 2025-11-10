// src/components/CTASection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function CtaSection() {
  const red = '#FF4D5A';
  const heading = '#111';

  return (
    <section style={{ padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center g-4">
          {/* Left: Image */}
          <Col lg={6}>
            <img
              src="https://images.hdqwalls.com/download/2022-doctor-strange-in-the-multiverse-of-madness-scarlet-witch-4k-aw-2560x1700.jpg"
              alt="Its Wanda"
              style={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 6,
              }}
            />
          </Col>

          {/* Right: Text + CTAs */}
          <Col lg={6}>
            <h2
              className="fw-bold"
              style={{ color: heading, fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: 1.1 }}
            >
              Start Organizing Your
              <br />
              Life Today
            </h2>

            <p className="mt-3 mb-4" style={{ maxWidth: 560 }}>
              Join us now and transform your productivity with our intuitive to-do list platform!
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Button
                size="lg"
                style={{
                  background: red,
                  borderColor: red,
                  paddingInline: 28,
                }}
              >
                Sign Up
              </Button>

              <Button
                size="lg"
                variant="outline-danger"
                style={{
                  borderColor: red,
                  color: red,
                  paddingInline: 28,
                  background: 'transparent',
                }}
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
