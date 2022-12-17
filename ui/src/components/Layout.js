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
import { useNavigate } from 'react-router';

const Layout = ({ children }) => {
    const drawerWidth = 200;
    const navigate = useNavigate();
    const { session, setSession } = useContext(Context);

    return (
        <div>
            APP BAR
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            ROVER {session.username && <> ➡️ Hello {session.username} 🙂</>}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Divider />
                    <ListItemButton
                        sx={{
                            justifyContent: 'center',
                            py: 2,
                            '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                        }}
                        onClick={() => navigate(`/home`)}>
                        Home
                    </ListItemButton>
                    <ListItemButton
                        sx={{
                            justifyContent: 'center',
                            py: 2,
                            '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                        }}
                        onClick={() => navigate('/vehicles')}>
                        Vehicles
                    </ListItemButton>
                    <ListItemButton sx={{
                        justifyContent: 'center',
                        py: 2,
                        '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                    }}
                        onClick={() => navigate(`/reservations`)}>Reservations</ListItemButton>
                    <ListItemButton
                        sx={{
                            justifyContent: 'center',
                            py: 2,
                            '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                        }}
                        onClick={() => navigate(`/schedule`)}>Schedule</ListItemButton>
                    <Divider />
                    {session.username && <ListItemButton sx={{
                        justifyContent: 'center',
                        py: 2,
                        '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                    }}
                        onClick={() => navigate('/account')}>Account</ListItemButton>}
                    {session.username && <ListItemButton sx={{
                        justifyContent: 'center',
                        py: 2,
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
                            py: 2,
                            '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                        }}
                        onClick={() => navigate('/login')}>Log In</ListItemButton>}

                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3 }}
                >
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </div>
    );
}

export default Layout;