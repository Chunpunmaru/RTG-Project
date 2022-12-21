import React from 'react'
import './style.scss';

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

import guild1 from "../../src/data/badge/Guild/Guild-01.png";
import guild2 from "../../src/data/badge/Guild/Guild-02.png";
import guild3 from "../../src/data/badge/Guild/Guild-03.png";
import guild4 from "../../src/data/badge/Guild/Guild-04.png";
import guild5 from "../../src/data/badge/Guild/Guild-05.png";

import main1 from "../../src/data/badge/Main/Main-01.png";
import main2 from "../../src/data/badge/Main/Main-02.png";
import main3 from "../../src/data/badge/Main/Main-03.png";
import main4 from "../../src/data/badge/Main/Main-04.png";
import main5 from "../../src/data/badge/Main/Main-05.png";

import quest1 from "../../src/data/badge/Finish/Finish-01.png";
import quest2 from "../../src/data/badge/Finish/Finish-02.png";
import quest3 from "../../src/data/badge/Finish/Finish-03.png";
import quest4 from "../../src/data/badge/Finish/Finish-04.png";
import quest5 from "../../src/data/badge/Finish/Finish-05.png";

import add1 from "../../src/data/badge/Add/Add-01.png";
import add2 from "../../src/data/badge/Add/Add-02.png";
import add3 from "../../src/data/badge/Add/Add-03.png";
import add4 from "../../src/data/badge/Add/Add-04.png";
import add5 from "../../src/data/badge/Add/Add-05.png";

import fail1 from "../../src/data/badge/Failed/Failed-01.png";
import fail2 from "../../src/data/badge/Failed/Failed-02.png";
import fail3 from "../../src/data/badge/Failed/Failed-03.png";
import fail4 from "../../src/data/badge/Failed/Failed-04.png";
import fail5 from "../../src/data/badge/Failed/Failed-05.png";

import reach1 from "../../src/data/badge/Reached/Reach-01.png";
import reach2 from "../../src/data/badge/Reached/Reach-02.png";
import reach3 from "../../src/data/badge/Reached/Reach-03.png";
import reach4 from "../../src/data/badge/Reached/Reach-04.png";
import reach5 from "../../src/data/badge/Reached/Reach-05.png";


const Achievements = () => {
  var daily= sessionStorage.getItem('daily');
  var weekly= sessionStorage.getItem('weekly');
  var guild= sessionStorage.getItem('quildq');
  var main= sessionStorage.getItem('main');
  var quest= sessionStorage.getItem('quest');
  var fail= sessionStorage.getItem('fail');
  var lvl= sessionStorage.getItem('lvl');
  var added=sessionStorage.getItem('added');
  
  // Tested and Okay: Daily, Weekly, Guild, Main*, Quest*, Fail*, Lvl, Added

  


  // static achievements data
  const carddata= [];

  //Daily
  if(daily <= 20){
    const count = carddata.push({
      img: daily1,
      title: "Practice Makes Perfect ",
      description: "Finish 20 Daily Quests"
    })
  }else if(daily <=50){
    const count = carddata.push({
      img: daily2,
      title: "Getting good at this",
      description: "Finish 50 Daily Quests"
    })
  }else if(daily <=100){
    const count = carddata.push({
      img: daily3,
      title: "Daily expert ",
      description: "Finish 100 Daily Quests"
    })
  }else if(daily <=150){
    const count = carddata.push({
      img: daily4,
      title: "Daily Master",
      description: "Finish 150 Daily Quests"
    })
  }else if(daily <=300){
    const count = carddata.push({
      img: daily5,
      title: "Daily King",
      description: "Finish 300 Daily Quests"
    })
  }
  else if(daily >=300){
    const count = carddata.push({
      img: daily5,
      title: "Daily King",
      description: "Finish 300 Daily Quests"
    })
  }
  //weekly
  if(weekly <=10){
    const count = carddata.push({
      img: weekly1,
      title: "Weekly finisher",
      description: "Finish 10 Weekly Quests"
    })
  }else if(weekly <=20){
    const count =carddata.push({
      img:weekly2,
      title:"Unskilled Crafter",
      description: "Finish 20 Weekly Quests"
    }) 
    
  }else if(weekly <=50){
    const count =carddata.push({
      img:weekly3,
      title:"Quest Purifier",
      description: "Finish 50 Weekly Quests"
    })
    
  }else if(weekly <=75){
    const count =carddata.push({
      img:weekly4,
      title:"You can't stop me",
      description: "Finish 75 Weekly Quests"
    })
    
  }else if(weekly <=100){
    const count =carddata.push({
      img:weekly5,
      title:"Weekly Smasher",
      description: "Finish 100 Weekly Quests"
    })
  }
  else if(weekly >=100){
    const count =carddata.push({
      img:weekly5,
      title:"Weekly Smasher",
      description: "Finish 100 Weekly Quests"
    })
  }
  //guild
  if(guild <=20){
    const count = carddata.push({
      img: guild1,
      title: "Discple",
      description: "Finish 20 Guild Quests"
    })
  }else if(guild <=50){
    const count = carddata.push({
      img: guild2,
      title: "Fight for the quest",
      description: "Finish 50 Guild Quests"
    })

  }else if(guild <=75){
    const count = carddata.push({
      img: guild3,
      title: "Best Man",
      description: "Finish 75 Guild Quests"
    })

  }else if(guild <=100){
    const count = carddata.push({
      img: guild4,
      title: "Comrade in arms",
      description: "Finish 100 Guild Quests"
    })
  }else if(guild <=150){
    const count = carddata.push({
      img: guild5,
      title: "Hero",
      description: "Finish 150 Guild Quests"
    })
  }else if(guild >=150){
    const count = carddata.push({
      img: guild5,
      title: "Hero",
      description: "Finish 150 Guild Quests"
    })
  }

  //main
  if(main <=20){
    const count = carddata.push({
      img: main1,
      title: "Pioneer",
      description: "Finish 20 Main Quests"
    })
  }else if(main <=50 ){
    const count = carddata.push({
      img: main2,
      title: "Task Finisher",
      description: "Finish 50 Main Quests"
    })

  }else if(main <=100){
    const count = carddata.push({
      img: main3,
      title: "Quest Buster",
      description: "Finish 100 Main Quests"
    })

  }else if(main <=150){
    const count = carddata.push({
      img: main4,
      title: "Unstoppable",
      description: "Finish 150 Main Quests"
    })
  }else if(main <=300){
    const count = carddata.push({
      img: main5,
      title: "Quest Slayer",
      description: "Finish 300 Main Quests"
    })
  }else if(main >=300){
    const count = carddata.push({
      img: main5,
      title: "Quest Slayer",
      description: "Finish 300 Main Quests"
    })
  }
  

   //quests
   if(quest <=100){
    const count = carddata.push({
      img: quest1,
      title: "Quest Crusher",
      description: "Finish 100 Quests"
    })
  }else if(quest <=200){
    const count = carddata.push({
      img: quest2,
      title: "Quest Terminator",
      description: "Finish 200 Quests"
    })

  }else if(quest <=500){
    const count = carddata.push({
      img: quest3,
      title: "Quest Master",
      description: "Finish 500 Quests"
    })

  }else if(quest <=700){
    const count = carddata.push({
      img: quest4,
      title: "Quest Perfectionist",
      description: "Finish 700 Quests"
    })
  }else if(quest >=1000){
    const count = carddata.push({
      img: quest5,
      title: "Quest King",
      description: "Finish 1000 Quests"
    })
  }
  //added
  if(added <=10){
    const count = carddata.push({
      img: add1,
      title: "Iron Will",
      description: "Added 10 Quests"
    })
  }else if(added <=20){
    const count = carddata.push({
      img: add2,
      title: "Relentless",
      description: "Added 20 Quests"
    })

  }else if(added <=50){
    const count = carddata.push({
      img: add3,
      title: "Productive",
      description: "Added 50 Quests"
    })

  }else if(added <=100){
    const count = carddata.push({
      img: add4,
      title: "Perserverance",
      description: "Added 100 Quests"
    })
  }else if(added >=200){
    const count = carddata.push({
      img: add5,
      title: "Hard working",
      description: "Added 200 Quests"
    })
  }
  //Fail
  if(fail <=10){
    const count = carddata.push({
      img: fail1,
      title: "Lack of will",
      description: "Failed 10 Quests"
    })
  }else if(fail <=50){
    const count = carddata.push({
      img: fail2,
      title: "Rejected",
      description: "Failed 50 Quests"
    })

  }else if(fail <=100){
    const count = carddata.push({
      img: fail3,
      title: "Lethargy",
      description: "Failed 100 Quests"
    })

  }else if(fail <=150){
    const count = carddata.push({
      img: fail4,
      title: "Failure",
      description: "Failed 150 Quests"
    })
  }else if(fail >=200){
    const count = carddata.push({
      img: fail5,
      title: "Master of the Corrupted",
      description: "Failed 200 Quests"
    })
  }
  //lvl
  if(lvl <=5){
    const count = carddata.push({
      img: reach1,
      title: "Noob",
      description: "Reach Lvl 1 and above"
    })
  }else if(lvl <=10){
    const count = carddata.push({
      img: reach2,
      title: "Amateur",
      description: "Reach Lvl 10 and above"
    })

  }else if(lvl <=20){
    const count = carddata.push({
      img: reach3,
      title: "Trained",
      description: "Reach Lvl 20 and above"
    })

  }else if(lvl <=30){
    const count = carddata.push({
      img: reach4,
      title: "Skilled",
      description: "Reach Lvl 30 and above"
    })
  }else if(lvl >=40){
    const count = carddata.push({
      img: reach5,
      title: "Gladiator",
      description: "Reach lvl 40 and above"
    })
  }

  return (
    <React.Fragment>
      <div className='achievement-page'>
        {carddata.map((value, index) => {
          return (
            <div className="card" key={index}>
              <div>
                <img src={value.img} className="card-img" />
              </div>
              <div>
                <p className="card-title">{value.title}</p>
                <p className="card-desc">{value.description}</p>
              </div>
            </div>
          )})}
      </div>
    </React.Fragment>
  )
}

export default Achievements