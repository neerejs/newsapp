
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Guardian from './Guardian.js';

const Editions = () => {


    const [editions, setEditions] = useState([]);
    const [editionName, setEditionName] = useState('all');


    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, [editionName]);


    const loadData = async () => {
        const API_URL = 'https://content.guardianapis.com/editions?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
        const response = await fetch(API_URL);
        const data = await response.json();
        setEditions(data.response.results);
    }


    const handleClick = (name) => {
        alert(name);
        setEditionName(name.toUpperCase());
    }


    const getEditions = () => {
        const editionsArray = []
        editions.forEach((edition, index) => {
            editionsArray.push(
                <Button onClick={() => handleClick(edition.id)} style={{ margin: '5px' }}>{edition.id}</Button>
            )
        })
        return editionsArray
    }

    
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {getEditions()}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Guardian edition={editionName} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Editions;