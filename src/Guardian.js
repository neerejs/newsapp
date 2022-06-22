import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { DateTime } from "luxon";

const Guardian = (props) => {

    const [sections, setSections] = useState([]);
    const { section, edition } = props

    const firstFive = [];

    useEffect(() => {

        loadData();
        // eslint-disable-next-line
    }, [section, edition]);


    const loadData = async (searchvalue) => {
        let API_URL = ''
        if (section === 'all' || edition === 'all') {
            API_URL = 'https://content.guardianapis.com/search?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1&show-fields=thumbnail,headline,lastModified,standfirst,production-office'

        } else if (section && section !== 'all') {
            API_URL = 'https://content.guardianapis.com/search?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1&show-fields=thumbnail,headline,lastModified,standfirst,production-office&section=' + section
        }
        else if (edition && edition !== 'all') {
            API_URL = 'https://content.guardianapis.com/search?api-key=08a46ee6-3582-46b5-b4ef-87a7578e48f1&show-fields=thumbnail,headline,lastModified,standfirst,production-office&production-office=' + edition

        }
        const response = await fetch(API_URL);
        const data = await response.json();
        setSections(data.response.results);
    }

    const getContentsArray = () => {
        const sectionsArray = []
        sections.forEach((section, index) => {
            let blogCreateDate = "";

            for (let i = 0; i < 5; i++) {
                firstFive[i] = section.fields.thumbnail;
            }
            if (section.fields.lastModified) {
                blogCreateDate = DateTime.fromISO(section.fields.lastModified).toLocaleString(DateTime.DATETIME_FULL)
            }
            sectionsArray.push(
                <Row>
                    <Col style={{ marginBottom: "10px", marginTop: '20px' }} md={4}>
                        <Image fluid src={section.fields.thumbnail}></Image>
                    </Col>
                    <Col style={{ marginBottom: "10px", marginTop: '20px' }} md={8}>
                        <h4 >{section.fields.headline}</h4>
                        {blogCreateDate}
                        <h4 >{section.fields.productionOffice}</h4>
                    </Col>
                </Row>
            )


        })

        const noRecords = <h4>No articles found</h4>

        return sectionsArray.length <= 0 ? noRecords : sectionsArray
    }

    const firstFiveCarousel = () => {
        const fiveArray = [];


       
            sections.forEach((item, ind) => {
                
                fiveArray.push(
                    <Carousel.Item>
                        <Image fluid
                            className="d-block w-100"
                            src={item.fields.thumbnail}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )

                
            })
        

        return fiveArray;
    }
    return (<>
        <div>
            <Container>
                <Row>
                    <Col style={{ marginTop: "10px", marginBottom: "20px" }}>
                        <Carousel>
                            {firstFiveCarousel()}
                        </Carousel>
                    </Col>
                </Row>
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