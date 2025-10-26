import React, { useContext } from "react"; 
import { Col, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

function Cards({ item, renderRatingIcons }) {
  const { addToCart, toggleWishlist, wishlistItems } = useContext(CartContext);
  const { image, rating, title, paragraph, price } = item;

  const isItemWishlisted = wishlistItems.find(
    (wItem) => wItem.id === item.id
  );

  const handleWishlistClick = (e) => {
    e.preventDefault();
    toggleWishlist(item); 
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <a href="#!" onClick={handleWishlistClick}>
                <i
                  className={`bi ${
                    isItemWishlisted ? "bi-heart-fill" : "bi-heart" 
                  }`}
                ></i>
              </a>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">Rs. {price}/=</h5>
            </div>
            <div className="add_to_card">
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(item);
                }}
              >
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;