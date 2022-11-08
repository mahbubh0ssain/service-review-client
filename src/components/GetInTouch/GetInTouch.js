import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const GetInTouch = () => {
  return (
    <div className="bg-primary rounded-3 p-4">
      <h3 className="text-center  text-white">Get in touch</h3>
      <div className="row row-cols-1 row-cols-md-2">
        <div>
          <img
            className="img-fluid"
            src="https://png.pngitem.com/pimgs/s/316-3165497_plumbing-png-transparent-png.png"
            alt=""
          />
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Your name</Form.Label>
              <Form.Control type="email" placeholder="John Doe " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-white">Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="light">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
