import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Grid, Container } from '@mui/material';
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
                setFiltered(data.filter(x=>x.organization_id===session.organization_id))
                setVehicles(data)
            })
    }, []);

    const filter = () => {
        setFiltered(vehicles.filter(x=>x.organization_id===session.organization_id))
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
            <button onClick={() => {all()}}>All Vehicles</button>
            <button onClick={() => {filter()}}>My Org's Vehicles</button><br/><br/>
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