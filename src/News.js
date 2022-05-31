import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

var axios = require("axios").default;

const News = () => {

    const [news, setNews] = useState([]);



    const API_KEY = 'V5WOLcnJ6o8LQvnxUpKfXE3kyUIdAyp8Evkmew_Xzpg'
    //const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async () => {
        // const response = await fetch(API_URL);
        // const data = await response.json();
        // setNews(data.articles);
        // console.log(news);

        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
            headers: {
                'x-api-key': API_KEY
            }
        };

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

                                <Col md={3}>
                                    <Image fluid src={item.media} />

                                </Col>
                                <Col md={5}>
                                    {item.summary}
                                    <br></br>
                                    <a target = "_blank" href = {item.link}>Read More</a>
                                </Col>
                                <Col md={4}>
                                    
                                </Col>

                            </Row>
                        
                    </ListGroup.Item>

                </div>
            )
        })
        return contentsArray;
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            {getContents()}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default News;