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

const ManageAdmins = () => {
  let navigate = useNavigate();


  const handleApprove = async (id) => {
    console.log('admin: ', id);
    fetch(`${API_URL}/member/admin/${id}`, { method: 'PATCH' })
      .then(navigate('/manageadmins'))
      .catch(e => console.log(e));
  }

  const handleDeny = async (id) => {
    console.log('unadmin: ', id);
    fetch(`${API_URL}/member/unadmin/${id}`, { method: 'PATCH' })
      .then(navigate('/manageadmins'))
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
    {
      field: 'Manage', flex: .4, renderCell: (cellValues) => {
        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="Approve">
              <IconButton
                onClick={(e) => {
                  console.log(cellValues.id)
                  handleApprove(cellValues.id)
                }}
              >
                <CheckCircleIcon sx={{ color: "#00D100" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Deny">
              <IconButton
                onClick={(e) => { handleDeny(cellValues.id) }}
              >
                <CancelIcon sx={{ color: "#FF0000" }} />
              </IconButton>
            </Tooltip>
          </Stack>
        )
      }

    },
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
    <>
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
          onSortModelChange={(model) => setSortModel(model)}
          getRowHeight={() => 'auto'}
          disableSelectionOnClick
          autoHeight
        />
    </>
  )
}

export default ManageAdmins;