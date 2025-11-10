import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import GetStartedModal from './GetStartedModal';
import ThankYouModal from './ThankYouModal';

export default function HeroSection() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  function handleSuccess() {
    setShowFormModal(false);
    setShowThankYouModal(true);
  }

  return (
    <section
      style={{
        backgroundColor: '#F6F6FA',
        padding: '60px 0',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="mb-4 mb-lg-0">
            <div
              style={{
                backgroundColor: '#FF4D5A',
                color: 'white',
                padding: '60px 50px',
                borderRadius: '30px',
                height: '100%',
              }}
            >
              <h1
                style={{
                  fontSize: '70px',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  marginBottom: '30px',
                }}
              >
                Organize.
                <br />
                Achieve.
                <br />
                Relax.
              </h1>

              <p style={{ fontSize: '17px', maxWidth: '500px', marginBottom: '40px' }}>
                Turn clutter into clarity, chaos into control, and dreams into done.  
                Bold visions turned into market success.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Button
                  size="lg"
                  style={{
                    backgroundColor: 'white',
                    color: '#000',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: '500',
                    padding: '10px 25px',
                  }}
                  onClick={() => setShowFormModal(true)}
                >
                  Get Started Today
                </Button>

                <Button
                  size="lg"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: '50px',
                    fontWeight: '500',
                    padding: '10px 25px',
                  }}
                >
                  Discover Features
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="https://i.pinimg.com/originals/fb/69/85/fb6985c0b82347d53942d9989d8c42b4.png"
                alt="Person"
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  filter: 'brightness(90%)',
                }}
              />
              <div style={{ padding: '15px 25px' }}>
                <h5 style={{ fontWeight: '600', marginBottom: '0' }}>Freddie Halvorson</h5>
                <p style={{ margin: '0', color: '#666' }}>Chief Productivity Enthusiast</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <GetStartedModal show={showFormModal} onHide={() => setShowFormModal(false)} onSuccess={handleSuccess} />
      <ThankYouModal show={showThankYouModal} onHide={() => setShowThankYouModal(false)} />
    </section>
  );
}
