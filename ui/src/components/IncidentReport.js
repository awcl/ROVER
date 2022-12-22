import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Paper, MenuItem } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const IncidentReport = () => {
  const [incidentType, setIncidentType] = useState('');
  const [incidentLocation, setIncidentLocation] = useState('');
  const [incidentDate, setIncidentDate] = useState(dayjs(new Date()));
  const [value, setValue] = useState(dayjs(new Date()));
  const [incidentTime, setIncidentTime] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const navigate = useNavigate();
  const [vehicleIDs, setVehicleIDs] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/vehicle/ids`)
      .then(res => res.json())
      .then(data => {
        let working = []
        data.forEach(x => working.push(x.id))
        setVehicleIDs(working)
        console.log(working)
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/incident_report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vehicle_id: vehicleId,
          incident_type: incidentType,
          incident_location: incidentLocation,
          incident_date: incidentDate,
          incident_time: incidentTime,
          incident_description: incidentDescription,
          member_id: document.cookie.split('=')[1],
        })
      })
    } catch (e) { console.log(e) }
    navigate('/home')
  }

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={6} gap={2}>
            <Paper elevation={3} sx={{ p: 5 }}>
              <h1>Incident Report</h1>
              <TextField
                variant="outlined"
                label="Incident Type"
                value={incidentType}
                onChange={event => setIncidentType(event.target.value)}
                fullWidth
                margin='normal'
              />
              <TextField
                variant="outlined"
                label="Incident Location"
                value={incidentLocation}
                onChange={event => setIncidentLocation(event.target.value)}
                fullWidth
                margin='normal'
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Incident Time and Date"
                  value={value}
                  onChange={(picked) => {
                    if (picked && !isNaN(picked.$y) && !isNaN(picked.$M) && !isNaN(picked.$D)) {
                      setValue(picked);
                      console.log(value)
                      setIncidentDate(`${picked.$y}-${picked.$M + 1}-${picked.$D}`)
                      console.log(picked)
                      console.log(incidentDate)
                      console.log(incidentTime)
                    }
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
              <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={6}>
                  <TextField select size='small' sx={{ m: 1, minWidth: 225 }}
                    label="Vehicle ID"
                    id="select"
                    value={vehicleId}
                    onChange={event => setVehicleId(event.target.value)}
                    fullWidth
                    margin='normal'
                  >
                    {vehicleIDs.map((id) => (
                      <MenuItem key={id} value={id}>{id}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <TextField
                  variant="outlined"
                  label="Incident Description"
                  value={incidentDescription}
                  onChange={event => setIncidentDescription(event.target.value)}
                  fullWidth
                  multiline
                  rows={3}
                />
                <div>
                  <Button variant="contained" color="primary" type="submit" >
                    Submit
                  </Button>
                  <Button variant="contained" color="secondary" type="reset" >
                    Reset
                  </Button>
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default IncidentReport;