import React, { useEffect, useState } from "react";
import Slider from "../Swiper/Swiper";
import HomeCard from "./HomeCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LatestProjects from "../LatestProjects/LatestProjects";
import GetInTouch from "../GetInTouch/GetInTouch";
const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div className="my-5 container">
      <Slider></Slider>
      <Row sm={1} md={2} lg={3} className="g-4 mt-4">
        {services.map((service) => (
          <HomeCard key={service._id} service={service}></HomeCard>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link to="/services">
          <Button variant="primary">See all</Button>
        </Link>
      </div>
      <LatestProjects></LatestProjects>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
