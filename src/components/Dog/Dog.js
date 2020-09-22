import React, { useState } from "react";
import { Card, Button, Modal, Row, Col } from "react-bootstrap";

export function Dog({ dog }) {
  const { price, img, description } = dog;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton className="bg-red">
          <Modal.Title className="text-white">Order your best friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img src={img} className="rounded" />
            </Col>
            <Col md={6} className="text-right">
              <input placeholder="Name" className="form-control mb-2" />
              <input placeholder="Email" className="form-control mb-2" />
              <input placeholder="Phone number" className="form-control mb-2" />
              <textarea className="form-control mb-2">Do you have something to tell us ?</textarea>
              <Button className="bg-red border-none">Submit</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title className="text-left">{description}</Card.Title>
          <Card.Text>
            <Button className="bg-red border-none" size="lg" onClick={() => setShowModal(true)}>
              Order {price} $
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
