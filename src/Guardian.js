import { useState, useEffect } from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import Header from './Header.js';
import parse from 'html-react-parser';
import { DateTime } from "luxon";

const Guardian = (props) => {

    const [sections, setSections] = useState([]);


    //const API_KEY = '08a46ee6-3582-46b5-b4ef-87a7578e48f1';
    //const API_URL = 'https://content.guardianapis.com/search?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async (searchvalue) => {

        const API_URL = 'https://content.guardianapis.com/search?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1&show-fields=thumbnail,headline,lastModified,standfirst ';
        const response = await fetch(API_URL);
        const data = await response.json();
        setSections(data.response.results);

    }

    const getContentsArray = () => {
        const sectionsArray = []
        
        sections.forEach((section, index) => {
            console.log(section.fields.thumbnail)
           let body = parse(section.fields.standfirst)

           let blogCreateDate = "";
            if (section.fields.lastModified) {
                blogCreateDate = DateTime.fromISO(section.fields.lastModified).toLocaleString(DateTime.DATETIME_FULL)
            }
            sectionsArray.push(
                // <a href={section.webUrl} target="_blank" rel="noreferrer">
                // <Button style={{margin:'5px'}}>{section.webTitle}</Button>
                // </a>

                <Row>
                    <h1 title={section.fields.headline}></h1>

                    <Col style={{marginBottom:"10px", marginTop:'20px'}} md={4}>
                        
                        <Image fluid src={section.fields.thumbnail}></Image>
                        
                    </Col>

                    <Col style={{marginBottom:"10px", marginTop:'20px'}} md={8}>
                    
                        {body}

                        {blogCreateDate}
                        
                    </Col>
                </Row>
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

export default Guardian;