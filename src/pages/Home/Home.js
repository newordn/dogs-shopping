import React from "react";
import "./Home.css";
import { Carousel, Button, Container, Row, Col, Card } from "react-bootstrap";

export function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid img-size"
            src="/statics/imgs/slide1.jpg"
            alt="Get your best friend"
          />

          <Carousel.Caption>
            <h1 className="mb-5">Get your best friend</h1>
            <p className="mb-3">With more than 1000 of pets in your shops</p>
            <p>
              <Button className="bg-red border-none" size="lg">
                Order Now
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-size"
            src="/statics/imgs/slide2.jpg"
            alt="service"
          />
          <Carousel.Caption>
            <h1 className="mb-5">Best service for your Pet</h1>
            <p className="mb-3">
              We take care of your pet, like never before, he will thank you.
            </p>
            <p>
              <Button className="bg-red border-none" size="lg">
                Order Now
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div class="services">
        <Container>
          <h1 className="text-center bg-red text-white mb-4">Our services</h1>
          <Row>
            <Col md={6} className="mb-1">
              <Card>
                <Card.Img variant="top" src="/statics/imgs/article1.jpg" />
                <Card.Body>
                  <Card.Title>1000 pets available</Card.Title>
                  <Card.Text>
                    We have got a collection of more than 1000 pets available
                    just for you.
                  </Card.Text>
                  <Button className="bg-red border-none" size="lg">
                    Shop Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-1">
              <Card>
                <Card.Img variant="top" src="/statics/imgs/article2.jpg" />
                <Card.Body>
                  <Card.Title>Washing, Healing, Dental Care</Card.Title>
                  <Card.Text>
                    From its quenottes to the ends of its paws, the dog needs
                    some regular care, We are taking care of it for you.
                  </Card.Text>
                  <Button className="bg-red border-none" size="lg">
                    Shop Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
