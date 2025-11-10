import React, { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev === 1 ? 0 : prev + 1));
  const handlePrev = () => setIndex((prev) => (prev === 0 ? 1 : prev - 1));

  return (
    <section style={{ background: "#fff", padding: "80px 0" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#0C1330" }}>
            Customer Testimonials
          </h2>
          <p style={{ color: "#6B7280" }}>
            This tool has transformed my productivity and organization!
          </p>
        </div>

        {index === 0 && (
          <Row className="align-items-center justify-content-center">
            <Col md={7}>
              <div
                className="p-4 position-relative"
                style={{
                  border: "16px solid #ff3b5c",
                  borderRight :'none',
                  borderRadius: "6px",
                  
                  background: "#fff",
                }}
              >
                <p style={{ fontSize: "20px", fontWeight: 500,padding: "30px", }}>
                  "This website has made handling my daily tasks so simple and
                  smooth. I feel much more organized now!"
                </p>
                <div className="mt-4">
                  <strong>Pratiksha Wagh</strong>
                  <p className="mb-0 text-secondary">
                    Software Engineer, Pune
                  </p>
                </div>

                <div className="mt-4">
                  <Button
                    variant="outline-danger"
                    className="me-2 rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                    onClick={handlePrev}
                  >
                    ‹
                  </Button>
                  <Button
                    variant="danger"
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                    onClick={handleNext}
                  >
                    ›
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={4} className="mt-4 mt-md-0 text-center">
              <div
                style={{
                  border: "16px solid #ff3b5c",
                  borderLeft :'none',
                  marginLeft:'150px',
                  display: "inline-block",
                  padding: "5px",
                }}
              >
                <Image
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                  alt="Pratiksha Wagh"
                  rounded
                  style={{ width: "200px", maxWidth: "200px" }}
                />
              </div>
            </Col>
          </Row>
        )}

        {index === 1 && (
          <Row className="align-items-center justify-content-center">
            <Col md={7}>
              <div
                className="p-4 position-relative"
                style={{
                  border: "16px solid #ff3b5c",
                  borderRadius: "6px",
                  background: "#fff",
                }}
              >
                <p style={{ fontSize: "20px", fontWeight: 500 }}>
                  "The interface is clean and easy to use. Managing my work
                  schedule is now effortless and enjoyable."
                </p>
                <div className="mt-4">
                  <strong>Rohit Kadam</strong>
                  <p className="mb-0 text-secondary">UI Designer, Mumbai</p>
                </div>

                <div className="mt-4">
                  <Button
                    variant="outline-danger"
                    className="me-2 rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                    onClick={handlePrev}
                  >
                    ‹
                  </Button>
                  <Button
                    variant="danger"
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                    onClick={handleNext}
                  >
                    ›
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={4} className="mt-4 mt-md-0 text-center">
              <div
                style={{
                  border: "16px solid #ff3b5c",
                  display: "inline-block",
                  padding: "5px",
                }}
              >
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Rohit Kadam"
                  rounded
                  style={{ width: "100%", maxWidth: "300px" }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}
