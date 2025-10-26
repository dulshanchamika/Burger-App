import React, { useState, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { scroller } from "react-scroll"; 
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { itemCount } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  const handleNavClick = (target) => {
    if (location.pathname === "/") {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
        });
      }, 100); 
    }
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleNavClick("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("about")}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("menu")}>
                Menu
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("shop")}>Shop</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("blog")}>
                Feedbacks
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("contact")}>
                Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  {itemCount > 0 && (
                    <em className="roundpoint">{itemCount}</em>
                  )}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;