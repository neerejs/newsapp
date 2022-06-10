import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroupItem, Form, FormControl, Button } from "react-bootstrap";
import Header from './Header.js';


const Sections = () => {

    const [news, setNews] = useState([]);
    const [searchtext, setSearchText] = useState("");

    const API_KEY = '&api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1&/'
    const API_URL = 'https://content.guardianapis.com/sections?';

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);




    const loadData = async (searchvalue) => {

        const response = await fetch(API_URL + "&q=" + searchvalue + API_KEY);
        const data = await response.json();
        setNews(data.response.results);
        console.log(news);



        if (searchvalue) {

        }

        else {

            const response = await fetch(API_URL + API_KEY);
            const data = await response.json();
            setNews(data.response.results);
            console.log(news);
        }





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

                                <ListGroupItem>
                                    <a href={item.webUrl} rel='noreferrer' target='_blank'>
                                        {item.webTitle}
                                    </a>
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

    const handleClick = (e) => {
        e.preventDefault();
        loadData(searchtext)


    }


    return (

        <>
            <div>

                <Container>
                    <Row>
                        <Col style={{ marginTop: "10px", marginBottom: "20px" }}>
                            <Header title="Guardian API" />
                            <Row style={{ marginTop: "20px" }}>
                                <Col >
                                    <Form className="d-flex" >
                                        <FormControl
                                            type="text"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                            value={searchtext}
                                            onChange={(e) => setSearchText(e.target.value)}
                                        />


                                        <Button onClick={(e) => handleClick(e)} variant="outline-success" type="submit" >Search</Button>
                                    </Form>
                                </Col>

                            </Row>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {getContentsArray()}
                        </Col>
                    </Row>
                </Container>

            </div>
        </>

    );
}

export default Sections;