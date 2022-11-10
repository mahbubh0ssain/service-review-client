import React from "react";

const Route404 = () => {
  return (
    <div className="text-center border p-5 rounded-3 shadow position-absolute top-50 start-50 translate-middle">
      <h1 style={{ "font-size": "90px" }} className="  text-danger">
        404
      </h1>
      <h2 style={{ "font-size": "40px" }}>Page Not Found</h2>
    </div>
  );
};

export default Route404;
