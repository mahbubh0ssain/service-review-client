import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Signup = () => {
  const [btnChecked, setBtnChecked] = useState(false);
  const { signUpUser } = useContext(AuthContext);

  const handleCheck = (e) => {
    setBtnChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUpUser(email, password)
      .then((res) => {
        if (res.user.uid) {
          Swal.fire({
            icon: "success",
            title: "Signup successful.",
          });
        }
        console.log(res.user);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
  
  return (
    <div
      className="container p-5 shadow my-5 rounded-4"
      style={{ "max-width": "560px" }}
    >
      <h4 className="text-center">Sign up now</h4>
      <Form onSubmit={handleSubmit} className="container ">
        <Form.Group className="mb-3">
          <Form.Label>Your name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            onClick={handleCheck}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button
          disabled={!btnChecked}
          className="w-100"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <p className="text-center my-2">
        Already have an account?
        <Link to="/login" className=" fw-bold ms-2">
          Login
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

export default Signup;
