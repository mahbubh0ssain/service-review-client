import React from "react";
import Button from "react-bootstrap/Button";


const ReviewTable = ({ review }) => {
  const { serviceName, reviewTxt, _id } = review;

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <tr>
      <td>1</td>
      <td className="fw-bold">{serviceName}</td>
      <td>
        {reviewTxt.length > 80 ? reviewTxt.slice(0, 80) + "..." : reviewTxt}
      </td>
      <td className="d-flex justify-content-around px-3 align-items-center">
        <Button className="me-2 " variant="primary">
          Edit
        </Button>
        <Button onClick={handleDelete} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReviewTable;
