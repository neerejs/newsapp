import { useState , useEffect } from "react";
import { Container, Row , Col, ListGroupItem} from "react-bootstrap";

const Guardian = () => {
    
    const [news, setNews] = useState([]);

    const API_URL = 'https://content.guardianapis.com/search?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1';

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.response.results);
        console.log(news);
        
    }

    const getContentsArray = () => {
        const contentsArray = []
        news.forEach((item, index) => {
            console.log(item);
            contentsArray.push(
                <div key={index}>
                    <Container>
                        <Row>
                            <Col>
                                <h6>{item.sectionName}</h6>

                               
                
                                <ListGroupItem>
                                    {item.webTitle}
                                </ListGroupItem>
                                <ListGroupItem>
                                    {item.webPublicationDate}
                                </ListGroupItem>
                                <hr></hr>
                            </Col>
                        </Row>
                    </Container>
                    
                         
                </div>
            )
        })
        return contentsArray;
    }

    return (  

        <>
            <div>
                    {getContentsArray()}
            </div>
        </>
    );
}
 
export default Guardian;