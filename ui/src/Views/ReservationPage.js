import React, { useState } from 'react';
import { Container, Button, Grid, Paper, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import { AdapterDayjs, DatePicker } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from '@date-io/dayjs';








const ReservationPage = () => {
  let { id } = useParams();
  console.log(id)
  // define initial state
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);
  const [type, setType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rank, setRank] = useState('');
  const [email, setEmail] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [organization, setOrganization] = useState('');
  const [passengers, setpassengers] = useState('');
  const [notes, setNotes] = useState(false);
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
  const navigate = useNavigate()

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
  const handleSubmit = () => {
    // send reservation details to server or database
  };
  const handleReservation = () => {
    // send reservation details to server or database
  };

  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <Container maxWidth="sm">
        <Grid container spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 5 }}>
              <form onSubmit={handleReservation}>
                <h1>Reservation</h1>
                {errorMessage && <div className='failed'>{errorMessage}</div>}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      value={firstName}
                      onChange={(e) => { }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => { }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Rank"
                      variant="outlined"
                      value={rank}
                      onChange={(e) => { }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Organization"
                      variant="outlined"
                      value={organization}
                      onChange={(e) => { }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="POC Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => { }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Start Date"
                        value={value}
                        onChange={(picked) => {
                          setStart(picked);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="End Date"
                        value={value}
                        onChange={(picked) => {
                          setEnd(picked);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Number of Passengers"
                      variant="outlined"
                      value={passengers}
                      onChange={(e) => { }}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Additional Notes/Justification"
                      variant="outlined"
                      value={notes}
                      onChange={(e) => { }}
                    /> */}
                  {/* </Grid> */}
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
      {/* <form onFinish={handleSubmit}>
        <input type="text"
          label='Date'
          rules={[{ required: true, message: 'Please enter a date for your reservation' }]}
        >
          <Input value={date} onChange={handleDateChange} />
        </input>
        <input type="text"
          label='Time'
          rules={[{ required: true, message: 'Please enter a time for your reservation' }]}
        >
          <Input value={time} onChange={handleTimeChange} />
        </input>
        <input type="text"
          label='Guests'
          rules={[{ required: true, message: 'Please enter the number of guests' }]}
        >
          <Input value={guests} onChange={handleGuestsChange} />
        </input>
        <input
          label='Type'
          rules={[{ required: true, message: 'Please select a type for your reservation' }]}
        >
          <Input value={type} onChange={handleTypeChange} />
        </input>
        <input>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </input>
      </form> */}
    </>
  );
};
export default ReservationPage;