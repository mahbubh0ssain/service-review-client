import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Table from "react-bootstrap/Table";
import ReviewTable from "./ReviewTable";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
          setRefresh(!refresh);
        } else {
          console.log("Reviews not found");
        }
      });
  }, [user?.email, refresh]);

  return (
    <div
      style={{ "min-height": "26vh" }}
      className="container my-5 position-relative"
    >
      {reviews.length > 0 ? (
        <>
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
        </>
      ) : (
        <h3
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50% -50%)",
          }}
          className="text-center position-absolute"
        >
          No reviews were added yet.
        </h3>
      )}
    </div>
  );
};

export default MyReviews;
