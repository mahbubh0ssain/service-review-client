import React from "react";
import Card from "react-bootstrap/Card";

const ReviewCard = ({ review }) => {
  const { name, img, reviewTxt, currentDate } = review;
  return (
    <div>
      <Card border="primary my-3">
        <Card.Header>
          <img
            style={{ width: "30px" }}
            className="img-fluid rounded-circle"
            src={
              img
                ? img
                : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
            }
            alt=""
          />{" "}
          {name}
        </Card.Header>
        <Card.Body>
          <Card.Text>{reviewTxt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
