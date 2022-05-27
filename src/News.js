import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

const News = () => {

    const [news, setNews] = useState([]);


    const API_KEY = 'c4e84ab791be47d39d506122173f5527'
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const loadData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.articles);
        console.log(news);



    }

    const getContents = () => {
        const contentsArray = []
        news.forEach((item, index) => {

            contentsArray.push(

                <div key={index}>

                    <ListGroup.Item>
                        <a href={item.url}>
                        <Row>
                            
                            <Col md={3}>
                                <Image fluid src={item.urlToImage} />

                            </Col>
                            <Col md={9}>
                                {item.content}
                            </Col>
                            
                        </Row>
                        </a>
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