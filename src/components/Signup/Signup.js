import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../../Hooks/UseTitle/UseTitle";

const Signup = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("Sign up");
  const [btnChecked, setBtnChecked] = useState(false);
  const { signUpUser, googleLogIn, githubLogin, profileUpdate } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleCheck = (e) => {
    setBtnChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUpUser(email, password)
      .then((res) => {
        const email = res?.user?.email;
        fetch(`${process.env.REACT_APP_URL}/saveUser/${email}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data?.result, data?.token);
            if (data?.result?.acknowledged) {
              localStorage.setItem("token", data?.token);
            }
          });

        if (res.user.uid) {
          const photoURL = res.user.photoURL;
          const profile = { displayName, photoURL };
          profileUpdate(profile)
            .then(() => {})
            .catch(() => {});
          Swal.fire({
            icon: "success",
            title: "Signup successful.",
          });
          navigate("/");
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

  return (
    <div className="min-vh-100 justify-content-center align-items-center d-flex">
      <div
        className="container p-5 shadow my-5 rounded-4"
        style={{ maxWidth: "560px" }}
      >
        <h1 className="text-center">Sign up</h1>
        <Form onSubmit={handleSubmit} className="container ">
          <Form.Group className="mb-3">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
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

export default Signup;
