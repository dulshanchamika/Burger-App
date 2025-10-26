import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import { CartContext } from "../../context/CartContext";
import "../../styles/CartStyle.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice,

    wishlistItems,
    toggleWishlist,
    addToCart,
  } = useContext(CartContext);

  const handleMoveToCart = (item) => {
    addToCart(item);
    toggleWishlist(item); 
  };

  return (
    <Layout>
      <section className="cart_section">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2>My Cart</h2>
            </Col>
          </Row>
          <Row>
            {cartItems.length === 0 ? (
              <Col lg={12} className="text-center">
                <h4 className="text-white">Your cart is empty.</h4>
                <Link to="/" className="btn btn_red mt-3">
                  Shop Now
                </Link>
              </Col>
            ) : (
              <>
                <Col lg={8}>
                  {cartItems.map((item) => (
                    <Card key={item.id} className="cart-item mb-3">
                      <Row className="g-0">
                        <Col md={3}>
                          <Card.Img src={item.image} alt={item.title} />
                        </Col>
                        <Col md={9}>
                          <Card.Body>
                            <Row>
                              <Col md={6}>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Rs. {item.price}/=</Card.Text>
                              </Col>
                              <Col
                                md={6}
                                className="d-flex justify-content-md-end align-items-center"
                              >
                                <div className="quantity_controls">
                                  <Button
                                    variant="light"
                                    onClick={() => decrementQuantity(item.id)}
                                  >
                                    -
                                  </Button>
                                  <span className="mx-2">{item.quantity}</span>
                                  <Button
                                    variant="light"
                                    onClick={() => incrementQuantity(item.id)}
                                  >
                                    +
                                  </Button>
                                </div>
                                <Button
                                  variant="danger"
                                  className="ms-3"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <i className="bi bi-trash"></i>
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </Col>

                <Col lg={4}>
                  <Card className="order-summary">
                    <Card.Body>
                      <Card.Title>Order Summary</Card.Title>
                      <div className="d-flex justify-content-between my-3">
                        <span>Subtotal</span>
                        <span>Rs. {totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between my-3">
                        <span>Delivery Fee</span>
                        <span>Rs. 0.00</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between h5">
                        <strong>Total</strong>
                        <strong>Rs. {totalPrice.toFixed(2)}</strong>
                      </div>
                      <Button
                        variant="dark"
                        className="w-100 btn_red rounded-0"
                      >
                        Proceed to Checkout
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )}
          </Row>

          {wishlistItems.length > 0 && (
            <Row className="wishlist-section">
              <Col lg={12} className="text-center">
                <h3>My Wishlist</h3>
              </Col>
              <Col lg={8} className="mx-auto">
                {wishlistItems.map((item) => (
                  <Card key={item.id} className="cart-item mb-3">
                    <Row className="g-0">
                      <Col md={3}>
                        <Card.Img src={item.image} alt={item.title} />
                      </Col>
                      <Col md={9}>
                        <Card.Body>
                          <Row>
                            <Col md={6}>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text>Rs. {item.price}/=</Card.Text>
                            </Col>
                            <Col
                              md={6}
                              className="d-flex justify-content-md-end align-items-center"
                            >
                              <Button
                                variant="danger"
                                className="ms-3"
                                onClick={() => toggleWishlist(item)}
                              >
                                <i className="bi bi-trash"></i>
                              </Button>
                              <Button
                                variant="success"
                                className="ms-2"
                                onClick={() => handleMoveToCart(item)}
                              >
                                Add to Cart
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Layout>
  );
}

export default Cart;