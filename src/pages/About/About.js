import React, { useState } from 'react';
import { Row, Col, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";

export function About() {
  return (<div className="conteneur">
    <Container className="container1">
      <h1 className="brand mb-5 text-center">ABOUT US</h1>
    </Container>

    <Container className="container2">
      <Row>
        <Col md="6">
          <h2 className="font-weight-bold md-5" size="lg">See Why Choose Us for the Care Of Your <br />Pet</h2>
          <p className="text-left">
            Dogs shopping is a leading shop club with several branch
            offices and boarding centers across the US.
            Founded in 1999, our club aims to promote the welfare of all cats,
            provide them with proper care (including grooming and veterinarian services),
            and encourage responsible ownership of all cats.
            We also contribute to animal welfare and feline health organizations
            as funds permit.
            If you are looking for a new dog or need someone to take care of your own dog, we can help.
              </p>
          <Button className="bg-red border-none" size="lg">
            LEARN MORE <FontAwesomeIcon icon={faAngleRight} color="white" />
          </Button>
        </Col>
        <Col md="6">
          <Row>
            <Col md="6"><img className="d-block w-100 img-fluid img-size" src="/statics/imgs/femme+chien.jpg" /></Col>
            <Col md="6">
              <Row><img className="d-block w-100 img-fluid img-size" src="/statics/imgs/croquet.jpg" /></Row>
              <Row><img className="d-block w-100 img-fluid img-size" src="/statics/imgs/chien.jpg" /></Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    <Container className="container3">
      <h2 className="text-center font-weight-bold md-5">OUR PROCESS <br />How Does It Work</h2>
      <Row className="process">
        <Col md="2">
          <div className="img3">
            <img className="d-block w-60 img-fluid" src="/statics/imgs/search.png" />
          </div>
          <p className="text-center">
            Dogs shopping is a leading shop club with several branch, we can help.
              </p>
        </Col>
        <Col md="1"></Col>
        <Col md="2">
          <div className="img3">
            <img className="d-block w-60 img-fluid" src="/statics/imgs/select.png" />
          </div>
          <p className="text-center">
            Dogs shopping is a leading shop club with several branch
            </p>
        </Col>
        <Col md="1"></Col>
        <Col md="2">
          <div className="img3">
            <img className="d-block w-60 img-fluid" src="/statics/imgs/order.png" />
          </div>
          <p className="text-center">
            Dogs shopping is a leading shop club with several branch .
            </p>
        </Col>
        <Col md="1"></Col>
        <Col md="2">
          <div className="img3">
            <img className="d-block w-60 img-fluid" src="/statics/imgs/enjoy.png" />
          </div>
          <p className="text-center">
            Dogs shopping is a leading shop club with several branch
            </p>
        </Col>
      </Row>
    </Container>

    <Container className="container4">
      <h2 className="text-left font-weight-bold md-5">Our Latest News</h2>
      <Row className="process">
        <Col md="3" className="contImg4">
          <div className="img4">
            <img className="d-block w-60 img-fluid img4" src="/statics/imgs/new1.jpg" />
          </div>
          <h3 className="text-left font-weight-bold md-5 brand">Dog sitting on the flor</h3>
          <p className="text-center">
            Dogs shopping is a leading shop club with several branch, we can help.
              </p>
        </Col>
        <Col md="3" className="contImg4">
          <div className="img4">
            <img className="d-block w-60 img-fluid img4" src="/statics/imgs/new2.jpg" />
          </div>
          <h3 className="text-left font-weight-bold md-5 brand">Dog sitting on the flor</h3>
          <p className="text-lft">
            Dogs shopping is a leading shop club with several branch
            </p>
        </Col>
        <Col md="3" className="contImg4">
          <div className="img4">
            <img className="d-block w-60 img-fluid img4" src="/statics/imgs/new3.jpg" />
          </div>
          <h3 className="text-left font-weight-bold md-5 brand">Dog sitting on the flor</h3>
          <p className="text-lrft">
            Dogs shopping is a leading shop club with several branch .
            </p>
        </Col>
        <Col md="3" className="contImg4">
          <div className="img4">
            <img className="d-block w-60 img-fluid img4" src="/statics/imgs/new4.jpg" />
          </div>
          <h3 className="text-left font-weight-bold md-5 brand">Dog sitting on the flor</h3>
          <p className="text-left">
            Dogs shopping is a leading shop club with several branch
            </p>
        </Col>
      </Row>
    </Container>
  </div>
  );
}