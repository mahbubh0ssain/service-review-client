import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Table from "react-bootstrap/Table";
import ReviewTable from "./ReviewTable";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
        } else {
          console.log("Reviews not found");
        }
      });
  }, [user?.email]);

  return (
    <div className="container my-5">
      <h4 className="text-center mb-3">My Reviews</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service name</th>
            <th>Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewTable key={review._id} review={review}></ReviewTable>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyReviews;
