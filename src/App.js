import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import MainPage from './components/MainPage';
import Profile from './pages/Profile';
import Daily from './pages/Daily';
import Weekly from './pages/Weekly';
import Mainq from './pages/Mainq';
import Guildq from './pages/Guildq';
import Achievements from './pages/Achievements';
import Guild from './pages/Guild';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<MainPage />}>

              <Route path="" element={<Profile />} />
              <Route path="" element={<Daily />} />
              <Route path="" element={<Weekly />} />
              <Route path="" element={<Mainq />} />
              <Route path="" element={<Guildq />} />
              <Route path="" element={<Achievements />} />
              <Route path="" element={<Guild />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;