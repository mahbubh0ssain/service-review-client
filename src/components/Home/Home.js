import React, { useEffect, useState } from "react";
import Slider from "../Swiper/Swiper";
import ServiceCard from "./ServiceCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div className="my-5 container">
      <Slider></Slider>
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button className="px-4" variant="primary">
          See all
        </Button>
      </div>
    </div>
  );
};

export default Home;
