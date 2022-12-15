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
import React, { useState, useContext } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState('');

  return (
    <>
      <Context.Provider value={{ isAdmin, setIsAdmin, user, setUser }}>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/vehicles" element={<Vehicles />} />
              {/* <Route path="/reservations" element={<ReservationPage />} /> */}
              <Route path="/reservations/:id" element={<ReservationPage />} />
              <Route path="/schedule" element={<Schedule />} />
              {isAdmin && <Route path="/queue" element={<QueueingPage />} />}
            </Routes>
          </header>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;