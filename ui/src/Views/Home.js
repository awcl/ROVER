import { useNavigate } from "react-router";
import React, { useState, useEffect, useContext } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Context from "../components/Context";
import config from '../config';
import { Button } from '@mui/material';
import nonauth from '../assets/nonauth.mp4';
import nonauthP from '../assets/nonauth.png';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Home = () => {
  const { session } = useContext(Context);
  let navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [tablePageSize, setTablePageSize] = useState(15);
  const [notifications, setNotifications] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);

  const columns = [
    { field: 'id', headerName: 'Res ID', flex: .2, width: 50 },
    { field: 'vehicle_id', headerName: 'Veh ID', flex: .2, minWidth: 50 },
    { field: 'rank', headerName: 'Rank', flex: .2, width: 130 },
    { field: 'first_name', headerName: 'First', flex: .3, minWidth: 50 },
    { field: 'last_name', headerName: 'Last', flex: .3, minWidth: 50 },
    { field: 'start_date', headerName: 'Start', flex: .3, minWidth: 50 },
    { field: 'end_date', headerName: 'End', flex: .3, minWidth: 50 },
    { field: 'status', headerName: 'Status', flex: .3, minWidth: 100 }
  ]

  useEffect(() => {
    fetch(`${API_URL}/reservation/merged`)
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, [])

  useEffect(() => {
    if (reservations.length) {
      let filteredReservations = reservations.filter(x => (x.username === session.username) && x.description)
      if (filteredReservations.length) {
        setNotifications(filteredReservations);
        setAlertOpen(true);
      }
    }
  }, [reservations])

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{ backgroundColor: '#1f2024' }} >
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <div className="content">
      {session.admin ? <div className="admin">
        <h1>ACCOUNT: ADMIN</h1>
        ADMINS CAN ONLY SEE THIS PAGE<br />
        ADMIN STUFF GOES HERE<br />
        👀
      </div>
        : session.id ? <div className="user">
          <h1>ACCOUNT: USER</h1>
          Pending Reservations
          {notifications.length && <div className="alertBox" style={alertOpen ? { display: "block" } : { display: "none" }}>
            <div>
              {notifications.map(x =>
              (<><div>
                Reservation #{x.id} has been <span style={x.status === 'denied' ? { color: "red" } : { color: "green" }}> {x.status}</span> with the admin remark:
              </div>
                <div style={{ color: "#292929" }}>"{x.description}"</div><br /></>))}
            </div>
            <center><br />
              <Button className="notificationButton" sx={{ width: "50%" }} variant="contained" color="secondary" margin="normal" onClick={() => setAlertOpen(false)}>
                Mark as Read
              </Button>
            </center>
          </div>
          }
          <DataGrid
            components={{ Toolbar: CustomToolbar }}
            align="left"
            className="Result-Table"
            rows={reservations.filter(x => x.username === session.username)}
            columns={columns}
            pageSize={tablePageSize}
            onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            pagination
            autoHeight
            {...reservations.filter(x => x.username === session.username)}
            onSortModelChange={(model) => setSortModel(model)}
            sortModel={sortModel}
            getRowHeight={() => 'auto'}
            disableSelectionOnClick
            onCellClick={(params, event) => {
              if (!event.ctrlKey) {
                event.defaultMuiPrevented = true;
                navigate(`/reservationdetails/${params.row.id}`)
              }
            }
            }
          />
        </div> :
          <div className='content' style={{ overflow: "hidden" }}>
            <div className="overlay"></div>
            <video src={nonauth} autoPlay loop muted poster={nonauthP} />
            <div className="landContent"><h1>You're Not Logged In</h1></div>
          </div>}
    </div>
  )
}

export default Home;