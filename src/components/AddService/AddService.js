import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddService = () => {
  const [service, setService] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(service);
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);

  };

  return (
    <div>
      <div
        className="bg-light container rounded-3 p-4 my-5"
        style={{ "max-width": "768px" }}
      >
        <h3 className="text-center  text-dark">Add a service</h3>

        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark">Service Title</Form.Label>
              <Form.Control
                name="title"
                onBlur={handleChange}
                type="text"
                placeholder="service title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark">Service Image</Form.Label>
              <Form.Control
                name="img"
                onBlur={handleChange}
                type="text"
                placeholder="Image URL"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark">Service Price</Form.Label>
              <Form.Control
                name="price"
                onBlur={handleChange}
                type="text"
                placeholder="$..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark">Rating</Form.Label>
              <Form.Control
                name="ratings"
                onBlur={handleChange}
                type="text"
                placeholder="5/5"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-dark">Service description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                onBlur={handleChange}
                rows={3}
                placeholder="Service description..."
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
