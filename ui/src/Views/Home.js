import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Vehicles from '../components/Vehicles';
import Context from '../components/Context';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Home = () => {
  const [details, setDetails] = useState({});
  const { session } = useContext(Context);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/reservation/merged/${id}`)
        .then(response => response.json())
        .then(data => setDetails(data[0]));
}, []);

  return (
    <div className="content">
      <h1> Notification's</h1>
    </div>
    <h2>{details.reservation_id}</h2>
    <h2>{details.vehicle_id}</h2>
    <h2>{details.start_date}</h2>
    <h2>{details.end_date}</h2>

  )
}

export default Home;

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
