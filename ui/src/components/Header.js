import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Context from './Context';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';


const Header = (props) => {
    const { onDrawerToggle } = props;
    const navigate = useNavigate();
    const { session, setSession } = useContext(Context);
    return (
        <div className="headerContent">
            ROVER {session.username && <> ➡️ Hello "{session.username}" 🙂 You're {!session.admin && <>not</>} an admin</>}
        </div>
    )
}


export default Header;