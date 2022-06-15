import { useState, useEffect } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import Guardian from './Guardian.js'

const Section = () => {
    
  
    const [sections, setSections] = useState([]);
    const [sName, setSName] = useState('all');

    useEffect(() => {
        
        loadData();
        // eslint-disable-next-line
    }, [sName]);

    const loadData = async () => {
        const API_URL = 'https://content.guardianapis.com/sections?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
        const response = await fetch(API_URL);
        const data = await response.json();
        setSections(data.response.results);

    }

const handleClick = (name) => {
   
   alert(name);
   setSName(name.toLowerCase());
}

const getSections = () => {
    const sectionsArray=[]
    sections.forEach((section,index)=> {
        sectionsArray.push (
        <Button onClick= {() => handleClick(section.id)} style={{margin:'5px'}}>{section.webTitle}</Button>
        )
    })
    return sectionsArray
}
    return ( 
        <>
            <Container>
                <Row>
                    <Col>
                        {getSections()}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Guardian section={sName} />
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Section;