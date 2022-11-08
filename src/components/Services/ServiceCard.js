import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { name, img, price, description, _id } = service;
  return (
    <Col>
      <Card>
        <Card.Img style={{ height: "250px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Text>
            {description.length > 100
              ? description.slice(0, 100) + " ..."
              : description}
          </Card.Text>
          <Link to={`/services/${_id}`}>
            <Button variant="primary">View details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
