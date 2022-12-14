import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import LandingPage from './Views/LandingPage';
import Home from './Views/Home';
import Vehicles from './Views/Vehicles';
// import NavigationLayout from "./Views/NavigationLayout";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          {/* </Route> */}
          {/* <Route element={<NavigationLayout />}> */}
            <Route path="/home" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
          {/* </Route> */}
        </Routes>
      </header>
    </div>
    </>
  );
}

export default App;