import React, { useState, useEffect, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import config from '../config';
import { TextField, Button, Card, CardHeader, CardContent, Typography, MenuItem, Select } from '@mui/material';
// import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

function ReservationDetails() {
    const [details, setDetails] = useState({});
    const [remark, setRemark] = useState('');
    const [status, setStatus] = useState('');
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
        console.log('approved :  ', id);
        fetch(`${API_URL}/reservation/approve/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ description: remark }) })
            .catch(e => console.log(e));
        navigate('/reservationqueue')
        // navigate to reservation queue page

    }

    const handleDeny = async () => {
        console.log('denied :  ', id);
        fetch(`${API_URL}/reservation/deny/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ description: remark }) })
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
            <Card elevation={3}
                sx={{
                    width: '80%', margin: '20px auto',


                }}

            >
                <CardHeader />
                <Typography variant="h5">Reservation Details</Typography>
                <div className='Top'
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}

                >
                    <div className='Left'
                    //add color contrast and and justify left. 
                    >
                        <CardContent>
                            <Typography variant="h6">Reservation ID: {details.id}</Typography>
                            <Typography variant="h6">Vehicle ID: {details.vehicle_id}</Typography>
                            <Typography variant="h6">Vehicle Type: {details.vehicle_type}</Typography>
                            <Typography variant="h6">Start Date: {details.start_date}</Typography>
                            <Typography variant="h6">End Date: {details.end_date}</Typography>
                            <Typography variant="h6">First Name: {details.first_name}</Typography>
                            <Typography variant="h6">Last Name: {details.last_name}</Typography>
                            <Typography variant="h6">Email: {details.email}</Typography>
                        </CardContent>

                    </div>
                    <div className='Right'>
                        {/* once we get the details squared away, condition to display T-F value
                         ? <>✅</> : <>❌</>
                        */}
                        <Typography variant="h6">Van Cert: {details.is_van_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Truck Cert: {details.is_truck_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Sedan Cert: {details.is_sedan_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">5-Ton Cert: {details.is_5_ton_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">AMRAP Cert: {details.is_amrap_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">HMMWV Cert: {details.is_hmmwv_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Mobilizer Cert: {details.is_mobilizer_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Patrol Cert: {details.is_patrol_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Tank Cert: {details.is_tank_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Semi Cert: {details.is_semitruck_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Landrover Cert: {details.is_landrover_cert === true ? <>✅</> : <>❌</>}</Typography>
                        <Typography variant="h6">Forklift Cert: {details.is_forklift_cert === true ? <>✅</> : <>❌</>}</Typography>


                    </div>
                </div>
                <div className='Bottom'>
                    <Select
                        labelId="status"
                        id="status"
                        value={status}
                        label="Status"
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="denied">Denied</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                    </Select>
                    <TextField id="remark" label="Remarks" onChange={(e) => setRemark(e.target.value)} onBlur={(e) => { e.target.value = e.target.value.trim() }} defaultValue={details.description}></TextField>
                    <Button onClick={() => { handleApprove() }}>APPROVE</Button>
                    <Button onClick={() => { handleDeny() }}>DENY</Button>
                </div>
            </Card>
        </div>
    )
}

export default ReservationDetails;


// return (
//     <div className="content">
//         <h1>Request Details</h1>
//         <div>
//             <h1>{details.reservation_id}</h1>
//             <h1>{details.vehicle_id}</h1>
//             <h1>{details.start_date}</h1>
//             <h1>{details.end_date}</h1>
//             <h1>{details.first_name}</h1>
//             <h1>{details.last_name}</h1>
//             <h1>{details.email}</h1>
//             <label for="remark">IM A LABEL</label>
//             <input id="remark" type="text" placeholder="Remarks" onChange={(e)=> setRemark(e.target.value)} onBlur={(e) => {e.target.value=e.target.value.trim()}} defaultValue={details.description}></input>
//             <button onClick={()=>{handleApprove()}}>APPROVE</button>
//             <button onClick={()=>{handleDeny()}}>DENY</button>
//         </div>
//     </div>
// )
// }