import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section id="contact" className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Craving a burger? Get it fast! We promise delivery in 30 minutes, every time,
              so you can dig in while it’s still piping hot.
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: +94 70 123 4567
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
