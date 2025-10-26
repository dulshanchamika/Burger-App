import React, { useContext } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from "../../context/CartContext"; 

const heroBurger = {
  id: "hero-001",
  image: Burger,
  title: "New Burger",
  paragraph: "Juicy, flame-grilled perfection layered with rich melted cheese.",
  price: 599,
};

const Section1 = () => {
  const { addToCart } = useContext(CartContext); 
  const navigate = useNavigate(); 

  const handleOrderNow = () => {
    addToCart(heroBurger); 
    navigate("/cart"); 
  };

  return (
    <section id="home" className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">Rs.599/=</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Extra Cheese</h2>
              <p className="text-white pt-2 pb-4">
                Savor the taste of our new burger — juicy, flame-grilled
                perfection layered with rich melted cheese. Every bite bursts
                with flavor, making it the ultimate treat for true burger
LOvers.
              </p>
              <button className="btn order_now" onClick={handleOrderNow}>
                Order Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;