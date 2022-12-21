import React, { useState, useContext, useEffect } from 'react';
import { Container, Button, Grid, Paper, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import config from '../config';
import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const ReservationPage = () => {
  let { id } = useParams();
  // define initial state
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);
  const [type, setType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rank, setRank] = useState('');
  const [email, setEmail] = useState('');
  const [start, setStart] = useState(dayjs(new Date()));
  const [end, setEnd] = useState(dayjs(new Date()));
  const [organization, setOrganization] = useState('');
  const [passengers, setpassengers] = useState('');
  const [notes, setNotes] = useState();
  const { session } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    !session.username && navigate('/home')
  }, [])

  // handle changes to form fields
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send reservation details to server or database
    console.log("vehID", id)
    try {
       await fetch(`${API_URL}/reservation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vehicle_id: +id,
          member_id: document.cookie.split('=')[1],
          start_date: start,
          end_date: end
        })
      })
    } catch (e) { console.log(e) }
    navigate('/reservations/added')
  }

  return (
      <div className="content">
        <Container maxWidth="sm">
          <Grid container spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 5 }}>
                <form onSubmit={handleSubmit}>
                  <h1>Create Reservation</h1>
                  {errorMessage && <div className='failed'>{errorMessage}</div>}
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        value={session.first_name}
                        disabled


                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        value={session.last_name}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Rank"
                        variant="outlined"
                        value={session.rank}
                        disabled
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Organization"
                      variant="outlined"
                      value={session.organization_id}
                      disabled
                    />
                  </Grid> */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="POC Email"
                        variant="outlined"
                        value={session.email}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="Start Date"
                          value={start}
                          onChange={(picked) => {
                            if (picked && !isNaN(picked.$y) && !isNaN(picked.$M) && !isNaN(picked.$D)) {
                              console.log(picked)
                              setStart(`${picked.$y}-${picked.$M + 1}-${picked.$D}`);
                            }
                          }}
                          renderInput={(params) => <TextField fullWidth {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="End Date"
                          value={end}
                          onChange={(picked) => {
                            if (picked && !isNaN(picked.$y) && !isNaN(picked.$M) && !isNaN(picked.$D)) {
                              console.log(picked)
                              setEnd(`${picked.$y}-${picked.$M + 1}-${picked.$D}`);
                            }
                          }}
                          renderInput={(params) => <TextField fullWidth {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    {/* <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Status"
                      variant="outlined"
                      value="pending"
                      disabled
                    />
                  </Grid> */}
                    {/* <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Additional Notes/Justification"
                      variant="outlined"
                      value={notes}
                      onChange={(e) => { }}
                    />
                  </Grid> */}
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                      // disabled={!username || !password || password !== confirmPassword}
                      >
                        Submit
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
  );
};
export default ReservationPage;