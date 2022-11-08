import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Reviews from "../Reviews/Reviews";
import ReviewForm from "../ReviewForm/ReviewForm";
import { useTitle } from "../../Hooks/UseTitle/UseTitle";

const ServiceandRivew = () => {
  useTitle("Services");
  const { data } = useLoaderData();
  const { name, img, price, description, _id } = data;
  return (
    <div className="container my-5">
      <Card>
        <Card.Img
          style={{ height: "550px" }}
          className="img-fluid"
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      <div>
        <ReviewForm name={name} _id={_id}></ReviewForm>
        <Reviews _id={_id}></Reviews>
      </div>
    </div>
  );
};

export default ServiceandRivew;
