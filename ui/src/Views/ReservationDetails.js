import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config';
// import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;



function ReservationDetails() {
    const [details, setDetails] = useState();
    // const [error, setError] = useState();
    let { id } = useParams();
    // fetch details of a single merged reservation


    useEffect(() => {
        fetch(`${API_URL}/reservation/merged/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setDetails(data[0]);
                console.log(data[0]);
            });


    }, []);



    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`${API_URL}/reservation/merged/${id}`)
    //         const data = await response.json();
    //         setDetails(data);

    //     }
    //     fetchData();
    // }, []);




    return (
        <>
        {/* <h1>TEST</h1>
        {details.map((detail) => {
            return (
                <div>
                    <h1>{detail.reservation_id}</h1>
                    <h1>{detail.vehicle_id}</h1>
                    <h1>{detail.start_date}</h1>
                    <h1>{detail.end_date}</h1>
                    <h1>{detail.first_name}</h1>
                    <h1>{detail.last_name}</h1>
                    <h1>{detail.email}</h1>
                    </div>
            )
        })} */}
        </>
    )
                    

    

                    
    



        

    
}

export default ReservationDetails;


