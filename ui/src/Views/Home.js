import React from 'react';
import { Outlet } from 'react-router-dom';
import Vehicles from '../components/Vehicles';
import Context from '../components/Context';
import { useContext, useEffect } from 'react';

const Home = () => {
  const { session } = useContext(Context);

  return (
    <>
      <div>
        TODO Notifications pane of transactions that involve curr user here
      </div>
    </>
  )
}

export default Home;