import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


const News = () => {

    const [news, setNews] = useState([]);
    const [searchtext, setSearchText] = useState([])



    const API_KEY = 'V5WOLcnJ6o8LQvnxUpKfXE3kyUIdAyp8Evkmew_Xzpg'
    //const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async (searchvalue) => {
        // const response = await fetch(API_URL);
        // const data = await response.json();
        // setNews(data.articles);
        // console.log(news);
        var options;

        if (searchvalue) {

            options = {
                method: 'GET',
                url: 'https://api.newscatcherapi.com/v2/search',
                params: {
                    q: searchvalue,
                    lang: 'en',
                    sort_by: 'relevancy',
                    page: '1'
                },
                headers: {
                    'x-api-key': API_KEY
                }
            };
        }

        else {


            options = {
                method: 'GET',
                url: 'https://api.newscatcherapi.com/v2/search',
                params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
                headers: {
                    'x-api-key': API_KEY
                }
            };
        }

        axios.request(options).then(function (response) {
            console.log(response.data);
            setNews(response.data.articles);
        }).catch(function (error) {
            console.error(error);
        });



    }

    const getContents = () => {
        const contentsArray = []
        news.forEach((item, index) => {
            console.log(item);
            contentsArray.push(

                <div key={index}>


                    <ListGroup.Item>

                        <Row>

                         
                            <Col >

                                <Row>



                                    <Col md={4} >
                                        <Image fluid src={item.media} className="float-sm-start"/>
                                        {/* <img src={item.media}  className="float-sm-start img-fluid" alt="..." style={{paddingRight:'20px'}}/> */}

                                    </Col>
                                    <Col md={8}>

                                        {item.summary}

                                    </Col>

                                </Row>


                            </Col>
                         
                        </Row>

                    </ListGroup.Item>

                </div>
            )
        })
        return contentsArray;
    }

    const handleClick = () => {
        loadData(searchtext)


    }

    return (
        <div>



            <Container>

                <Row style={{ marginBottom: '20px', marginTop: '10px' }}>
                    <Col md={2} >
                    </Col>
                    <Col md={8}>
                        <Row >
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
                                    <Button onClick={handleClick} variant="outline-success" type="button" >Search</Button>
                                </Form>
                            </Col>

                        </Row>
                        <Row style={{marginTop:"20px"}}>
                            <Col>
                                <ListGroup>
                                    {getContents()}
                                </ListGroup>

                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>



            </Container>

        </div>
    );
}

export default News;