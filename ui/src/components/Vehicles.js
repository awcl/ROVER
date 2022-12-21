import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Grid, Container, Button } from '@mui/material';

import VehicleCard from './VehicleCard';
import config from '../config';

import Context from '../components/Context';

const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]); // all
    const [filtered, setFiltered] = useState([]); // mine
    const [display, setDisplay] = useState([]); // bucket
    const { session } = useContext(Context);
    useEffect(() => {
        fetch(`${API_URL}/vehicle`)
            .then(response => response.json())
            .then(data => {
                setFiltered(data.filter(x => x.organization_id === session.organization_id))
                setVehicles(data)
                setDisplay(data)
            })
    }, []);

    const filter = () => {
        setFiltered(vehicles.filter(x => x.organization_id === session.organization_id))
        setDisplay(filtered)
    }

    const all = () => {
        setDisplay(vehicles);
    }

    // if (display.length === 0) { // MAYBE THIS WILL FORCE DEFAULT?
    //     setDisplay(vehicles)
    // }

    return (
        <div className="content">
            <br /><Button variant="contained" color="secondary" margin="normal" onClick={() => { all() }}>All Vehicles</Button>
            {session.organization_id && <>&nbsp;<Button variant="contained" color="secondary" margin="normal" onClick={() => { filter() }}>Org {session.organization_id} Vehicles</Button></>}
            <Grid container spacing={3}>
                {display.map(vehicle => (
                    <Grid item key={vehicle.id} xs={10} md={4} lg={5}>
                        <VehicleCard vehicle={vehicle} />
                    </Grid>
                ))}
            </Grid>


            {/* <FormGroup>
            <Stack direction="row" spacing={1} alignItems="center">
        <Typography>All Vehicles</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>My Org's Vehicles</Typography>
      </Stack>
    </FormGroup> */}
        </div>


    );
}

export default Vehicles;