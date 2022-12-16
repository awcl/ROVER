import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const ContentLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ContentLayout;