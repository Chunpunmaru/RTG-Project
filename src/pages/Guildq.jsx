import React from 'react'
import { useState,useReducer } from 'react'
import { GiTrashCan } from "react-icons/gi";
import { TaskData } from '../data/TaskData';
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import Modal from './modals/Modal';
import './style.scss';
import { Link } from 'react-router-dom';
import axios from '../api/axios';



const Guildq = () => {

  const [quest, setQuest] = useState([]);
  const guildname = sessionStorage.getItem('guild');
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  if(guildname !=''){
    const mainquest = axios.get('/guild/'+guildname)
      .then(res => {
        setQuest(res.data.payload);
        forceUpdate();
      })
  }
  

  const deleteTask =async (id) => {
    const deltask = axios.patch('/fail/' + sessionStorage.getItem('username') + '/' + id)
      .then(res => {
        console.log(res);
      })
  }
  
  const finishtask =async (id) => {
    const finish = await axios.patch('/guildFinished/' + sessionStorage.getItem('username') + '/' + id)
      .then(res => {
        console.log(res);
      })
  }
  
    
  

  return (
    <React.Fragment>
      <Modal></Modal>
      <section>
        <div className='quest-page'>
          <div className="task-list">
          {
            quest != null 
            ?
            quest.map((task) => {  
              return (
                <div className="task-content" key={task.questID}>
                  <div className="task-holder">
                    <p className='task-title'>{task.title} </p>
                    <p className='task-des'>{task.deadline}</p>
                    <p className='task-des'>{task.description}</p>
                  </div>
                  <div className="task-exp">
                    <p>EXP:{task.exp}</p>
                  </div>
                  <div className="task-btn">
                    <GiTrashCan onClick={() => deleteTask(task.questID)} size={30} className='cls-btn' />
                    <MdOutlineCheckCircleOutline onClick={() => finishtask(task.questID)} size={30} className='cls-btn' />
                  </div>
                </div>
              )
            })
            :
            <h1>No Quest!</h1>
            
          }
          </div>
        </div>
      </section>



    </React.Fragment>
  )
}

export default Guildq