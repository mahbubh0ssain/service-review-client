import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../../Hooks/UseTitle/UseTitle";
import { useState } from "react";

const Login = () => {
  useTitle("Login");
  const { loginUser, googleLogIn, githubLogin } = useContext(AuthContext);

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        const email = res.user.email;
        fetch("https://mr-plumber-server.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem("token", data.data);
            }
          });
        if (res.user.uid) {
          Swal.fire({
            icon: "success",
            title: "Signup successful.",
          });
          navigate(from, { replace: true });
          form.reset();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
        });
      });
  };

  const loginGoogle = () => {
    googleLogIn()
      .then((res) => {
        const email = res.user.email;
        fetch("https://mr-plumber-server.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem("token", data.data);
            }
          });

        if (res.user.uid) {
          Swal.fire({
            icon: "success",
            title: "Signup successful.",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
        });
      });
  };

  const loginGithub = () => {
    githubLogin()
      .then((res) => {
        const email = res.user.email;
        fetch("https://mr-plumber-server.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem("token", data.data);
            }
          });
        if (res.user.uid) {
          Swal.fire({
            icon: "success",
            title: "Signup successful.",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
        });
      });
  };

  const isChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div
      className="min-vh-100 justify-content-center align-items-center d-flex"
      style={{ minHeight: "77vh" }}
    >
      <div
        className="container p-5 shadow my-5 rounded-4"
        style={{ maxWidth: "560px" }}
      >
        <h1 className="text-center">Log in</h1>
        <Form onSubmit={handleSubmit} className="container ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              required
              type="checkbox"
              onClick={isChecked}
              label="Check me out"
            />
          </Form.Group>
          <Button
            disabled={!checked}
            className="w-100"
            variant="primary"
            type="submit"
          >
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
            <Button
              onClick={loginGoogle}
              className="w-100"
              variant="outline-primary"
            >
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
            <Button
              onClick={loginGithub}
              className="w-100"
              variant="outline-secondary"
            >
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
    </div>
  );
};

export default Login;
