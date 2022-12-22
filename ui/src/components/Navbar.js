import React, { useContext } from 'react';
import Context from './Context';
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
                    sx={{ color: 'text.secondary', justifyContent: 'center' }}
                    onClick={() => { navigate(`/home`) }}>
                    Home
                </ListItemButton>
                <ListItemButton
                    sx={{ justifyContent: 'center' }}
                    onClick={() => navigate('/vehicles')}>
                    Vehicles
                </ListItemButton>
                {session.admin &&
                <ListItemButton sx={{ justifyContent: 'center' }}
                    onClick={() => navigate(`/reservationqueue`)}>Pending</ListItemButton>}
                {session.admin &&
                <ListItemButton sx={{ justifyContent: 'center' }}
                    onClick={() => navigate(`/approvedreservations`)}>Approved</ListItemButton>}
                {session.admin &&
                <ListItemButton sx={{ justifyContent: 'center' }}
                    onClick={() => navigate(`/reservations`)}>Resolved</ListItemButton>}
                {session.admin &&
                <ListItemButton sx={{ justifyContent: 'center' }}
                    onClick={() => navigate(`/ManageUsers`)}>Manage Users</ListItemButton>}
                {session.admin &&
                <ListItemButton
                    sx={{ justifyContent: 'center' }}
                    onClick={() => navigate(`/schedule`)}>Schedule</ListItemButton>}
                <ListItemButton
                    sx={{ justifyContent: 'center' }}
                    onClick={() => navigate(`/incidentreport`)}>New Incident</ListItemButton>
                {session.admin &&
                <ListItemButton
                    sx={{ justifyContent: 'center' }}
                    onClick={() => navigate(`/incidentreports`)}>All Incidents</ListItemButton>}
                <Divider />
                {session.username &&
                <ListItemButton sx={{ justifyContent: 'center' }}
                    onClick={() => navigate('/account')}>Account</ListItemButton>}
                {session.username &&
                <ListItemButton sx={{ justifyContent: 'center' }}
                    onClick={() => {
                        navigate(`/home`);
                        document.cookie = `ROVERid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
                        setSession({});
                    }}>Log Out</ListItemButton>}
                {!session.username &&
                <ListItemButton
                    sx={{ justifyContent: 'center' }}
                    onClick={() => navigate('/login')}>Log In</ListItemButton>}
            </List>
        </div>
    );
}

export default Navbar;