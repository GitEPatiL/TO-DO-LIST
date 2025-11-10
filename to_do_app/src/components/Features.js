import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMobileAlt, FaPaperPlane, FaUsers, FaListAlt } from 'react-icons/fa';

export default function Features() {
  return (
    <section style={{ backgroundColor: '#F8F9FC', padding: '70px 0' }}>
      <Container>
        <h2
          className="text-center fw-bold mb-5"
          style={{ color: '#0C1330', fontSize: '32px' }}
        >
          Transform Your Productivity with Our <br />
          Innovative To-Do List Features
        </h2>

        <Row className="justify-content-center">
          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.07)',
                padding: '30px 25px',
                height: '100%',
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div
                  style={{
                    background: '#FFE6E8',
                    borderRadius: '12px',
                    padding: '15px',
                    display: 'inline-block',
                  }}
                >
                  <FaMobileAlt size={36} color="#FF4D5A" />
                </div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'rgba(0,0,0,0.05)' }}>01</div>
              </div>

              <h5 className="mb-2 fw-bold" style={{ color: '#0C1330' }}>
                User-Friendly Interface
              </h5>
              <div
                style={{
                  width: '50px',
                  height: '4px',
                  backgroundColor: '#FF4D5A',
                  borderRadius: '10px',
                  margin: '8px auto'
                }}
              ></div>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
                Our platform offers seamless task management to boost your efficiency.
              </p>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.07)',
                padding: '30px 25px',
                height: '100%',
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div
                  style={{
                    background: '#FFE6E8',
                    borderRadius: '12px',
                    padding: '15px',
                    display: 'inline-block',
                  }}
                >
                  <FaPaperPlane size={36} color="#FF4D5A" />
                </div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'rgba(0,0,0,0.05)' }}>02</div>
              </div>

              <h5 className="mb-2 fw-bold" style={{ color: '#0C1330' }}>
                Collaborate & Share
              </h5>
              <div
                style={{
                  width: '50px',
                  height: '4px',
                  backgroundColor: '#FF4D5A',
                  borderRadius: '10px',
                  margin: '8px auto'
                }}
              ></div>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
                Invite team members to work together and achieve your goals faster.
              </p>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.07)',
                padding: '30px 25px',
                height: '100%',
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div
                  style={{
                    background: '#FFE6E8',
                    borderRadius: '12px',
                    padding: '15px',
                    display: 'inline-block',
                  }}
                >
                  <FaUsers size={36} color="#FF4D5A" />
                </div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'rgba(0,0,0,0.05)' }}>03</div>
              </div>

              <h5 className="mb-2 fw-bold" style={{ color: '#0C1330' }}>
                Effortless Collaboration
              </h5>
              <div
                style={{
                  width: '50px',
                  height: '4px',
                  backgroundColor: '#FF4D5A',
                  borderRadius: '10px',
                  margin: '8px auto'
                }}
              ></div>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
                Collaborate with your team members to achieve your project goals faster.
              </p>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.07)',
                padding: '30px 25px',
                height: '100%',
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div
                  style={{
                    background: '#FFE6E8',
                    borderRadius: '12px',
                    padding: '15px',
                    display: 'inline-block',
                  }}
                >
                  <FaListAlt size={36} color="#FF4D5A" />
                </div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'rgba(0,0,0,0.05)' }}>04</div>
              </div>

              <h5 className="mb-2 fw-bold" style={{ color: '#0C1330' }}>
                Steamless Access
              </h5>
              <div
                style={{
                  width: '50px',
                  height: '4px',
                  backgroundColor: '#FF4D5A',
                  borderRadius: '10px',
                  margin: '8px auto'
                }}
              ></div>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
                Stay Connected and Manage your tasks on go with ease
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
