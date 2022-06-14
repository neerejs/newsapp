import { useState, useEffect } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

const Section = () => {
    
   //const [editions, setEditions] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        //loadData();
        loadData2();
        // eslint-disable-next-line
    }, []);

    // const loadData = async (searchvalue) => {
    //     const API_URL = 'https://content.guardianapis.com/editions?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
    //     const response = await fetch(API_URL);
    //     const data = await response.json();
    //     setEditions(data.response.results);

    // }

    const loadData2 = async (searchvalue) => {

        const API_URL = 'https://content.guardianapis.com/sections?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';
        const response = await fetch(API_URL);
        const data = await response.json();
        setSections(data.response.results);

    }


// const getEditions = () => {
//     const editionsArray=[]
//     editions.forEach((edition,index)=> {
//         editionsArray.push (
       
//        // <NavDropdown.Item href={edition.webUrl} target="_blank">{edition.edition}</NavDropdown.Item>
       
//         )
//     })
//     return editionsArray
// }

const handleClick = () => {
   
   alert("Hello");
}

const getSections = () => {
    const sectionsArray=[]
    sections.forEach((section,index)=> {
        sectionsArray.push (
       
        //<NavDropdown.Item href={section.webUrl} target="_blank">{section.webTitle}</NavDropdown.Item>
       //<a href={section.webUrl} target="_blank" rel="noreferrer">
        <Button onClick= {() => handleClick()} style={{margin:'5px'}}>{section.webTitle}</Button>
       //</a>
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
            </Container>
        </>
     );
}
 
export default Section;