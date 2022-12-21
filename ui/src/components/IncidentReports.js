import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const IncidentReports = () => {
  let navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', flex: .2, width: 50 },
    { field: 'incident_type', headerName: 'Type', flex: .2, minWidth: 50 },
    { field: 'Incident_location', headerName: 'Location', flex: .2, minWidth: 50 },
    { field: 'incident_date', headerName: 'Date', flex: .5, minWidth: 50 },
    { field: 'incident_time', headerName: 'Time', flex: .3, minWidth: 50 },
    { field: 'incident_description', headerName: 'Description', flex: .3, minWidth: 50 },
    { field: 'vehicle_id', headerName: 'Veh ID', flex: .2, width: 130 },
    { field: 'member_id', headerName: 'Mbr ID', flex: .3, minWidth: 50 }
  ]

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/incident_report`)
      .then((res) => res.json())
      .then((data) => setIncidents(data))
      .catch(e=>console.log(e))
  }, [incidents])

  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [tablePageSize, setTablePageSize] = useState(15);

  return (
    <div className="content">
      <h1>All Incidents</h1>
      <DataGrid
        align="left"
        className="Result-Table"
        rows={incidents}
        columns={columns}
        pageSize={tablePageSize}
        onPageSizeChange={(newPageSize) => setTablePageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        pagination
        autoHeight
        {...incidents}
        onSortModelChange={(model) => setSortModel(model)}
        sortModel={sortModel}
        getRowHeight={() => 'auto'}
        disableSelectionOnClick
        autoHeight
        // onCellClick={(params, event) => {
        //   console.log(params.row)
        //   if (!event.ctrlKey) {
        //     event.defaultMuiPrevented = true;
        //     navigate(`/incident/${params.row.id}`)
        //   }
        // }
        // }
      />
    </div>
  )
}

export default IncidentReports;