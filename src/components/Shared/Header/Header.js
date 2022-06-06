import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../gadgetly.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="logo">
          <img src={logo} alt="brand name" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/manageInventory">
              Manage Inventory
            </Nav.Link> */}
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>

            {user && (
              <>
                <Nav.Link as={Link} to="/manageInventory">
                  Manage Inventory
                </Nav.Link>
                <Nav.Link as={Link} to="/addinventory">
                  Add Item
                </Nav.Link>
                <Nav.Link as={Link} to="/myitem">
                  My Item
                </Nav.Link>
              </>
            )}

            {user ? (
              <button
                className="btn btn-link text-secondary text-decoration-none"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
