import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useTitle } from "../../Hooks/UseTitle/UseTitle";
import ServiceCard from "./ServiceCard";
import RingLoader from "react-spinners/RingLoader";

const Services = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env?.REACT_APP_URL}/all-service`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      });
  }, []);

  if (services?.length === 0) {
    return (
      <div className="container my-5 d-flex align-items-center justify-content-center min-vh-100">
        <RingLoader color="#36d7b7" speedMultiplier={2} />
      </div>
    );
  }
  return (
    <div className="my-5 container min-vh-100">
      <Row sm={1} md={2} lg={3} className="g-4 mt-4">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </Row>
    </div>
  );
};

export default Services;
