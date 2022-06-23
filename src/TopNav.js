import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import neerejLogo from './Neerej.png'
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { useState, useEffect } from "react";


const TopNav = () => {
    const [editions, setEditions] = useState([]);
    


    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async (searchvalue) => {
        const API_URL = 'https://content.guardianapis.com/editions?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
        const response = await fetch(API_URL);
        const data = await response.json();
        setEditions(data.response.results);

    }


    const getEditions = () => {
        const editionsArray = []
        editions.forEach((edition, index) => {
            editionsArray.push(

                <NavDropdown.Item href={edition.webUrl} target="_blank">{edition.edition}</NavDropdown.Item>

            )
        })
        return editionsArray
    }

    
    

    return (
        <>
            <div >

                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">

                        <img
                                alt=""
                                src={neerejLogo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/">
                                    <Nav.Link >Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/editions">
                                    <NavDropdown title="Editions" id="basic-nav-dropdown">

                                        {getEditions()}

                                    </NavDropdown>
                                </LinkContainer>
                                <LinkContainer to="/sections">
                                    <Nav.Link >Sections</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/faq">
                                    <Nav.Link >FAQ's</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/formik">
                                    <Nav.Link >Formik Form</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/states">
                                    <Nav.Link>States</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </>
    )
}

export default TopNav;