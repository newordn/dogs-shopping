import React, {useState} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDog,faPhone,faShoppingBasket, faComment, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";

export function Header() {
  const [selected, setSelected] = useState([true,false,false,false])
  function usePageViews() {
    let location = useLocation();
    React.useEffect(() => {
      switch (location.pathname)
      {
        case "/":
          setSelected([true,false,false,false]) 
        break;
        case "/about":
          setSelected([false,true,false,false]);
          break;
        case "/shop":
          setSelected([false,false,true,false]);
          break;
        case "/contact_us":
          setSelected([false,false,false,true]);
          break;
      }
    }, [location]);
  }
  usePageViews()
  return (
    <header className="header">
      <Navbar expand="lg" className="w-100">
      <Navbar.Brand href="#home"><Nav.Link href="/" className="text-white font-weight-bold"><FontAwesomeIcon icon={faDog} size="lg"/> PET SHOP</Nav.Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav className="text-white ml-auto" >
        <Nav.Item className="p-1">
          <Link to="/"  className={` text-white  ${selected[0]?"active-nav":""}`}>HOME &nbsp;<FontAwesomeIcon icon={faHome} /></Link>
        </Nav.Item>
        <Nav.Item className="p-1">
          <Link to="/about" className={` text-white  ${selected[1]?"active-nav":""} ml-md-3`}>ABOUT &nbsp;<FontAwesomeIcon icon={faComment} /></Link>
        </Nav.Item>
        <Nav.Item className="p-1">
          <Link to="/shop" className={` text-white  ${selected[2]?"active-nav":""} ml-md-3`}>SHOP &nbsp;<FontAwesomeIcon icon={faShoppingBasket} /></Link>
        </Nav.Item>
        <Nav.Item className="p-1">
          <Link to="/contact_us" className={` text-white  ${selected[3]?"active-nav":""} ml-md-3`}>CONTACT US &nbsp;<FontAwesomeIcon icon={faPhone} /></Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

