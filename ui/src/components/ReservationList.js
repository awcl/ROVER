import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Context from "./Context";
import { useSubmit } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// @mui/x-data-grid

const handleApprove = (id) => {
  console.log(id);
}

const handleDeny = (id) => {
  console.log(id);
}

///  columns for table TODO: add functionality to approve/deny buttons//figure how to get member and vehicle infomation into the table.

///would a join query query be the best way to do this?
//
const columns = [
  { field: 'id', headerName: 'ID', flex: .2, width: 50 },
  { field: 'rank', headerName: 'Rank', flex: .2, width: 130 },
  { field: 'vehicle_type', headerName: 'Vehicle Type', flex: .4, width: 120 },
  { field: 'description', headerName: 'Vehicle Description', flex: .5, width: 130 },
  { field: 'lastName', headerName: 'Last name', flex: .3, width: 130 },
  { field: 'start_date', headerName: 'Start Date', flex: .3, width: 130 },
  { field: 'end_date', headerName: 'End Date', flex: .3, width: 100 },
  {
    field: 'Actions', flex: .3, width: 130, renderCell: (cellValues) => {
      return (
        <Stack direction="row" spacing={1}>
            <Tooltip title="Approve">
          <IconButton
            onClick={() => handleApprove(cellValues.id)}
          >
            <CheckCircleIcon sx={{ color: "#00D100" }} />
          </IconButton>
            </Tooltip>
            <Tooltip title="Deny">
          <IconButton
            onClick={() => handleDeny(cellValues.id)}
          >
            <CancelIcon sx={{ color: "#FF0000" }} />
          </IconButton>
            </Tooltip>
        </Stack>
      )
    }

  },
]


const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  // const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/reservation/merged`)
    //.where ('columnX', y)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data)
      });
  }, [])
// "id": 1,
// "vehicle_id": 1,
// "member_id": 1,
// "start_date": "2023-11-25T00:00:00.000Z",
// "end_date": "2024-12-11T00:00:00.000Z",
// "approved": true,
// "first_name": "Santa",
// "last_name": "Claus",
// "email": "s.claus1@email.com",
// "rank": "SPC1",
// "username": "bbb",
// "password_hash": "$2b$12$hig73jSR/ccryE0pNivX7.SqN4DeovW1jXK7Drnq9QxxIKQgiTnA6",
// "organization_id": 1,
// "admin": true,
// "is_van_cert": true,
// "is_sedan_cert": false,
// "is_truck_cert": false,
// "vehicle_type": "van",
// "miles": "63400",
// "plate_number": "G34989",
// "description": "8 passenger van",
// "location": "P67-1"
  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc"}]);
  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          className="Result-Table"
          rows={reservations}
          columns={columns}
          pageSize={5}
          initialState={{ pagination: { pageSize: 5 } }}
          rowPerPageOptions={[5, 10, 20]}
          onSortModelChange={(model) => setSortModel(model)}
          getRowHeight={() => 'auto'}
          rowsPerPageOptions={[5]}
          autoHeight
          // onCellClick={(params, event) => {
          //   console.log(params.row)
          //   if (!event.ctrlKey) {
          //     event.defaultMuiPrevented = true;
          //     navigate(`/Details/${params.row.item_id}`)
          //   }
          // }}
        />
      </div>


    </>

  )
}

export default ReservationList;