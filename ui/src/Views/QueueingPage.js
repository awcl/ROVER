import React, { useState, useContext, useEffect } from 'react';
import{ useNavigate } from 'react-router';
import Context from '../components/Context';

function QueueingPage() {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({});
  const { session } = useContext(Context);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!(document.cookie.split('=')[0] === 'ROVERid') || session.admin !== true) {
  //     console.log(session)
  //     navigate('/Home')
  //   }
  // },[])

  const handleSubmit = event => {
    event.preventDefault();
    // Add the new request to the list of pending requests
    setPendingRequests([...pendingRequests, newRequest]);
  };

  const handleApprove = request => {
    // Remove the approved request from the list of pending requests
    setPendingRequests(pendingRequests.filter(req => req.id !== request.id));
  };

  return ( // PATH/queue
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newRequest.name}
            onChange={event => setNewRequest({ ...newRequest, name: event.target.value })}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {pendingRequests.map(request => (
          <li key={request.id}>
            {request.name}
            <button onClick={() => handleApprove(request)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QueueingPage;