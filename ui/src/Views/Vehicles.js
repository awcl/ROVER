import NavigationBar from "../components/NavigationBar";
import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';




const Vehicles = () => {

    return (
        <>
            <NavigationBar />

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="CAR IMAGE"
                    alt="CAR 1"
                />
                <CardContent><Button size="small">
                    <Typography gutterBottom variant="h5" component="div">
                        CAR 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        THIS CAR HOLDS 4 PASSENGERS
                        -MAZDA M5 -
                    </Typography>


                </Button>
                </CardContent>

            </Card>

        </>
    );
}

export default Vehicles;