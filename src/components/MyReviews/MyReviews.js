import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Table from "react-bootstrap/Table";
import ReviewTable from "./ReviewTable";
import RingLoader from "react-spinners/RingLoader";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    fetch(
      `https://mr-plumber-server.vercel.app/my-reviews?email=${user?.email}`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length) {
          setReviews(data?.data);
          setRefresh(!refresh);
        } else {
          console.log("No reviews found");
        }
      });
  }, [user?.email, refresh]);

  if (refresh) {
    <div className=" container my-5 d-flex align-items-center justify-content-center">
      <RingLoader color="#36d7b7" speedMultiplier={2} />
    </div>;
  }

  return (
    <div style={{ minHeight: "74vh" }} className="container my-5">
      {reviews?.length ? (
        <>
          <h4 className="text-center mb-3">My Reviews</h4>
          <Table bordered>
            <thead>
              <tr>
                <th>Service name</th>
                <th>Added at</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <ReviewTable
                  key={review._id}
                  review={review}
                  refresh={refresh}
                  setRefresh={setRefresh}
                ></ReviewTable>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <h3 className="mb-0 d-flex align-items-center justify-content-center">
            No review
          </h3>
        </>
      )}
    </div>
  );
};

export default MyReviews;
