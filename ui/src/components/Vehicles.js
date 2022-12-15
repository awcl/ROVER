// import NavigationBar from "./NavigationBar";
import * as React from 'react';
import { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import VehicleCard from './VehicleCard';
import config from '../config';
import NavigationBar from '../components/NavigationBar';
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
                        <Grid item key={vehicle.id} xs={12} md={4} lg={3}>
                            <VehicleCard vehicle={vehicle} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </>
    );
}



export default Vehicles;

// const Vehicles = () => {

//     return (
//         <>
//             <NavigationBar />
//             <Grid sx={{ flexGrow: 1 }} container spacing={2}>


//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image="../assets/19ChevroletExpress.jpg"
//                     alt="CAR 1"
//                 />
//                 <Button size="small"><CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         CAR 1
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         THIS CAR HOLDS 4 PASSENGERS
//                         -MAZDA M5 -
//                         TOTAL AVAILABLE: 5
//                     </Typography>
//                 </CardContent>
//                 </Button>
//             </Card>

//             </Grid>

//             <Grid sx={{ flexGrow: 1}} container spacing={2}>

//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image="CAR IMAGE"
//                     alt="CAR 2"
//                 />
//                 <Button size="small"><CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         CAR 2
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         THIS CAR HOLDS 4 PASSENGERS
//                         -MAZDA M5 -
//                         TOTAL AVAILABLE: 2
//                     </Typography>
//                     </CardContent>
//                 </Button>
//                 </Card>
//             </Grid>

//             <Grid sx={{ flexGrow: 1}} container spacing={2}>

//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image="CAR IMAGE"
//                     alt="CAR 3"
//                 />
//                 <Button size="small"><CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         CAR 3
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         THIS CAR HOLDS 3 PASSENGERS
//                         -MAZDA M5 -
//                         TOTAL AVAILABLE: 1
//                     </Typography>



//                 </CardContent>
//                 </Button>
//             </Card>
//             </Grid>


//             <Grid sx={{ flexGrow: 1}} container spacing={2}>

//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image="CAR IMAGE"
//                     alt="CAR 4"
//                 />
//                 <Button size="small"><CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         CAR 4
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         THIS CAR HOLDS 4 PASSENGERS
//                         -MAZDA M5 -
//                         TOTAL AVAILABLE: 2
//                     </Typography>
//                 </CardContent>
//                 </Button>
//             </Card>
//             </Grid>




//             <Grid sx={{ flexGrow: 1}} container spacing={2}>

//             <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image="CAR IMAGE"
//                     alt="CAR 5"
//                 />
//                 <Button size="small"><CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         CAR 5
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         THIS CAR HOLDS 5 PASSENGERS
//                         -MAZDA M5 -
//                         TOTAL AVAILABLE: 5
//                     </Typography>



//                 </CardContent>
//                 </Button>
//             </Card>
//             </Grid>

//         </>
//     );
// }

// export default Vehicles;
