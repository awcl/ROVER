import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function IncidentReport() {
  const classes = useStyles();
  const [incidentDetails, setIncidentDetails] = useState('');
  const [isDamage, setIsDamage] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // submit the incident report here
  }

  return (
    <div className="content">
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Incident Report
        </Typography>
        <TextField
          required
          id="incident-details"
          label="Incident Details"
          multiline
          rows={4}
          value={incidentDetails}
          onChange={event => setIncidentDetails(event.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={isDamage}
              onChange={event => setIsDamage(event.target.checked)}
            />
          }
          label="There is damage to the vehicle"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}