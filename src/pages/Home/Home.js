import React from 'react';
import './Home.css';
import {Carousel} from "react-bootstrap";

export function Home() {
  return (<div>
     <Carousel>
     <Carousel.Item>
    <img
      className="d-block w-100 img-fluid img-size"
      src="/statics/imgs/slide1.jpg"
      alt="Get your best friend"
    />

    <Carousel.Caption>
      <h1>Get your best friend</h1>
      <p>With more than 1000 of pets in your shops</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 img-size"
      src="/statics/imgs/slide2.jpg"
      alt="service"
    />
    <Carousel.Caption>
      <h1>Best service for your Pet</h1>
      <p>We take care of your pet, like never before, he will thank you.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
  );
}