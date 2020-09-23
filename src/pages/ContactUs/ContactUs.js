import React from "react";
import "./ContactUs.css";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";

export function ContactUs() {
  return (
    <div className="container1 pt-5 pb-5">
      <Container className="h-100">
        <Row className=" h-100 align-items-center">
          <Col md="5" className="mb-2">
            <img src="/statics/imgs/contactUs.jpg" alt="" className="img-fluid img-style" />
          </Col>
          <Col md={{ span: 5, offset: 1 }} className="text-left mb-2">
            <hr style={{ borderColor: "#f9575c", borderWidth: 3 }} />
            <h3 className="mb-5">Get in touch</h3>
            <form>
              <FormControl placeholder="Name" className="mb-4" size="lg" />
              <FormControl placeholder="E-mail" className="mb-4" size="lg" />
              <FormControl placeholder="Message" className="mb-4" size="lg" />
              <div className="text-right">
                <Button size="lg" style={{ backgroundColor: "#f9575c", border: "none" }}>
                  Send
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
