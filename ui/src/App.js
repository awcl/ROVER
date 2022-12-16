import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import LandingPage from './Views/LandingPage';
import Home from './Views/Home';
import Vehicles from './components/Vehicles';
import ReservationPage from './Views/ReservationPage';
import Schedule from './Views/Schedule';
import Context from './components/Context';
import ReservationList from "./components/ReservationList";
import React, { useState, useContext, useEffect } from 'react';
import Layout from './components/Layout';
import config from './config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;



function App() {
  const [session, setSession] = useState({});
  useEffect(() => { // Checks for cookie, if so use the ID stored in it to populate session
    try {           // session can drive isLoggedIn/admin/etc states via session.whatever
      if (document.cookie.split('=')[0] === 'ROVERid' && !session.username) {
        fetch(`${API_URL}/member/${document.cookie.split('=')[1]}`)
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
                  <Route path="/reservations" element={<ReservationList />} />
                  <Route path="/reservations/vehicle/:id" element={<ReservationPage />} />
                  <Route path="/schedule" element={<Schedule />} />
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