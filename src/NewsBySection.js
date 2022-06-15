import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


const NewsBySection = () => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async (searchvalue) => {

        const API_URL = 'https://content.guardianapis.com/sections?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
        const response = await fetch(API_URL);
        const data = await response.json();
        setSections(data.response.results);

    }

    const getContentsArray = () => {
        const sectionsArray = []
        sections.forEach((section, index) => {
            sectionsArray.push(
                <a href={section.webUrl} target="_blank" rel="noreferrer">
                <Button style={{margin:'5px'}}>{section.webTitle}</Button>
                </a>
            )
        })
        return sectionsArray
    }

    return (<>
        <div>

            <Container>
                <Row>
                    <Col style={{ marginTop: "10px", marginBottom: "20px" }}>
                        
                        {getContentsArray()}
                    </Col>
                </Row>
            </Container>

        </div>
    </>);
}

export default NewsBySection;