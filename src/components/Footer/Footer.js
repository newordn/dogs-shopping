import React from 'react';
import {Row, Col, Container, InputGroup,FormControl, Button} from 'react-bootstrap';
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMarker,faPhone,faEnvelope, faDog} from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <h4 className="brand mb-5"><FontAwesomeIcon icon={faDog} size="lg"/> PET SHOP</h4>
      </Container>
      <Container>
        <Row>
            <Col md="4">
              <h3 className="text-white1 font-weight-bold mb-5">About Us</h3>
              <p className="text-white1 text-left">
              Dogs shopping is a leading shop club with several branch 
              offices and boarding centers across the US.
               Founded in 1999, our club aims to promote the welfare of all cats, 
               provide them with proper care (including grooming and veterinarian services),
                and encourage responsible ownership of all cats. 
                We also contribute to animal welfare and feline health organizations 
                as funds permit. 
                If you are looking for a new dog or need someone to take care of your own dog, we can help.
              </p>
            </Col>
            <Col md="4" className="text-center">
              <h3 className="text-white1 font-weight-bold mb-5">Newsletter</h3> 
              <p className="text-white1 mb-3">
              Keep up with our always upcoming news and updates. 
              Enter your e-mail and subscribe to our newsletter 
              to get all updates right into your inbox.
              </p>
              <InputGroup>
                <FormControl />
                <InputGroup.Prepend>
                  <Button>Submit</Button>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
            <Col md="4" className="text-center text-white1">
              <h3 className="text-white1 font-weight-bold mb-5">Contact Information</h3>
              <div className="text-right">
                <p className="mb-3">
                  <span className="mr-2">1-800-1563-567</span>
                  <FontAwesomeIcon icon={faPhone} color="#6090f7"/>
                </p>
                <p className="mb-3">
                  <span className="mr-2">newordn@gmail.com</span>
                  <FontAwesomeIcon icon={faEnvelope} color="#6090f7"/>
                </p>
                <p>
                  <span className="mr-2">San diego, Ca 95117-1080 USA</span>
                  <FontAwesomeIcon icon={faMarker} color="#6090f7"/>
                </p>
              </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}

