import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Vehicles from '../components/Vehicles';
import Context from '../components/Context';
import { useContext, useEffect } from 'react';





const Home = () => {
  const { session } = useContext(Context);
  console.log(session)


  return (
    <>
      <div>
        {/* {session.username ? <> Hey {session.rank} {session.last_name} AKA "{session.username}" </> : <>You're not logged in</>} */}
        {/* {user ? <>Sup {user}</> : <>You're not logged in</>}
        {isAdmin ? <><br />You're an admin</> : <><br />You're not an admin</>} */}
        {/* <NavigationBar /> */}
      </div>

    </>
  )
}

export default Home;
