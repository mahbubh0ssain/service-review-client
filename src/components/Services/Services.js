import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useTitle } from "../../Hooks/UseTitle/UseTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mr-plumber-server.vercel.app/all-service")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div className="my-5 container">
      <Row sm={1} md={2} lg={3} className="g-4 mt-4">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </Row>
    </div>
  );
};

export default Services;
