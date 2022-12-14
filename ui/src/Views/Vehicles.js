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
                <Button size="small"><CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        CAR 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        THIS CAR HOLDS 4 PASSENGERS
                        -MAZDA M5 -
                        TOTAL AVAILABLE: 5
                    </Typography>



                </CardContent>
                </Button>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="CAR IMAGE"
                    alt="CAR 2"
                />
                <Button size="small"><CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        CAR 2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        THIS CAR HOLDS 4 PASSENGERS
                        -MAZDA M5 -
                        TOTAL AVAILABLE: 2
                    </Typography>



                </CardContent>
                </Button>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="CAR IMAGE"
                    alt="CAR 3"
                />
                <Button size="small"><CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        CAR 3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        THIS CAR HOLDS 3 PASSENGERS
                        -MAZDA M5 -
                        TOTAL AVAILABLE: 1
                    </Typography>



                </CardContent>
                </Button>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="CAR IMAGE"
                    alt="CAR 4"
                />
                <Button size="small"><CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        CAR 4
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        THIS CAR HOLDS 4 PASSENGERS
                        -MAZDA M5 -
                        TOTAL AVAILABLE: 2
                    </Typography>



                </CardContent>
                </Button>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="CAR IMAGE"
                    alt="CAR 5"
                />
                <Button size="small"><CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        CAR 5
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        THIS CAR HOLDS 5 PASSENGERS
                        -MAZDA M5 -
                        TOTAL AVAILABLE: 5
                    </Typography>



                </CardContent>
                </Button>
            </Card>

        </>
    );
}

export default Vehicles;