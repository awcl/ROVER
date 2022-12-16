// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar } from '@mui/material';


// const NavigationBar = () => {
//     const location = useLocation();
//     const [value, setValue] = useState(`${location.pathname}`);
//     const navigate = useNavigate();

//       // const [auth, setAuth] = React.useState(true);
//       const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleChange = (event, newValue) => {
//       navigate(`${newValue}`);
//       setValue(newValue);
//     };

//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     const handleMenu = (event) => {
//       setAnchorEl(event.currentTarget);
//     };

//     const LeftSections = [
//       { value: '/home/', label: 'Home', callback: () => { navigate('/home'); } },
//       { value: '/vehicles/', label: 'All Vehicles', callback: () => { navigate('/vehicles'); } },
//       { value: '/reservations/', label: 'Reservations', callback: () => { navigate('/reservations'); } },
//       { value: '/schedule/', label: 'Schedule', callback: () => { navigate('/reservations'); } },
//     ];


//     return (
//       <Box sx={{flexGrow: 1,}} width="100%">
//         <AppBar
//           sx={{ bgcolor: '#1f2024' }}
//           position="static"
//           width="100%">
//           <Toolbar variant="dense">
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               variant="scrollable"
//               scrollButtons="auto"
//             >
//               {LeftSections.map((tab, index) => <Tab sx={{ color: '#d2d2d2' }} value={tab.value} label={tab.label} key={`${index}`} />)}


//             {/* {auth && ( */}
//             <div >
//                 <IconButton justify="end"
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleMenu}
//                   color="inherit"
//                 >
//                   <AccountCircle sx={{ color: 'gray' }}  justifycontent="end"  />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                     justifycontent: "end"
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <MenuItem sx={{ color: 'gray' }} onClick={handleClose}>Profile</MenuItem>
//                   <MenuItem sx={{ color: 'gray' }} onClick={handleClose}>My Account</MenuItem>
//                   <MenuItem sx={{ color: 'gray' }} onClick={handleClose}>Log Out</MenuItem>
//                 </Menu></div>
//             {/* )} */}</Tabs>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     );
//   };

//   export default NavigationBar;