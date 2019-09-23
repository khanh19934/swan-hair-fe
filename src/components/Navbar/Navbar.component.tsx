import React, { useEffect, useState } from "react";

import { Nav, Navbar } from "react-bootstrap";

const CustomNavbar = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const changeNavbar = window.scrollY > pageHeight;
      setIsFixed(changeNavbar);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`custom-navbar ${isFixed ? "fixed-top" : ""}`}
    >
      <Navbar.Brand href="#home">Swan Hair Salon</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>

          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>

          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
