
import React from 'react';
import { useReducer, useEffect } from 'react';
import axios from '../api/axios';
import './profile.scss'
// profile icon
import { CgProfile } from "react-icons/cg";
import { GiCrestedHelmet } from 'react-icons/gi';

import daily1 from "../../src/data/badge/Daily/Daily-01.png";
import daily2 from "../../src/data/badge/Daily/Daily-02.png";
import daily3 from "../../src/data/badge/Daily/Daily-03.png";
import daily4 from "../../src/data/badge/Daily//Daily-04.png";
import daily5 from "../../src/data/badge/Daily/Daily-05.png";

import weekly1 from "../../src/data/badge/Weekly/Weekly-01.png";
import weekly2 from "../../src/data/badge/Weekly/Weekly-02.png";
import weekly3 from "../../src/data/badge/Weekly/Weekly-03.png";
import weekly4 from "../../src/data/badge/Weekly/Weekly-04.png";
import weekly5 from "../../src/data/badge/Weekly/Weekly-05.png";

import main1 from "../../src/data/badge/Main/Main-01.png";
import main2 from "../../src/data/badge/Main/Main-02.png";
import main3 from "../../src/data/badge/Main/Main-03.png";
import main4 from "../../src/data/badge/Main/Main-04.png";
import main5 from "../../src/data/badge/Main/Main-05.png";

import Avatar1 from "../../src/data/Avatars/Avatar1.png";
import Avatar2 from "../../src/data/Avatars/Avatar2.png";
import Avatar3 from "../../src/data/Avatars/Avatar3.png";
import Avatar4 from "../../src/data/Avatars/Avatar4.png";
import Avatar5 from "../../src/data/Avatars/Avatar5.png";

const Profile = () => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  useEffect(()=>{
    profdata()
    
  
  },[])
  useEffect(()=>{
    forceUpdate()
  })

  const profdata  =()=>{
    axios.get('/profile/' + sessionStorage.getItem('username'))
    .then(res => {
      console.log(res.data[0])
      sessionStorage.setItem('guild', res.data[0].guild);
      sessionStorage.setItem('lvl', res.data[0].lvl);
      sessionStorage.setItem('exp', res.data[0].exp);
      sessionStorage.setItem('title', res.data[0].title);

    }).then(
      axios.get('/questDone/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('quest', res.data);
        })
    ).then(
      axios.get('/MainquestDone/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('main', res.data);
        })
    ).then(
      axios.get('/GuildquestDone/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('guildq', res.data);
        })
    ).then(
      axios.get('/WeeklyquestDone/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('weekly', res.data);
        })
    ).then(
      axios.get('/DailyquestDone/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('daily', res.data);
        })
    ).then(
      axios.get('/questFailed/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('fail', res.data);
        })
    ).then(
      axios.get('/Ongoingquest/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('ongoing', res.data);
        })
    ).then(
      axios.get('/added/' + (sessionStorage.getItem('username')))
        .then(res => {
          sessionStorage.setItem('added', res.data);
        })
    )
  } 
  

  var daily;
  var weekly;
  var main;
  var model;
  
    
  if (sessionStorage.getItem('daily') <= 20) {
    daily = daily1;
  } else if (sessionStorage.getItem('daily') <= 50) {
    daily = daily2;

  } else if (sessionStorage.getItem('daily') <= 100) {
    daily = daily3;

  } else if (sessionStorage.getItem('daily') <= 150) {
    daily = daily4;

  } else if (sessionStorage.getItem('daily') <= 300) {
    daily = daily5;

  }
  else if (sessionStorage.getItem('daily') >= 300) {
    daily = daily5;
  }


  if (sessionStorage.getItem('weekly') <= 10) {
    weekly = weekly1;
  } else if (sessionStorage.getItem('weekly') <= 20) {
    weekly = weekly2;

  } else if (sessionStorage.getItem('weekly') <= 50) {
    weekly = weekly3;


  } else if (sessionStorage.getItem('weekly') <= 75) {
    weekly = weekly4;


  } else if (sessionStorage.getItem('weekly') <= 100) {
    weekly = weekly5;

  }
  else if (sessionStorage.getItem('weekly') >= 100) {
    weekly = weekly5;

  }
  if (sessionStorage.getItem('main') <= 20) {
    main = main1;
  } else if (sessionStorage.getItem('main') <= 50) {
    main = main2;

  } else if (sessionStorage.getItem('main') <= 100) {
    main = main3;


  } else if (sessionStorage.getItem('main') <= 150) {
    main = main4;


  } else if (sessionStorage.getItem('main') <= 300) {
    main = main5;

  }
  else if (sessionStorage.getItem('main') >= 300) {
    main = main5;

  }

  if (sessionStorage.getItem('lvl') <= 10) {
    model = Avatar1;
  } else if (sessionStorage.getItem('lvl') >= 11 && sessionStorage.getItem('lvl') <= 20) {
    model = Avatar2;
  } else if (sessionStorage.getItem('lvl') >= 21 && sessionStorage.getItem('lvl') <= 30) {
    model = Avatar3;
  } else if (sessionStorage.getItem('lvl') >= 31 && sessionStorage.getItem('lvl') <= 40) {
    model = Avatar4;
  } else if (sessionStorage.getItem('lvl') >= 41) {
    model = Avatar5;
  }



  return (
    <React.Fragment>
      <div className="Profile-Holder">
        <div className='Avatar'>
          <img src={model} className="Avatar-img" />
        </div>

        <div className='badges'>
          <img src={daily} className="badge-dsply" />
          <img src={weekly} className="badge-dsply" />
          <img src={main} className="badge-dsply" />
        </div>

        <div className='Profile'>
          <div className='basic-info'>
            <div className='text'>
              <div className="prof-holder">
                <p className='prof-title'>Name:</p>
                <p className="prof-info">{sessionStorage.getItem('username')}</p>
              </div>
              <div className="prof-holder">
                <p className='prof-title'>Title: </p>
                <p className="prof-info">{sessionStorage.getItem('title')}</p>
                <p className='prof-lvl'>LVL: {sessionStorage.getItem('lvl')}</p> 
                <p className='prof-lvl'>EXP: {sessionStorage.getItem('exp')}</p> 
              </div>
              <div className="prof-holder">
                <p className='prof-title'>Guild: </p>
                <p className="prof-info">{sessionStorage.getItem('guild')}</p>
              </div>
            </div>

            <div className='icon-profile'>
              <GiCrestedHelmet size={200} />
            </div>
          </div>


          <div className='stats'>
            <div className="stats-label">
              <p>Statistics</p>
            </div>

            <div className="stats-content">
              <div className="stats-holder">
                <p className="stats-title">Finished Quest:</p>
                <p className="stats-cnt">{sessionStorage.getItem('quest')}</p>
              </div>
              <div className="stats-holder">
                <p className="stats-title">Failed Quest:</p>
                <p className="stats-cnt">{sessionStorage.getItem('fail')}</p>
              </div>
              <div className="stats-holder">
                <p className="stats-title">Pending Quest: </p>
                <p className="stats-cnt">{sessionStorage.getItem('ongoing')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile