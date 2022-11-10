import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ReviewForm = ({ title, _id }) => {
  const { user } = useContext(AuthContext);
  const [currentDate, setCurrentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewTxt = e.target.review.value;
    const userName = user?.displayName;
    const userImg = user?.photoURL;
    const userEmail = user?.email;
    const serviceId = _id;
    const serviceName = title;
    const review = {
      reviewTxt,
      userName,
      userImg,
      serviceId,
      userEmail,
      serviceName,
      currentDate,
    };

    fetch("https://mr-plumber-server.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Review added successfully",
          });
          e.target.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Can not add review.",
          });
        }
      });
  };
  const getCurrentDateString = () => {
    const date = new Date().getDate(); //current date
    const month = new Date().getMonth() + 1; //current month
    const year = new Date().getFullYear(); //current year
    const hours = new Date().getHours(); //current hours
    const min = new Date().getMinutes(); //current minutes

    let amOrpm = "";
    if (hours > 12 || hours === 12) {
      amOrpm = "PM";
    } else {
      amOrpm = "AM";
    }
    return (
      date +
      "/" +
      month +
      "/" +
      year +
      "       " +
      "at " +
      hours +
      ":" +
      min +
      "" +
      amOrpm
    );
  };

  return (
    <>
      {user ? (
        <Form
          style={{ maxWidth: "768px" }}
          onSubmit={handleSubmit}
          className="p-4 my-4 mx-auto bg-light rounded"
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h4>Add a review for {title} </h4>
            </Form.Label>
            <Form.Control
              name="review"
              as="textarea"
              rows={3}
              placeholder="Write here..."
            />
          </Form.Group>
          <Button
            onClick={() => setCurrentDate(getCurrentDateString())}
            as="input"
            type="submit"
            value="Submit Review"
          />
        </Form>
      ) : (
        <h4 className="text-center my-5">
          You are not logged in yet. Please <Link to="/login">Login</Link> to
          add a review.
        </h4>
      )}
    </>
  );
};

export default ReviewForm;
