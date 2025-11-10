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
          {/* Card 1 */}
          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
                padding: '30px 20px'
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFE6E8',
                  borderRadius: '12px',
                  padding: '15px'
                }}
              >
                <FaMobileAlt size={36} color="#FF4D5A" />
              </div>

              <h5 className="mt-4 mb-2 fw-bold" style={{ color: '#0C1330' }}>
                User-Friendly Interface
              </h5>
              <div
                style={{
                  width: '60px',
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

          {/* Card 2 */}
          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
                padding: '30px 20px'
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFE6E8',
                  borderRadius: '12px',
                  padding: '15px'
                }}
              >
                <FaPaperPlane size={36} color="#FF4D5A" />
              </div>

              <h5 className="mt-4 mb-2 fw-bold" style={{ color: '#0C1330' }}>
                Quick Task Sharing
              </h5>
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#FF4D5A',
                  borderRadius: '10px',
                  margin: '8px auto'
                }}
              ></div>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
                Share and delegate your tasks instantly with your teammates.
              </p>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
                padding: '30px 20px'
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFE6E8',
                  borderRadius: '12px',
                  padding: '15px'
                }}
              >
                <FaUsers size={36} color="#FF4D5A" />
              </div>

              <h5 className="mt-4 mb-2 fw-bold" style={{ color: '#0C1330' }}>
                Team Collaboration
              </h5>
              <div
                style={{
                  width: '60px',
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

          {/* Card 4 */}
          <Col md={6} lg={3} className="mb-4">
            <Card
              style={{
                border: 'none',
                borderRadius: '15px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
                padding: '30px 20px'
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFE6E8',
                  borderRadius: '12px',
                  padding: '15px'
                }}
              >
                <FaListAlt size={36} color="#FF4D5A" />
              </div>

              <h5 className="mt-4 mb-2 fw-bold" style={{ color: '#0C1330' }}>
                Access Anywhere
              </h5>
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#FF4D5A',
                  borderRadius: '10px',
                  margin: '8px auto'
                }}
              ></div>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
                Manage your to-do list easily from any device, anywhere, anytime.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
