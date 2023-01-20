import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ _id }) => {
  const [refresh, setRefresh] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://mr-plumber-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setReviews(data.data);
          setRefresh(!refresh);
        } else {
          console.log("Something went wrong");
        }
      });
  }, [refresh, _id]);

  return (
    <>
      {reviews?.map((review) => (
        <ReviewCard key={review?._id} review={review}></ReviewCard>
      ))}
    </>
  );
};

export default Reviews;
