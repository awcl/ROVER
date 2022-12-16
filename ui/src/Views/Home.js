import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Vehicles from '../components/Vehicles';
import Context from '../components/Context';
import { useContext, useEffect } from 'react';





const Home = () => {
  const { session } = useContext(Context);

  return (
    <>
      <div>
        Home Page Loads
      </div>

    </>
  )
}

export default Home;
