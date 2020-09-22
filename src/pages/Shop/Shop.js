import React from "react";
import "./Shop.css";
import { Row, Col, Container } from "react-bootstrap";
import { Dog } from "../../components/Dog/Dog";
import { DOGS_TO_SELL, DOGS_SERVICES } from "../../consts/dogs";
export function Shop() {
  return (
    <div>
      <div className="shop-header text-center text-white" id="shop">
        <h1>SHOP GRID : PETS</h1>
      </div>
      <div className="bg-bluewhite pt-4 pb-4">
        <Container>
          <Row className="mb-4">
            {DOGS_TO_SELL.slice(0, 4).map((dog) => (
              <Col md="3" className="mb-1">
                <Dog dog={dog} />
              </Col>
            ))}
          </Row>
          <Row className="mb-4">
            {DOGS_TO_SELL.slice(4, 8).map((dog) => (
              <Col md="3" className="mb-1">
                <Dog dog={dog} />
              </Col>
            ))}
          </Row>
          <Row>
            {DOGS_TO_SELL.slice(8, 12).map((dog) => (
              <Col md="3" className="mb-1">
                <Dog dog={dog} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="shop-header text-center text-white">
        <h1>SHOP GRID : PETS'S SERVICES</h1>
      </div>
      <div className="bg-bluewhite pt-4 pb-4">
        <Container>
          <Row className="mb-4">
            {DOGS_SERVICES.slice(0, 4).map((dog) => (
              <Col md="3" className="mb-1">
                <Dog dog={dog} />
              </Col>
            ))}
          </Row>
          <Row className="mb-4">
            {DOGS_SERVICES.slice(4, 8).map((dog) => (
              <Col md="3" className="mb-1">
                <Dog dog={dog} />
              </Col>
            ))}
          </Row>
          <Row>
            {DOGS_SERVICES.slice(8, 12).map((dog) => (
              <Col md="3" className="mb-1">
                <Dog dog={dog} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
