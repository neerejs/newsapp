import { Dropdown } from "bootstrap";
import { useState, useEffect } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'

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

        states.forEach((item,ind) => {
            contentsArray.push(
                <>
                    
                    <Dropdown.Item>{item.name}</Dropdown.Item>
                </>
            )
        })

        return contentsArray;
    }

    




    return (
        <>
            <DropdownButton title="US States">
            
               
                    {getContents()}
                
            </DropdownButton>
            
        </>
    );
}

export default States;