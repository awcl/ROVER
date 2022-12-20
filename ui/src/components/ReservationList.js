// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router";
// import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
// import IconButton from '@mui/material/IconButton';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Stack from '@mui/material/Stack';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import EditIcon from '@mui/icons-material/Edit';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Context from "./Context";
// import { useSubmit } from "react-router-dom";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import Tooltip from '@mui/material/Tooltip';
// import config from '../config';
// import { margin } from "@mui/system";
// import { Container } from '@mui/material';
// const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// const ReservationList = () => {
//   let navigate = useNavigate();
//   const handleApprove = async (id) => {
//     console.log('approved: ', id);
//     fetch(`${API_URL}/reservation/${id}`, { method: 'PATCH' })
//       .then(navigate('/reservations'))
//       .catch(e => console.log(e));
//   }

//   const handleDeny = async (id) => {
//     console.log('denied: ', id);
//     fetch(`${API_URL}/reservation/${id}`, { method: 'DELETE' })
//       .then(navigate('/reservations'))
//       .catch(e => console.log(e));
//   }

//   const columns = [
//     { field: 'id', headerName: 'Res ID', flex: .2, width: 50 },
//     { field: 'vehicle_id', headerName: 'Veh ID', flex: .2, minWidth: 50 },
//     { field: 'plate_number', headerName: 'Plate', flex: .2, minWidth: 50 },
//     { field: 'description', headerName: 'Vehicle Description', flex: .5, minWidth: 50 },
//     { field: 'vehicle_type', headerName: 'Vehicle Type', flex: .3, minWidth: 50 },
//     { field: 'location', headerName: 'Parking Spot', flex: .3, minWidth: 50 },
//     { field: 'rank', headerName: 'Rank', flex: .2, width: 130 },
//     { field: 'first_name', headerName: 'First', flex: .3, minWidth: 50 },
//     { field: 'last_name', headerName: 'Last', flex: .3, minWidth: 50 },
//     { field: 'start_date', headerName: 'Start', flex: .3, minWidth: 50 },
//     { field: 'end_date', headerName: 'End', flex: .3, minWidth: 50 },
//   ]

//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     fetch(`${API_URL}/reservation/merged`)
//       .then((res) => res.json())
//       .then((data) => setReservations(data));
//   }, [reservations])


//   function CustomToolbar() {
//     return (
//       <GridToolbarContainer sx={{ backgroundColor: '#1f2024' }} >>
//       </GridToolbarContainer>
//     );
//   }

//   const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
//   const [tablePageSize, setTablePageSize] = useState(15);

//   return (
//     <div className="content">
//       Manage Reservations
//       <DataGrid
//       components={{
//         Toolbar: CustomToolbar
//         }}
//         align="left"
//         className="Result-Table"
//         rows={reservations.filter(x => !x.approved)}
//         columns={columns}
//         pageSize={tablePageSize}
//         // initialState={{ pagination: { pageSize: tablePageSize } }}
//         onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
//         rowsPerPageOptions={[5, 10, 25, 50, 100]}
//         pagination
//         autoHeight
//         {...reservations.filter(x => !x.approved)}
//         onSortModelChange={(model) => setSortModel(model)}
//         sortModel={sortModel}
//         getRowHeight={() => 'auto'}
//         disableSelectionOnClick
//         autoHeight

//         //autoPageSize
//         onCellClick={(params, event) => {
//           console.log(params.row)
//           if (!event.ctrlKey) {
//             event.defaultMuiPrevented = true;
//             navigate(`/reservationdetails/${params.row.id}`)
//           }
//         }
//         }
//       />
//     </div>
//   )
// }

// export default ReservationList;