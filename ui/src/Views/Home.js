import { useNavigate } from "react-router";
import React, { useState, useEffect, useContext } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Context from "../components/Context";
import config from '../config';
import { display } from "@mui/system";
import { Button } from '@mui/material';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Home = () => {
  const { session } = useContext(Context);
  let navigate = useNavigate();
  const handleApprove = async (id) => {
    console.log('approved: ', id);
    fetch(`${API_URL}/reservation/${id}`, { method: 'PATCH' })
      .then(navigate('/reservations'))
      .catch(e => console.log(e));
  }

  const handleDeny = async (id) => {
    console.log('denied: ', id);
    fetch(`${API_URL}/reservation/${id}`, { method: 'DELETE' })
      .then(navigate('/reservations'))
      .catch(e => console.log(e));
  }

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

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/reservation/merged`)
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, [])

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{ backgroundColor: '#1f2024' }} >
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [tablePageSize, setTablePageSize] = useState(15);
  const [notifications, setNotifications] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    if (reservations.length) {
      let filteredReservations = reservations.filter(x => (x.username === session.username) && x.description)
      if (filteredReservations.length) {
        setNotifications(filteredReservations);
        setAlertOpen(true);
      }
    }
  }, [reservations])

  return (
    <div className="content">
      {session.admin ? <><div className="admin">
        ACCOUNT: ADMIN

      </div></>
        :
        <><div className="user">
          ACCOUNT: USER
          Pending Reservations
          {notifications.length && (


            <div className="alertBox" style={alertOpen ? { display: "block" } : { display: "none" }}>
              <div>
                <div>
                  Reservation #{notifications[0].id} has been <span style={notifications[0].status === 'denied' ? { color: "red" } : { color: "green" }}>{notifications[0].status}</span> with the admin remark:
                </div>


                <div style={{ color: "#292929" }}>"{notifications[0].description}"</div>
              </div>
              <center><br /><Button className="notificationButton" sx={{ width: "50%" }} variant="contained" color="secondary" margin="normal" onClick={() => setAlertOpen(false)}>Mark as Read</Button></center>
            </div>
          )}
          <DataGrid
            components={{
              Toolbar: CustomToolbar
            }}
            align="left"
            className="Result-Table"
            rows={reservations.filter(x => x.username === session.username)}
            // rows={reservations.filter(x => !x.approved)}
            columns={columns}
            pageSize={tablePageSize}
            // initialState={{ pagination: { pageSize: tablePageSize } }}
            onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            pagination
            autoHeight
            // {...reservations.filter(x => !x.approved)}
            {...reservations.filter(x => x.username === session.username)}
            onSortModelChange={(model) => setSortModel(model)}
            sortModel={sortModel}
            getRowHeight={() => 'auto'}
            disableSelectionOnClick
            //autoPageSize
            onCellClick={(params, event) => {
              console.log(params.row)
              if (!event.ctrlKey) {
                event.defaultMuiPrevented = true;
                navigate(`/reservationdetails/${params.row.id}`)
              }
            }
            }
          />
        </div></>}
    </div >
  )
}

export default Home;
