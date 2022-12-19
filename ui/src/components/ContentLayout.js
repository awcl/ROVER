import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const ContentLayout = () => {
  return (
    <>
      <div className="bodyContent">
        <Navbar />
        <div className="bodyFlip">
          <Header /><br />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ContentLayout;