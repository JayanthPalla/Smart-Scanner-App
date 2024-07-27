import React from 'react';
import './App.css';
import About from './components/AboutPage.jsx';
import Final from './components/Final.jsx';
import Land from './components/Land.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Help from './components/Help.jsx';
import Partially_Scanned from './components/Partially_scanned.jsx';
import Fully_Scan from './components/Fully_scanned.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile.jsx';
import Getstarted from './components/Getstarted.jsx';
import ServicePage from './components/ServicePage.jsx';
import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
          <Route exact path="/" element={<Land/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/partially_scanned" element={<Partially_Scanned />} />
          <Route path="/fully_scanned" element={<Fully_Scan/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/getstarted" element={<Getstarted/>} />
          <Route path="/final" element={<Final/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<ServicePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
