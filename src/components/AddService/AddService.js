import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useTitle } from "../../Hooks/UseTitle/UseTitle";

const MySwal = withReactContent(Swal);

const AddService = () => {
  useTitle("Add Service");
  const [service, setService] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("http://localhost:5000/add-service", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successfully added.",
          });
          form.reset();
          navigate("/services");
        } else {
          Swal.fire({
            icon: "success",
            title: "can not add new service..",
          });
        }
      });
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
