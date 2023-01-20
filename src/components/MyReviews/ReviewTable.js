import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ReviewTable = ({ review, refresh, setRefresh }) => {
  const { serviceName, currentDate, reviewTxt, _id } = review;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewTxt = e.target.review.value;
    fetch(`https://mr-plumber-server.vercel.app/update/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ reviewTxt }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Successfully updated.",
          });
          setShow(false);
          setRefresh(!refresh);
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
          });
        }
      });
  };

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
          fetch(`https://mr-plumber-server.vercel.app/delete/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.data?.acknowledged) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Review has been deleted.",
                  "success"
                );
                setRefresh(!refresh);
              } else {
                console.log(data);
              }
            });
        }
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{serviceName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>Update review</h5>
              </Form.Label>
              <Form.Control
                name="review"
                as="textarea"
                rows={3}
                defaultValue={reviewTxt}
                placeholder="Write here..."
              />
            </Form.Group>
            <Button as="input" type="submit" value="Submit Review" />
          </Form>
        </Modal.Body>
      </Modal>
      <tr>
        <td>{serviceName}</td>
        <td>{currentDate}</td>
        <td>
          {reviewTxt.length > 80 ? reviewTxt.slice(0, 50) + "..." : reviewTxt}
        </td>
        <td className="d-flex justify-content-center px-3 align-items-center">
          <Button
            onClick={() => setShow(true)}
            className="me-2 "
            variant="primary"
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(_id)} variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ReviewTable;
