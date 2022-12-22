import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Grid, Button } from '@mui/material';
import VehicleCard from './VehicleCard';
import config from '../config';
import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [display, setDisplay] = useState([]);
    const { session } = useContext(Context);
    const filter = () => { setDisplay(filtered) }
    const all = () => { setDisplay(vehicles); }

    useEffect(() => {
        fetch(`${API_URL}/vehicle`)
            .then(response => response.json())
            .then(data => {
                setFiltered(data.filter(x => x.organization_id === session.organization_id))
                setVehicles(data)
                setDisplay(data)
            })
    }, []);

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
        </div>
    );
}

export default Vehicles;