import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography, Container } from '@mui/material';


const VehicleCard = ({ vehicle }) => {
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
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