import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

import Header from './Header.js';

const LatestNews = () => {

    


    const [news, setNews] = useState([]);
    const API_KEY = 'c4e84ab791be47d39d506122173f5527'
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

    const loadData = async() => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.articles);
        console.log(news);
    }

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    const getContents = () => {
        const contentsArray = []
        news.forEach((item, index) => {
            console.log(item);
            contentsArray.push(
                <div>
                    
                         
                </div>
            )
        })

    }

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <Header title="LatestNews" />
                        {getContents()}
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default LatestNews;