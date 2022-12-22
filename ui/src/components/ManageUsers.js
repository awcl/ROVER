import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const ManageUsers = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [tablePageSize, setTablePageSize] = useState(15);

  function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{ backgroundColor: '#1f2024' }} >
        <GridToolbarExport />
      </GridToolbarContainer>
    );
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

  useEffect(() => {
    fetch(`${API_URL}/member`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])

  return (
    <div className="content">
      <h1>Manage Users</h1>
      <DataGrid
        components={{
          Toolbar: CustomToolbar
        }}
        align="left"
        className="Result-Table"
        rows={users}
        columns={columns}
        pageSize={tablePageSize}
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
          if (!event.ctrlKey) {
            event.defaultMuiPrevented = true;
            navigate(`/memberdetails/${params.row.id}`)
          }
        }}
      />
    </div>
  )
}

export default ManageUsers;
