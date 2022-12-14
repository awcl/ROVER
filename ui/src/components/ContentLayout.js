import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const ContentLayout = () => {

  return (
    <>
      <div className="page">
        <Navbar />
        <div className="bodyFlip">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ContentLayout;