import React from 'react';
import landingBG from '../assets/landingBg.mp4';
import landingBGP from '../assets/landingBG.png';
import { Button } from '@mui/material';

const LandingPage = () => {
    return (
        <div className='landing'>
            <div className="overlay"></div>
            <video src={landingBG} autoPlay loop muted poster={landingBGP} />
            <div className="landContent">
                <h1>ROVER : NOW</h1>
                <p>Real-time Overhead Vehicle Exchange Repository</p>
                <Button variant="contained" color="primary" href="/login">Enter</Button>
            </div>
        </div>
    )
}

export default LandingPage;