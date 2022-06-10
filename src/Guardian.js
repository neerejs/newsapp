import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroupItem, Form, FormControl, Button } from "react-bootstrap";
import Header from './Header.js';
import { DateTime } from "luxon";


const Guardian = () => {

    const [news, setNews] = useState([]);
    const [searchtext, setSearchText] = useState("")

    //const API_KEY = '08a46ee6-3582-46b5-b4ef-87a7578e48f1';
    const API_URL = 'https://content.guardianapis.com/search?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1&';

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    // const loadData = async () => {
    //     const response = await fetch(API_URL);
    //     const data = await response.json();
    //     setNews(data.response.results);
    //     console.log(news);

    // }


    const loadData = async (searchvalue) => {

        const response = await fetch(API_URL + "&q=" + searchvalue);
        const data = await response.json();
        setNews(data.response.results);
        console.log(news);

        

        if (searchvalue) {

            // options = {
            //     method: 'GET',
            //     url: 'https://content.guardianapis.com/search',
            //     params: {
            //         q: searchvalue,
            //         lang: 'en',
            //         sort_by: 'relevancy',
            //         page: '1'
            //     },
            //     headers: {
            //         'x-api-key': API_KEY
            //     }
            // };
        }

        else {


            // options = {
            //     method: 'GET',
            //     url: 'https://content.guardianapis.com/search',
            //     params: { q: 'Russia', lang: 'en', sort_by: 'relevancy', page: '1' },
            //     headers: {
            //         'x-api-key': API_KEY
            //     }
            //};

            const response = await fetch(API_URL);
            const data = await response.json();
            setNews(data.response.results);
            console.log(news);
        }

        // axios.request(options).then(function (res) {
        //     console.log(res.response);
        //     setNews(res.response.results);


        // }).catch(function (error) {
        //     //console.error(error);
        // });



    }

    const getContentsArray = () => {
        const contentsArray = []
        news.forEach((item, index) => {
            console.log(item);

            let newsCreateDate = "";
            if (item.webPublicationDate) {
                newsCreateDate = DateTime.fromISO(item.webPublicationDate).toLocaleString(DateTime.DATETIME_FULL)
            }

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
                                    {newsCreateDate}
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

export default Guardian;