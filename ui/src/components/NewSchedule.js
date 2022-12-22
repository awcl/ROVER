import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { DataGrid,GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Schedule = () => {
    let navigate = useNavigate();
    // const handleApprove = async (id) => {
    //   console.log('approved: ', id);
    //   fetch(`${API_URL}/reservation/${id}`, { method: 'PATCH' })
    //     .then(navigate('/reservations'))
    //     .catch(e => console.log(e));
    // }
    const handleDelete = async (id) => {
      console.log('denied: ', id);
      fetch(`${API_URL}/reservation/${id}`, { method: 'DELETE' })
        .then(navigate('/reservations'))
        .catch(e => console.log(e));
    }

    const columns = [
      { field: 'id', headerName: 'Res ID', flex: .2, width: 50 },
      { field: 'vehicle_id', headerName: 'Veh ID', flex: .2, minWidth: 50 },
      { field: 'vehicle_type', headerName: 'Vehicle Type', flex: .3, minWidth: 50 },
      { field: 'rank', headerName: 'Rank', flex: .2, width: 130 },
      { field: 'first_name', headerName: 'First', flex: .3, minWidth: 50 },
      { field: 'last_name', headerName: 'Last', flex: .3, minWidth: 50 },
      { field: 'start_date', headerName: 'Start', flex: .3, minWidth: 50 },
      { field: 'end_date', headerName: 'End', flex: .3, minWidth: 50 },
      {
        field: 'Delete', flex: .4, renderCell: (cellValues) => {
          return (
              <Tooltip title="Delete">
                <IconButton
                  onClick={(e) => { handleDelete(cellValues.id) }}
                >
                  <CancelIcon sx={{ color: "#FF0000" }} />
                </IconButton>
              </Tooltip>
          )
        }

      },
      {field: 'approved',flex: .3, operatorValue: 'is', value:true, hide:true}
    ]

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
      fetch(`${API_URL}/reservation/merged`)
        .then((res) => res.json())
        .then((data) => setReservations(data));
    }, [])


  function CustomToolbar(){
        return (
          <GridToolbarContainer sx={{ backgroundColor: '#1f2024' }} >
            <GridToolbarExport />
          </GridToolbarContainer>
        );
  };

    const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
    const [tablePageSize, setTablePageSize] = useState(15);

    return (
      <div className="content">
      <h1>Approved Reservations</h1>
          <DataGrid
            align="left"
            className="Result-Table"
            rows={reservations.filter(x => x.status === 'approved')}
            columns={columns}
            pageSize={tablePageSize}
            // initialState={{ pagination: { pageSize: tablePageSize } }}
            onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            pagination
            {...reservations.filter(x => x.status === 'approved')}
            onSortModelChange={(model) => setSortModel(model)}
            getRowHeight={() => 'auto'}
            disableSelectionOnClick
            autoHeight
            components={{
              Toolbar: CustomToolbar
            }}
             filterModel={{
   items: [{ field: 'approved', operatorValue: 'is', value: true }],
}}
          //autoPageSize
          // onCellClick={(params, event) => {
          //   console.log(params.row)
          //   if (!event.ctrlKey) {
          //     event.defaultMuiPrevented = true;
          //     navigate(`/Details/${params.row.item_id}`)
          //   }
          // }}
          />
      </div>
    )

}

export default Schedule;