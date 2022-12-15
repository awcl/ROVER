import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography, Container, Button, IconButton } from '@mui/material';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { useNavigate } from 'react-router-dom';


const VehicleCard = ({ vehicle }) => {
    const navigate = useNavigate();
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                    action={
                        <IconButton onClick={() => navigate(`/reservations/${vehicle.id}`)}>
                            <CalendarMonthTwoToneIcon />
                        </IconButton>
                    }
                    title={vehicle.vehicle_type}
                    subheader={vehicle.plate_number}
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