import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="container p-5 shadow my-5 rounded-4"
      style={{ "max-width": "560px" }}
    >
      <h4 className="text-center">Log in now</h4>
      <Form className="container ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center my-2">
        New to <span className="fw-bold"> Mr. Plumber?</span>
        <Link to="/signup" className=" fw-bold ms-2">
          Signup
        </Link>
      </p>
      <div className="mt-3 row row-cols-1 row-cols-md-1 row-cols-lg-2 mx-auto ">
        <div className=" mb-3">
          <Button className="w-100" variant="outline-primary">
            <img
              className="img-fluid me-2 "
              style={{ height: "30px", width: "30px" }}
              src="https://i.ibb.co/nCkjPRN/google.png"
              alt="..."
            />
            Sign in with Goggle
          </Button>
        </div>
        <div className=" mb-3">
          <Button className="w-100" variant="outline-secondary">
            <img
              className="img-fluid me-2"
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="..."
            />
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
