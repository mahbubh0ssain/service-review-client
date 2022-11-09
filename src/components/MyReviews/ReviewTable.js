import React from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const ReviewTable = ({ review }) => {
  const { serviceName, reviewTxt, _id } = review;

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/delete/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.data.acknowledged) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Review has been deleted.",
                  "success"
                );
              } else {
                console.log(data);
              }
            });
        }
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
        <Button onClick={() => handleDelete(_id)} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReviewTable;
