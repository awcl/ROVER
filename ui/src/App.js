import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import LandingPage from './Views/LandingPage';
import Home from './Views/Home';
import Vehicles from './components/Vehicles';
import ReservationPage from './Views/ReservationPage';
import Schedule from './components/NewSchedule';
import Context from './components/Context';
import ReservationQueue from "./components/ReservationQueue";
import AllReservations from './components/AllReservations'
import React, { useState, useEffect } from 'react';
import ContentLayout from './components/ContentLayout';
import LandingLayout from './components/LandingLayout';
import config from './config';
import AddedReservation from './Views/ReservationAdded';
import ManageUsers from './components/ManageUsers';
import Account from './Views/Account';
import ReservationDetails from './Views/ReservationDetails';
import IncidentReport from './components/IncidentReport';
import IncidentReports from './components/IncidentReports';
import MemberDetails from './Views/MemberDetails';
import ApprovedList from './components/ApprovedList'
import ThemeProvider from './theme';

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
      <ThemeProvider>
        <Context.Provider value={{ session, setSession }}>
          <div className="App">
            <Routes>
              <Route element={<LandingLayout />}>
                <Route path="/" element={<LandingPage />} />
              </Route>
              <Route element={<ContentLayout />} >
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/vehicles" element={<Vehicles />} />
                {session.admin && <Route path="/reservationqueue" element={<ReservationQueue />} />}
                {session.admin && <Route path="/approvedreservations" element={<ApprovedList />} />}
                {session.admin && <Route path="/memberdetails/:id" element={<MemberDetails />} />}
                {session.admin && <Route path="/reservations" element={<AllReservations />} />}
                {session.id && <Route path="/reservations/added" element={<AddedReservation />} />}
                {session.id && <Route path="/reservations/vehicle/:id" element={<ReservationPage />} />}
                {session.id && <Route path="/reservationdetails/:id" element={<ReservationDetails />} />}
                {session.admin && <Route path="/ManageUsers" element={<ManageUsers />} />}
                {session.id && <Route path="/schedule" element={<Schedule />} />}
                {session.id && <Route path="/account" element={<Account />} />}
                {session.id && <Route path="/IncidentReport" element={<IncidentReport />} />}
                {session.id && <Route path="/IncidentReports" element={<IncidentReports />} />}
                {/* <Route path="/Incident/:id" element={<IncidentReports/>}/> */}
              </Route>
            </Routes>
          </div>
        </Context.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;