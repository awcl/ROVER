import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
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
import { margin } from "@mui/system";
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const ManageUsers = () => {
  let navigate = useNavigate();

  const handleApprove = async (id) => {
    console.log('admin: ', id);
    fetch(`${API_URL}/member/admin/${id}`, { method: 'PATCH' })
      .then(navigate('/ManageUsers'))
      .catch(e => console.log(e));
  }

  const handleDeny = async (id) => {
    console.log('unadmin: ', id);
    fetch(`${API_URL}/member/unadmin/${id}`, { method: 'PATCH' })
      .then(navigate('/ManageUsers'))
      .catch(e => console.log(e));
  }

  const columns = [
    { field: 'id', headerName: 'User ID', flex: .2, width: 50 },
    { field: 'rank', headerName: 'Rank', flex: .2, width: 50 },
    { field: 'first_name', headerName: 'First', flex: .3, minWidth: 50 },
    { field: 'last_name', headerName: 'Last', flex: .3, minWidth: 50 },
    { field: 'email', headerName: 'Email', flex: .3, minWidth: 50 },
    { field: 'username', headerName: 'Username', flex: .3, minWidth: 50 },
    { field: 'admin', headerName: 'Admin?', flex: .3, minWidth: 50 },
  ]


  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/member`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])



  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [tablePageSize, setTablePageSize] = useState(15);

  return (
    <div className="content">
      Manage Users
      <DataGrid
        align="left"
        className="Result-Table"
        rows={users}
        columns={columns}
        pageSize={tablePageSize}
        // initialState={{ pagination: { pageSize: tablePageSize } }}
        onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        pagination
        {...users}
        autoHeight
        onSortModelChange={(model) => setSortModel(model)}
        sortModel={sortModel}
        getRowHeight={() => 'auto'}
        disableSelectionOnClick
        onCellClick={(params, event) => {
          console.log(params.row)
          if (!event.ctrlKey) {
            event.defaultMuiPrevented = true;
            navigate(`/memberdetails/${params.row.id}`)
          }}}
      />
    </div>
  )
}

export default ManageUsers;