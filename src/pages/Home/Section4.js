import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section id="promotion" className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Our burgers are crafted to delight every taste bud — juicy patties, melted cheese,
                fresh veggies, and soft, toasted buns. Perfect for sharing and enjoying with family
                and friends.
              </p>
              <ul>
                <li>
                  <p>
                    Fresh, high-quality ingredients in every burger we make.
                  </p>
                </li>
                <li>
                  <p>Unique flavors and combinations that excite your palate.</p>
                </li>
                <li>
                  <p>
                    Quick and friendly service to make every meal memorable.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
