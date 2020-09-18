import React from "react";
import { Card, Button } from "react-bootstrap";

export function Dog({ dog }) {
  const { price, img, description } = dog;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body className="text-center">
        <Card.Title className="text-left">{description}</Card.Title>
        <Card.Text>
          <Button className="bg-red border-none" size="lg">
            Order {price} $
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
