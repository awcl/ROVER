import React, { useContext } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography, IconButton, Button } from '@mui/material';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { useNavigate } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                    action={(document.cookie.split('=')[0] === 'ROVERid') ?
                        <IconButton onClick={() => navigate(`/reservations/vehicle/${vehicle.id}`)}>
                            <CalendarMonthTwoToneIcon sx={{ color: '#1976d2' }} />
                        </IconButton> : <Button variant="contained" color="secondary" margin="normal" onClick={() => { navigate('/login') }}>Login to Reserve</Button>
                    }
                    title={vehicle.vehicle_type.toUpperCase()}
                    subheader={vehicle.plate_number}
                    sx={{ color: 'rgb(92, 50, 230)', font: 'Roboto' }}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={require(`../assets/vehicle_${vehicle.id}.jpg`)}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {vehicle.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default VehicleCard;