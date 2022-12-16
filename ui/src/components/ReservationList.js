import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
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

const handleApprove = async (id) => {
  console.log('approve: ', id);
  //fetch(`${API_URL}/reservation/${id}`, { method: 'PATCH'})
  //.then(/* NAVIGATE TO THIS PAGE TO REFRESH POSSIBLY*/)
  //.catch(e => console.log(e))
}

const handleDeny = async (id) => {
  console.log('deny: ', id);
  //fetch(`${API_URL}/reservation/${id}`, { method: 'DELETE'})
  //.then(/* NAVIGATE TO THIS PAGE TO REFRESH POSSIBLY*/)
  //.catch(e => console.log(e))
}

///would a join query query be the best way to do this?
//
const columns = [
  { field: 'id', headerName: 'Res ID', flex: .2, width: 50 },
  { field: 'vehicle_id', headerName: 'Veh ID', flex: .4, minWidth: 50 },
  { field: 'plate_number', headerName: 'Plate', flex: .4, minWidth: 50 },
  { field: 'description', headerName: 'Vehicle Description', flex: .5, minWidth: 50 },
  { field: 'vehicle_type', headerName: 'Vehicle Type', flex: .4, minWidth: 50 },
  { field: 'location', headerName: 'Parking Lot', flex: .5, minWidth: 50 },
  { field: 'rank', headerName: 'Rank', flex: .2, width: 130 },
  { field: 'first_name', headerName: 'First', flex: .3, minWidth: 50 },
  { field: 'last_name', headerName: 'Last', flex: .3, minWidth: 50 },
  { field: 'start_date', headerName: 'Start', flex: .3, minWidth: 50 },
  { field: 'end_date', headerName: 'End', flex: .3, minWidth: 50 },
  {
    field: 'Actions', flex: .3, width: 130, renderCell: (cellValues) => {
      return (
        <Stack direction="row" spacing={1}>
            <Tooltip title="Approve">
          <IconButton
            onClick={(e) => {handleApprove(cellValues.id)}}
          >
            <CheckCircleIcon sx={{ color: "#00D100" }} />
          </IconButton>
            </Tooltip>
            <Tooltip title="Deny">
          <IconButton
            onClick={(e) => {handleDeny(cellValues.id)}}
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

  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc"}]);
  const [tablePageSize, setTablePageSize] = useState(5);
  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          className="Result-Table"
          rows={reservations}
          columns={columns}
          pageSize={tablePageSize}
          initialState={{ pagination: { pageSize: tablePageSize } }}
          onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
          rowPerPageOptions={[5, 10, 20]}
          onSortModelChange={(model) => setSortModel(model)}
          getRowHeight={() => 'auto'}
          disableSelectionOnClick
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