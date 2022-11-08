import React from "react";

const LatestProjects = () => {
  return (
    <div className="bg-primary rounded-3 p-4 my-4">
      <div className="text-center text-white">
        <h3>Latest Projects</h3>
        <h6>Believe in quality not quantity.</h6>
      </div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3">
        <div className="mb-3">
          <img
            className="img-fluid rounded-3"
            src="https://833nycplumber.com/wp-content/uploads/2018/08/Depositphotos_25630745_xl-2015.jpg"
            alt=""
          />
        </div>
        <div className="mb-3">
          <img
            className="img-fluid rounded-3"
            src="https://www.priorityplumbingmd.com/wp-content/uploads/2022/05/plumber-repairing-tank-water-heater.jpg"
            alt=""
          />
        </div>
        <div className="mb-3">
          <img
            className="img-fluid rounded-3"
            src="https://24hourmelbourneplumbers.com.au/wp-content/uploads/2021/01/24-Hour-Melbourne-Roof-Plumber.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
