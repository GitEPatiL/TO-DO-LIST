import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const colors = {
  bg: '#F6F6FA',        
  heading: '#1C1B4B',    
  text: '#6B7280',        
  red: '#FF4D5A'         
};

export default function Title() {
  return (
    <section style={{ background: colors.bg }} className=''>
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="fw-bold display-5" style={{ color: colors.heading, lineHeight: 1.15 }}>
              Simplify Your Life with Our
              <br />
              Todo App
            </h1>

            <p className="mt-3 mb-4" style={{ color: colors.text,fontSize:'20px' }}>
              Stay organized and boost your productivity with our intuitive todo website.
              Experience a modern approach to task management that fits your lifestyle.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                size="lg"
                style={{
                  background: colors.red,
                  borderColor: colors.red,
                  paddingInline: '28px',
                  borderRadius: '999px',
                  fontWeight: 600
                }}
              >
                Get started
              </Button>

              <Button
                size="lg"
                variant="outline-danger"
                style={{
                  color: colors.red,
                  borderColor: colors.red,
                  paddingInline: '28px',
                  borderRadius: '999px',
                  background: 'transparent',
                  fontWeight: 600
                }}
              >
                Learn more
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
