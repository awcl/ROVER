import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import LandingPage from './Views/LandingPage';
import Home from './Views/Home';
import Vehicles from './components/Vehicles';
import ReservationPage from './Views/ReservationPage';
import Schedule from './Views/Schedule';
import QueueingPage from './Views/QueueingPage';
import Context from './components/Context';
// import NavigationLayout from "./Views/NavigationLayout";
import React, { useState, useContext, useEffect } from 'react';
import Layout from './components/Layout';
import config from './config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;



function App() {
  const [session, setSession] = useState({});
  const [id, setID] = useState();
  useEffect(() => {
    try {
      if (document.cookie.split('=')[0] === 'ROVERid') {
        setID(document.cookie.split('=')[1]);
        fetch(`${API_URL}/member/${id}`)
          .then(res => res.json())
          .then(data => {
            setSession(data[0])
          }).catch(e => e)
      }
    } catch (e) { console.log(e) }
  }, [])

  return (
    <>
      <Context.Provider value={{ session, setSession }}>
        <div className="App">
          <header className="App-header">
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/vehicles" element={<Vehicles />} />
                  {/* <Route path="/reservations" element={<ReservationPage />} /> */}
                  <Route path="/reservations/:id" element={<ReservationPage />} />
                  <Route path="/schedule" element={<Schedule />} />
                  {session.admin === true && <Route path="/queue" element={<QueueingPage />} />}
                </Routes>
              </Layout>
            </Router>
          </header>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;