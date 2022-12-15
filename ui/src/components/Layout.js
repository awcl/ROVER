import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemButton, List, ListItemIcon, ListItemText, Paper, IconButton, Tooltip  } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { ArrowRight, KeyboardArrowDown, Home, Settings, People, PermMedia, Dns, Public, CarRental, BookOnline, CalendarMonth, PendingActions } from '@mui/icons-material';

const data = [
    { icon: <Home />, label: 'Home' },
    { icon: <CarRental />, label: 'Vehicles' },
    { icon: <BookOnline />, label: 'Reservations' },
    { icon: <CalendarMonth />, label: 'Schedule' },
    { icon: <PendingActions />, label: 'Pending Reservations' },
];


const RoverNav = styled(List)({   
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});
    /*
 const SideBar = ({ children }) => {
    const [open, setOpen] = useState(true);


    return (
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider
                theme={createTheme({
                    components: {
                        MuiListItemButton: {
                            defaultProps: {
                                disableRipple: true,
                            },
                        },
                    },
                    palette: {
                        mode: 'dark',
                        primary: { main: 'rbg(102, 157, 246)' },
                        background: { paper: 'rgb(5, 30, 52)' },
                    },
                })}
            >
            <Paper elevation={0} sx={{ width: 240, borderRight: 0 }}>
                <RoverNav> component="nav" disablePadding>
                    <ListItemButton> component="a" href="#">
                        <ListItemIcon sx={{ fontSize: 20 }}>🛰️</ListItemIcon>
                        <ListItemText
                            sx={{ my: 0.5 }}
                            primary="Rover"
                            primaryTypographyProps={{
                                fontSize: 20,
                                fontWeight: 'medium',
                                letterSpacing: 0.5,                        
                            }}
                        />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton 
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                        px: 3,
                        pt: 2.5,
                        pb: open ? 0 : 2.5,
                        '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                    }}
                    >
                    <ListItemText
                        primary="Dashboard"
                        primaryTypographyProps={{
                            fontSize: 15,
                            fontWeight: 'medium',
                            lineHeight: '22px',
                            mb:'2px',
                        }}
                        secondary="Vehicle, Reservation, Schedule, Pending Reservations"
                        secondaryTypographyProps={{
                            noWrap: true,







    */


const drawerWidth = 240;

const Layout = ({ children }) => {


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
                            ROVER
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
                    <ListItemButton>Home</ListItemButton>
                    <ListItemButton>Vehicles</ListItemButton>
                    <ListItemButton>Reservations</ListItemButton>
                    <ListItemButton>Schedule</ListItemButton>
                    <ListItemButton>Pending Reservations</ListItemButton>
                    <Divider />
                    <ListItemButton>Account</ListItemButton>
                    <ListItemButton>Log Out</ListItemButton>
                    <ListItemButton>Log In</ListItemButton>

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


