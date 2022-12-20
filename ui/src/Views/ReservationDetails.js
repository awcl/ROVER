import React, { useState, useEffect, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import config from '../config';
// import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

function ReservationDetails() {
    const [details, setDetails] = useState({});
    const [remark, setRemark] = useState('');
    let { id } = useParams();
    const navigate = useNavigate();

    // fetch details of a single merged reservation
    useEffect(() => {
        fetch(`${API_URL}/reservation/merged/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setDetails(data[0]);
                console.log(data[0]);
            });
    }, []);

    const handleApprove = async () => {
        console.log('approved: ', id);
        fetch(`${API_URL}/reservation/approve/${id}`, { method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ description: remark})})
          .catch(e => console.log(e));
          navigate('/reservationqueue')
          // navigate to reservation queue page

      }

      const handleDeny = async () => {
        console.log('denied: ', id);
        fetch(`${API_URL}/reservation/deny/${id}`, { method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ description: remark})})
          .catch(e => console.log(e));
          navigate('/reservationqueue')
      }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`${API_URL}/reservation/merged/${id}`)
    //         const data = await response.json();
    //         setDetails(data);

    //     }
    //     fetchData();
    // }, []);
    return (
        <div className="content">
            <h1>Request Details</h1>
            <div>
                <h1>{details.reservation_id}</h1>
                <h1>{details.vehicle_id}</h1>
                <h1>{details.start_date}</h1>
                <h1>{details.end_date}</h1>
                <h1>{details.first_name}</h1>
                <h1>{details.last_name}</h1>
                <h1>{details.email}</h1>
                <label for="remark">IM A LABEL</label>
                <input id="remark" type="text" placeholder="Remarks" onChange={(e)=> setRemark(e.target.value)} onBlur={(e) => {e.target.value=e.target.value.trim()}} defaultValue={details.description}></input>
                <button onClick={()=>{handleApprove()}}>APPROVE</button>
                <button onClick={()=>{handleDeny()}}>DENY</button>
            </div>
        </div>
    )
}

// navigate
// onCellClick={(params, event) => {
//     console.log(params.row)
//     if (!event.ctrlKey) {
//       event.defaultMuiPrevented = true;
//       navigate(`/reservationdetails/${params.row.id}`)
//     }
//   }
// }


export default ReservationDetails;