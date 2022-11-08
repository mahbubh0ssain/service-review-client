import React from "react";
import Card from "react-bootstrap/Card";
const Reviews = () => {
  return (
    <Card border="primary my-3">
      <Card.Header>
        <img
          style={{ width: "30px" }}
          className="img-fluid rounded-circle"
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
          alt=""
        />{" "}
        Mahbub Hossain
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Reviews;
