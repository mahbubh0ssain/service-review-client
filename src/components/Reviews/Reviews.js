import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
const Reviews = ({ _id }) => {
  const [refresh, setRefresh] = useState(false);
  const [reviews, setReviews] = useState([]);

  console.log(reviews);
  
  useEffect(() => {
    fetch(`http://localhost:5000/reiews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        setRefresh(!refresh);
        console.log(data.data);
      });
  }, [refresh, _id]);

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
