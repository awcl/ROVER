import * as React from 'react';
import { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import VehicleCard from './VehicleCard';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

// const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Vehicles = () => {
    const [vehicles, setVehicles] = React.useState([]);

    useEffect(() => {
        fetch(`${API_URL}/vehicle`)
            .then(response => response.json())
            .then(data => setVehicles(data));
    }, []);

    return (
        <>
            <div>
                {/* <NavigationBar /> */}
            </div>
            <Container>
                <Grid container spacing={4}>
                    {vehicles.map(vehicle => (
                        <Grid item key={vehicle.id} xs={10} md={4} lg={5}>
                            <VehicleCard vehicle={vehicle} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default Vehicles;