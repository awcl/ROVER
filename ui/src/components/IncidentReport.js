import React, { useState } from 'react';
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

  /*

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


  */

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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                direction="row"
                justifyContent="center"
                alignItems="center">

              <Grid item xs={6}>
                <InputLabel id="label">Vehicle ID</InputLabel>
                <Select sx={{ m: 1, minWidth: 120 }}
                  labelId="vehicle ID"
                  id="select"
                  label="Vehicle ID"
                  value={vehicleId}
                  onChange={event => setVehicleId(event.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  </Select>




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
            </Grid>
            </Paper>
          </Grid>
        </Grid>
      </FormControl>
    </>

  )
}





export default IncidentReport;

