import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ServiceandRivew = () => {
  const { data } = useLoaderData();
  const { name, img, price, description, _id } = data;
  console.log(data);
  return (
    <div className="container my-5">
      <Card>
        <Card.Img className="img-fluid" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceandRivew;
