import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import Daily from '../pages/Daily';
import Weekly from '../pages/Weekly';
import Mainq from '../pages/Mainq';
import Guildq from '../pages/Guildq';
import Achievements from '../pages/Achievements';
import Guild from '../pages/Guild';
import Login from './login/Login';
const Navpage = () => {
  return (
    <React.Fragment>
      <section className='navpage'>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/mainq" element={<Mainq />} />
          <Route path="/guildq" element={<Guildq />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/guild" element={<Guild/>} />
          <Route path="/" element={<Login/>}/>
        </Routes>
      </section>

    </React.Fragment>
  )
}

export default Navpage