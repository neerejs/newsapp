// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import neerejLogo from './Neerej.png'



// const TopNav = (props) => {

//     return (
//         <>
//             <div >
//                 <>
//                       <Navbar bg="dark" variant="dark">
//                         <Container>
//                             <Navbar.Brand href="/">
//                                 <img
//                                     alt=""
//                                     src={neerejLogo}
//                                     width="50"
//                                     height="50"
//                                     className="d-inline-block align-top"
//                                 />{' '}
//                                 <span style={{fontSize:"30px"}}>Neerej's News Page</span>
//                             </Navbar.Brand>
//                         </Container>
//                     </Navbar>
//                 </>
//             </div>

//         </>
//     )
// }

// export default TopNav;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import neerejLogo from './Neerej.png'
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { useState, useEffect } from "react";


const TopNav = (props) => {
    const [editions, setEditions] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        loadData();
        loadData2();
        // eslint-disable-next-line
    }, []);

    const loadData = async (searchvalue) => {
        const API_URL = 'https://content.guardianapis.com/editions?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
        const response = await fetch(API_URL);
        const data = await response.json();
        setEditions(data.response.results);

    }

    const loadData2 = async (searchvalue) => {
        const API_URL = 'https://content.guardianapis.com/sections?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
        const response = await fetch(API_URL);
        const data = await response.json();
        setSections(data.response.results);

    }


const getEditions = () => {
    const editionsArray=[]
    editions.forEach((edition,index)=> {
        editionsArray.push (
       
        <NavDropdown.Item href={edition.webUrl} target="_blank">{edition.edition}</NavDropdown.Item>
       
        )
    })
    return editionsArray
}

const getSections = () => {
    const sectionsArray=[]
    sections.forEach((section,index)=> {
        sectionsArray.push (
       
        <NavDropdown.Item href={section.webUrl} target="_blank">{section.webTitle}</NavDropdown.Item>
       
        )
    })
    return sectionsArray
}

return (
    <>
        <div >

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={neerejLogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{ fontSize: "30px" }}>Neerej's News Page</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Editions" id="basic-nav-dropdown">
                               
                                {getEditions()}
                               
                            </NavDropdown>
                            <NavDropdown title="Sections" id="basic-nav-dropdown">
                               
                                {getSections()}
                               
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    </>
)
}

export default TopNav;