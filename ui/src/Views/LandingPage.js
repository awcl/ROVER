import React from 'react';
import landingBG from '../assets/landingBg.mp4';
import landingBGP from '../assets/landingBG.png';
import { Button } from '@mui/material';


const LandingPage = () => {
    return (
        <div className='landing'>
            <div className="overlay"></div>
            <video src={landingBG} autoPlay loop muted poster={landingBGP}/>
            <div className="content">
                <h1>ROVER : NOW</h1>
                <p>ROVER is a platform that allows you to connect with your friends and family in real time. </p>
                <Button variant="contained" color="primary" href="/login">Login</Button>
            </div>
        </div>
      )
    }

export default LandingPage;

