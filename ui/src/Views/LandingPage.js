import React from 'react';
import landingBG from '../assets/landingBg.mp4';
import { Button } from '@mui/material';



const LandingPage = () => {
    return (
        <div className='landing'>
            <div className="overlay"></div>
            <video src={landingBG} autoPlay loop muted />
            <div className="content">
                <h1>ROVER : NOW</h1>
                {/* <p>ROVER : NOW</p> */}
                <Button variant="contained" color="primary" href="/login">Login</Button>
            </div>
        </div>
      )
    }

export default LandingPage;

