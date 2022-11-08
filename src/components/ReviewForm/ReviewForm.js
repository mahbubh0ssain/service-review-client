import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ReviewForm = ({ name }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    console.log(review);
  };

  return (
    <>
      {" "}
      {user ? (
        <Form
          style={{ "max-width": "768px" }}
          onSubmit={handleSubmit}
          className="p-4 my-4 mx-auto bg-light rounded"
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h4>Add a review for {name} </h4>
            </Form.Label>
            <Form.Control
              name="review"
              as="textarea"
              rows={3}
              placeholder="Write here..."
            />
          </Form.Group>
          <Button as="input" type="submit" value="Submit Review" />
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
