import React from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonies.css";
export function Testimonies({ testimonies }) {
  return (
    <Carousel className="testimonies">
      {testimonies.map((testimony) => (
        <Carousel.Item className="text-center">
          <p className="mb-4 text-white mt-3">
            <img src={testimony.avatar} className=" img-size1 mb-2" />
            <h3>{testimony.author}</h3>
          </p>
          <p className=" text-white">{testimony.description}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
