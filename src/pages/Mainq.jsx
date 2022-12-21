aseimport React from 'react'
import { useState, useEffect } from 'react'
import { GiTrashCan } from "react-icons/gi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { TaskData } from '../data/TaskData';
import Modal from './modals/Modal';
import './style.scss';
import axios from '../api/axios';
import E from 'react-script';



const Mainq = () => {

  const [quest, setQuest] = useState([]);
  const mainquest = axios.get('/main/' + sessionStorage.getItem('username'))
      .then(res => {
        /* const trymap = res.data.payload.map(x=>x); */
        setQuest(res.data.payload);
      })

  const deleteTask =async (id) => {
    const deltask = axios.patch('/fail/' + sessionStorage.getItem('username') + '/' + id)
      .then(res => {
        console.log(res);
      })
  }

  const finishtask =async (id) => {
    const finish = await axios.patch('/finish/' + sessionStorage.getItem('username') + '/' + id)
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
export default Mainq