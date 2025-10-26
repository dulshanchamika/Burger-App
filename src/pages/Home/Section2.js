import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Enjoy the authentic taste of our signature recipes, crafted with passion and a perfect blend of fresh ingredients for a flavor you won’t forget.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `We use only the finest, handpicked ingredients to ensure every dish is fresh, flavorful, and made to perfection — because quality always comes first.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Hot, fresh, and right on time — our delivery team makes sure your favorite meals reach you fast, without ever compromising on taste or quality.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section id="about" className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Gather around and share the joy — our burgers are made to bring people closer
                with every bite. Fresh ingredients, rich flavors, and good company make the
                perfect meal.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
