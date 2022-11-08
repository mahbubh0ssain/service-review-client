import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const signOutUser = () => {
    userSignOut();
  };
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
            <Link className="me-3 text-decoration-none text-black" to="/blogs">
              Blogs
            </Link>
            {user?.email ? (
              <>
                <Link className="me-3 text-decoration-none text-black" to="">
                  My reviews
                </Link>
                <Link
                  className="me-3 text-decoration-none text-black"
                  to="/add-service"
                >
                  Add Service
                </Link>

                <img
                  className="img-fluid me-3 rounded-circle"
                  style={{ width: "34px" }}
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  alt=""
                />
                <div style={{ cursor: "pointer" }} onClick={signOutUser}>
                  <img
                    className="img-fluid"
                    style={{ width: "28px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_logOut-ltr.svg/2048px-OOjs_UI_icon_logOut-ltr.svg.png"
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <Link className="text-decoration-none text-black" to="/login">
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
