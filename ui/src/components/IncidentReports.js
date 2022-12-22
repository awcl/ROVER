import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import config from '../config';
import dayjs from 'dayjs';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const IncidentReports = () => {
  const [incidents, setIncidents] = useState([]);
  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [tablePageSize, setTablePageSize] = useState(15);

  const columns = [
    { field: 'id', headerName: 'ID', flex: .2, width: 50 },
    { field: 'incident_type', headerName: 'Type', flex: .2, minWidth: 50 },
    { field: 'Incident_location', headerName: 'Location', flex: .2, minWidth: 50 },
    {
      field: 'incident_date', headerName: 'Date', flex: .5, minWidth: 50,
      valueFormatter: params => dayjs(params?.value).format("YYYY-MM-DD")
    },
    { field: 'incident_time', headerName: 'Time', flex: .3, minWidth: 50 },
    { field: 'incident_description', headerName: 'Description', flex: .3, minWidth: 50 },
    { field: 'vehicle_id', headerName: 'Veh ID', flex: .2, width: 130 },
    { field: 'member_id', headerName: 'Mbr ID', flex: .3, minWidth: 50 }
  ]

  useEffect(() => {
    fetch(`${API_URL}/incident_report`)
      .then((res) => res.json())
      .then((data) => setIncidents(data))
      .catch(e => console.log(e))
  }, [incidents])

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
      />
    </div>
  )
}

export default IncidentReports;