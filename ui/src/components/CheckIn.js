import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': { margin: theme.spacing(1), width: 200 },
  },
}));

export default function CheckInForm() {
  const classes = useStyles();

  return (
    <div className="content">
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5" gutterBottom>
          Car Rental Check-In
        </Typography>
        <div>
          <TextField
            required
            id="name"
            label="Name"
            defaultValue="John Smith"
          />
          <TextField
            required
            id="reservation-number"
            label="Reservation Number"
            defaultValue="123456"
          />
          <TextField
            required
            id="pickup-location"
            label="Pick-Up Location"
            defaultValue="Chicago O'Hare Airport"
          />
          <TextField
            required
            id="pickup-date"
            label="Pick-Up Date"
            type="date"
            defaultValue="2020-01-01"
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="I have read and agree to the terms and conditions"
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}