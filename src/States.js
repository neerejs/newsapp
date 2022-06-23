
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const States = () => {

    //const [states, setState] = useState([]);
    const [states, setState] = useState([]);

    useEffect(() => {
        getDevices();
    })

    const getDevices = async () => {
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "RzJudWc2V1M4N3hDWlBST3RrMVlQQkdlQkhtc3JRNkp4NEgycWs1eA==");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };


        const fetchResponse = await fetch('https://api.countrystatecity.in/v1/countries/US/states', requestOptions);
        const data = await fetchResponse.json();
        setState(data)


    }

    const getContents = () => {

        const contentsArray = [];

        states.forEach((item, ind) => {
            contentsArray.push(
                <>


                    <option value={item.name}>{item.name}</option>

                </>
            )
        })

        return contentsArray;
    }






    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form.Select aria-label="Default select example">

                            <option>Select the Car Model</option>
                            {getContents()}

                        </Form.Select>
                    </Col>
                </Row>
            </Container>




        </>
    );
}

export default States;