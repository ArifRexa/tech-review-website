import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigationbar = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "white"
      }
    return (
        <div>
            <Navbar bg="primary" variant = "dark" expand="lg" fixed="top">
                <Container>
                    <NavLink to="/home" className = "fw-bold text-light navbar-brand">KBO-TECH</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink activeStyle = {activeStyle} className="navbar-brand" to="/home">Home</NavLink>
                            <NavLink activeStyle = {activeStyle} className="navbar-brand" to="/services">Services</NavLink>
                            <NavLink activeStyle = {activeStyle} className="navbar-brand" to="/about">About</NavLink>
                            <NavLink activeStyle = {activeStyle} className="navbar-brand" to="/contact">Contact</NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigationbar;