import React, { useEffect, useState } from "react";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/my-reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>This is user review section.</div>;
};

export default MyReviews;
