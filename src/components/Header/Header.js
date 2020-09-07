import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDog,faPhone,faShoppingBasket, faComment, faHome} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="header">
      <Navbar expand="lg" className="w-100">
      <Navbar.Brand href="#home"><Nav.Link href="/home" className="text-white font-weight-bold"><FontAwesomeIcon icon={faDog} size="lg"/> PET SHOP</Nav.Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav className="text-white ml-auto" >
        <Nav.Item>
          <Nav.Link href="/home" className="text-white font-weight-bold">{"  "}HOME <FontAwesomeIcon icon={faHome} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" className="text-white">{"  "}ABOUT <FontAwesomeIcon icon={faComment} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/shop" className="text-white">{"  "}SHOP <FontAwesomeIcon icon={faShoppingBasket} /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact-us" className="text-white">{"  "}CONTACT US <FontAwesomeIcon icon={faPhone} /></Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

