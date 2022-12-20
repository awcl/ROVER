import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
  FormControl,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

//use effect post to api to submit form


const IncidentReport = () => {
  const [incidentType, setIncidentType] = useState('');
  const [incidentLocation, setIncidentLocation] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentTime, setIncidentTime] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const navigate = useNavigate();
  const [vehicleIDs, setVehicleIDs] = useState([]);
  useEffect(()=>{
    fetch(`${API_URL}/vehicle/ids`)
      .then(res => res.json())
      .then(data => {
        let working=[]
        data.forEach(x=>working.push(x.id))
        setVehicleIDs(working)
        console.log(working)
      })
  },[])

  //handle form submit
  const handleSubmit = async (event) => {
      event.preventDefault();
     try {
      var res = await fetch(`${API_URL}/incident_report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // vehicle_id: +id,
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




  // {
  //     "incident_type": "totaled",
  //     "incident_location": "on-base",
  //     "incident_date": "Jan 5th, 2022",
  //     "incident_time": "req.body.incident_time",
  //     "incident_description" : "I got in an accident",
  //     "vehicle_id": 1,
  //     "member_id": 1
  //   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ p: 5 }}>
              <h1>Incident Report</h1>
              <TextField
                variant="outlined"
                label="Incident Type"
                value={incidentType}
                onChange={event => setIncidentType(event.target.value)}
              />
              <TextField
                variant="outlined"
                label="Incident Location"
                value={incidentLocation}
                onChange={event => setIncidentLocation(event.target.value)}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                          label="End Date"
                          value={end}
                          onChange={(picked) => {
                            if (picked && !isNaN(picked.$y) && !isNaN(picked.$M) && !isNaN(picked.$D)) { // have to buff that out
                              console.log(picked)                                                  // specifically test output JSON to push to X and Y
                              setEnd(`${picked.$y}-${picked.$M + 1}-${picked.$D}`);
                            }
                          }}
                          renderInput={(params) => <TextField fullWidth {...params} />}
                        />
                      </LocalizationProvider> */}
              <TextField
                variant="outlined"
                label="Incident Date"
                value={incidentDate}
                onChange={event => setIncidentDate(event.target.value)}
              />
              <TextField
                variant="outlined"
                label="Incident Time"
                value={incidentTime}
                onChange={event => setIncidentTime(event.target.value)}
              />
              <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">

              <Grid item xs={6}>
                <TextField select size='small' sx={{ m: 1, minWidth: 120 }}
                  label="Vehicle ID"
                  id="select"
                  value={vehicleId}
                  onChange={event => setVehicleId(event.target.value)}
                >
                  {vehicleIDs.map((id) => (
                    <MenuItem key={id} value={id}>VEHICLE {id}</MenuItem>
                  ))}
                </TextField>
              </Grid>

              <TextField
                variant="outlined"
                label="Incident Description"
                value={incidentDescription}
                onChange={event => setIncidentDescription(event.target.value)}
              />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="reset"
                  >
                  Reset
                </Button>

              </div>
                  </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </>

  )
}





export default IncidentReport;

