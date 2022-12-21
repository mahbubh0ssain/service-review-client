import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const GetInTouch = () => {
  return (
    <div className="shadow rounded-3 p-4">
      <h3 className="text-center  text-white">Get in touch</h3>
      <div className="row row-cols-1 row-cols-md-2">
        <div className=" d-flex justify-content-center align-items-center">
          <img
            className="img-fluid"
            src="https://i.ibb.co/THrXXSs/support-img-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control type="email" placeholder="John Doe " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-white">Message</Form.Label>
              <Form.Control
                placeholder="Lorem ipsum dolor sit amet."
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button
              className="w-100 fw-bold bg-primary text-white"
              variant="light"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
