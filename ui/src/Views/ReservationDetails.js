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
          .then(res => res.json())
          .then(data => setDetails(data[0]))
            .catch(e => console.log(e))
    }, []);



    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch(`${API_URL}/reservation/merged/${id}`)
    //             .then(res => res.json())
    //             .then(data => setDetails(data))
    //             .catch(e => console.log(e));
    //     }
    //     fetchData();
    // }, []);


    return (
        <div className="content">
            <h1>Reservation Details</h1>
            <p>Reservation ID: { details.id }  </p>
            <p>Vehicle ID: { details.vehicle_id } </p>
                <p>Start Date: { details.start_date } </p>
                <p>End Date: { details.end_date } </p>
                <p>Reservation Status: { details.reservation_status } </p>
                <p>Reservation Type:  { details.reservation_type } </p>
        </div>



    )

}

export default ReservationDetails;
