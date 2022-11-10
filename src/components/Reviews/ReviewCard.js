import React from "react";
import Card from "react-bootstrap/Card";

const ReviewCard = ({ review }) => {
  const { userName, userImg, reviewTxt, currentDate } = review;
  console.log(userName, userImg);
  return (
    <div>
      <Card border="primary my-3">
        <Card.Header className="d-flex justify-content-between">
          <div>
            <img
              style={{ width: "30px" }}
              className="img-fluid rounded-circle me-2"
              src={
                userImg
                  ? userImg
                  : "https://i.ibb.co/dj97vpb/Profile-avatar-placeholder-large.png"
              }
              alt="User Img"
            />
            {userName}
          </div>

          <div>
            <small>{currentDate}</small>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p> {reviewTxt}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
