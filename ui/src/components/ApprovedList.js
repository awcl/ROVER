import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import config from '../config';
import dayjs from 'dayjs';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const ApprovedList = () => {
  let navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [tablePageSize, setTablePageSize] = useState(15);
  // const handleApprove = async (id) => {
  //   console.log('approved: ', id);
  //   fetch(`${API_URL}/reservation/${id}`, { method: 'PATCH' })
  //     .then(navigate('/reservations'))
  //     .catch(e => console.log(e));
  // }
  // const handleDeny = async (id) => {
  //   console.log('denied: ', id);
  //   fetch(`${API_URL}/reservation/${id}`, { method: 'DELETE' })
  //     .then(navigate('/reservations'))
  //     .catch(e => console.log(e));
  // }

  const columns = [
    { field: 'id', headerName: 'Res ID', flex: .2, width: 50 },
    { field: 'vehicle_id', headerName: 'Veh ID', flex: .2, minWidth: 50 },
    { field: 'vehicle_type', headerName: 'Vehicle Type', flex: .3, minWidth: 50 },
    { field: 'rank', headerName: 'Rank', flex: .2, width: 130 },
    { field: 'first_name', headerName: 'First', flex: .3, minWidth: 50 },
    { field: 'last_name', headerName: 'Last', flex: .3, minWidth: 50 },
    {
      field: 'start_date', headerName: 'Start', flex: .3, minWidth: 50,
      valueFormatter: params => dayjs(params?.value).format("YYYY-MM-DD")
    },
    {
      field: 'end_date', headerName: 'End', flex: .3, minWidth: 50,
      valueFormatter: params => dayjs(params?.value).format("YYYY-MM-DD")
    },
    {
      field: 'status', headerName: 'Status', flex: .3, minWidth: 100,
      renderCell: (params) => (
        <div>
          {params.value === 'approved' ? <CheckCircleIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'red' }} />}
        </div>
      )
    },
  ]

  useEffect(() => {
    fetch(`${API_URL}/reservation/merged`)
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, [])

  function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{ backgroundColor: '#1f2024' }} >
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <div className="content">
      <h1>Approved Reservations</h1>
      <DataGrid
        components={{ Toolbar: CustomToolbar }}
        align="left"
        className="Result-Table"
        rows={reservations.filter(x => x.status === 'approved')}
        columns={columns}
        pageSize={tablePageSize}
        onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        pagination
        autoHeight
        {...reservations.filter(x => x.status === 'approved')}
        onSortModelChange={(model) => setSortModel(model)}
        sortModel={sortModel}
        getRowHeight={() => 'auto'}
        disableSelectionOnClick
        onCellClick={(params, event) => {
          if (!event.ctrlKey) {
            event.defaultMuiPrevented = true;
            navigate(`/reservationdetails/${params.row.id}`)
          }
        }}
      />
    </div>
  )
}

export default ApprovedList;