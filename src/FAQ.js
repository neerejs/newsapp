import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as contentful from 'contentful';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {

    const [faqItems, setFaqItems] = useState([]);

    useEffect(() => {

        let contentfulClient = contentful.createClient({
            accessToken: '1EuIOgC3v2LcxuD2ambb2454ijXnjHKsheuWnPFjGPs',
            space: 'nvm4509pk8bp'
        });

        let Faq_CONTENT_TYPE_ID = 'faq';

        contentfulClient.getEntries({
            content_type: Faq_CONTENT_TYPE_ID,
            order: '-fields.title'

        })
            .then(function (entries) {
                console.log("links: " + entries.items)
                setFaqItems(entries.items)
            })

    }, []);

    const getFaq = () => {
        const faqArray = []
        faqItems.forEach((faq, index) => {
            faqArray.push(<>

                <Row style={{ backgroundColor: "white", paddingTop: "10px", paddingBottom: "10px" }} >

                    <Col >
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item>
                                <Accordion.Header>{faq.fields.question}</Accordion.Header>
                                <Accordion.Body>{faq.fields.answer}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </>
            )
        })

        return faqArray
    }


    return (

        <>

            <Container>
                <Row>
                    <Col>
                        {getFaq()}
                    </Col>
                </Row>
            </Container>




        </>
    );
}



export default FAQ;

