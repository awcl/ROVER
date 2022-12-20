import React, { useState, useContext } from 'react';
import Context from './Context';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import { useNavigate } from 'react-router';



const Navbar = () => {
    const navigate = useNavigate();
    const { session, setSession } = useContext(Context);

    return (
        <div className="navContainer">
            <List disablePadding>
                <Divider />
                <ListItemButton
                    sx={{
                        justifyContent: 'center',
                        py: .5,
                        '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                    }}
                    onClick={() => navigate(`/home`)}>
                    Home
                </ListItemButton>
                <ListItemButton
                    sx={{
                        justifyContent: 'center',
                        py: .5,
                        '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                    }}
                    onClick={() => navigate('/vehicles')}>
                    Vehicles
                </ListItemButton>
                {session.admin && <ListItemButton sx={{
                    justifyContent: 'center',
                    py: .5,
                    '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                }}
                    onClick={() => navigate(`/reservationqueue`)}>Queue</ListItemButton>}
                                    {session.admin && <ListItemButton sx={{
                    justifyContent: 'center',
                    py: .5,
                    '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                }}
                    onClick={() => navigate(`/reservations`)}>All Res's</ListItemButton>}
                {session.admin && <ListItemButton sx={{
                    justifyContent: 'center',
                    py: .5,
                    '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                }}
                    onClick={() => navigate(`/ManageUsers`)}>Manage Users</ListItemButton>}
                <ListItemButton
                    sx={{
                        justifyContent: 'center',
                        py: .5,
                        '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                    }}
                    onClick={() => navigate(`/schedule`)}>Schedule</ListItemButton>
                                    <ListItemButton
                    sx={{
                        justifyContent: 'center',
                        py: .5,
                        '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                    }}
                    onClick={() => navigate(`/incidentreport`)}>Incident Report</ListItemButton>
                <Divider />
                {session.username && <ListItemButton sx={{
                    justifyContent: 'center',
                    py: .5,
                    '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                }}
                    onClick={() => navigate('/account')}>Account</ListItemButton>}
                {session.username && <ListItemButton sx={{
                    justifyContent: 'center',
                    py: .5,
                    '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                }}
                    onClick={() => {
                        document.cookie = `ROVERid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
                        setSession({});
                        navigate('/Home');
                    }}>Log Out</ListItemButton>}
                {!session.username && <ListItemButton
                    sx={{
                        justifyContent: 'center',
                        py: .5,
                        '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                    }}
                    onClick={() => navigate('/login')}>Log In</ListItemButton>}
            </List>
        </div>
    );
}

export default Navbar;