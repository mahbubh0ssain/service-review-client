import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-black">
            <img
              className="img-fluid rounded-circle me-3"
              style={{ height: "50px" }}
              src="https://png.pngitem.com/pimgs/s/316-3165497_plumbing-png-transparent-png.png"
              alt=""
            />
            Mr. Plumber
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <Link className="me-3 text-decoration-none text-black" to="/">
              Home
            </Link>
            <Link className="me-3 text-decoration-none text-black" to="">
              Blogs
            </Link>
            <Link className="me-3 text-decoration-none text-black" to="">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
