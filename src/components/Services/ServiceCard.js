import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const ServiceCard = ({ service }) => {
  const { title, img, price, description, _id } = service;
  return (
    <Col>
      <Card className="h-100">
        <PhotoProvider>
          <PhotoView src={img}>
            <img style={{ height: "250px" }} src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Text>
            {description?.length > 95
              ? description.slice(0, 95) + " ..."
              : description}
          </Card.Text>
          <Link to={`/services/${_id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
