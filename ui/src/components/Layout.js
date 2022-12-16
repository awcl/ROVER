import React, { useState, useContext } from 'react';
import Context from './Context';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemButton, List, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { ArrowRight, KeyboardArrowDown, Home, CarRental, BookOnline, CalendarMonth, PendingActions } from '@mui/icons-material';
import { useNavigate } from 'react-router';


/////NEEDS WORK, tomorrows problem////
// const data = [
//     { icon: <Home />, label: 'Home' },
//     { icon: <CarRental />, label: 'Vehicles' },
//     { icon: <BookOnline />, label: 'Reservations' },
//     { icon: <CalendarMonth />, label: 'Schedule' },
//     { icon: <PendingActions />, label: 'Pending Reservations' },
// ];


// const RoverNav = styled(List)({
//     '& .MuiListItemButton-root': {
//         paddingLeft: 24,
//         paddingRight: 24,
//     },
//     '& .MuiListItemIcon-root': {
//         minWidth: 0,
//         marginRight: 16,
//     },
//     '& .MuiSvgIcon-root': {
//         fontSize: 20,
//     },
// });


// const Layout = ({ children }) => {
//     const [open, setOpen] = useState(true);



//     return (
//         <Box sx={{ display: 'flex' }}>
//       <ThemeProvider
//         theme={createTheme({
//           components: {
//             MuiListItemButton: {
//               defaultProps: {
//                 disableTouchRipple: true,
//               },
//             },
//           },
//           palette: {
//             mode: 'dark',
//             primary: { main: 'rgb(102, 157, 246)' },
//             background: { paper: 'rgb(5, 30, 52)' },
//           },
//         })}
//             >
//                 <Paper elevation={0} sx={{ width: 240, borderRight: 0 }}>
//                     <RoverNav component="nav" disablePadding>
//                         <ListItemButton component="a" href="#">
//                             <ListItemIcon sx={{ fontSize: 20 }}>🛰️</ListItemIcon>
//                             <ListItemText
//                                 sx={{ my: 0.5 }}
//                                 primary="Rover"
//                                 primaryTypographyProps={{
//                                     fontSize: 20,
//                                     fontWeight: 'medium',
//                                     letterSpacing: 0.5,
//                                 }}
//                             />
//                         </ListItemButton>
//                         <Divider />
//                         <ListItemButton
//                             alignItems="flex-start"
//                             onClick={() => setOpen(!open)}
//                             sx={{
//                                 px: 3,
//                                 pt: 2.5,
//                                 pb: open ? 0 : 2.5,
//                                 '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
//                             }}
//                         >
//                             <ListItemText
//                                 primary="Dashboard"
//                                 primaryTypographyProps={{
//                                     fontSize: 15,
//                                     fontWeight: 'medium',
//                                     lineHeight: '22px',
//                                     mb: '2px',
//                                 }}
//                                 secondary="Vehicle, Reservation, Schedule, Pending Reservations"
//                                 secondaryTypographyProps={{
//                                     noWrap: true,
//                                     fontSize: 13,
//                                     lineHeight: '20px',
//                                     color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
//                                     transition: 'color 300ms',
//                                 }}
//                                 sx={{ my: 0.5 }}
//                             />
//                             <KeyboardArrowDown
//                                 sx={{
//                                     mr: -1,
//                                     opacity: 0,
//                                     transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
//                                     transition: 'all 300ms',
//                                 }}
//                             />
//                         </ListItemButton>
//                         {open &&
//                             data.map((item) => (
//                                 <ListItemButton key={item.label} component="a" href="#"
//                                     sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,0.5)' }}
//                                 >
//                                     <ListItemIcon sx={{ color: 'inherit' }}>
//                                         {item.icon}
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary={item.label}
//                                         primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
//                                     />
//                                 </ListItemButton>
//                             ))}

//                     </RoverNav>
//                 </Paper>
//             </ThemeProvider>
//             <Box>
//                     {children}
//                 </Box>
//         </Box>
//     );
// }


// export default Layout;


const drawerWidth = 240;

const Layout = ({ children }) => {
    //that junk lives in app.js f/now
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
                    <ListItemButton sx={{
                            justifyContent: 'center',
                            py: 2,
                            '&:hover, &:focus': { bgcolor: 'rgba(0,0,0,0.04)' },
                        }}
                        onClick={() => navigate(`/queue`)}>Pending Reservations</ListItemButton>
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

