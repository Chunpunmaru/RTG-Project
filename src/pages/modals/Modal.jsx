import { IoMdAddCircle } from 'react-icons/io';
import { IoMdCloseCircle } from 'react-icons/io';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Guildmodal.scss';
import axios from '../../api/axios';
import Daily from '../Daily';
import Weekly from '../Weekly';
import Mainq from '../Mainq';
import Guildq from '../Guildq';

export default function Modal() {
  const [data, setData] = useState({
    title: "",
    date: new Date(""),
    description: "",
  })
  const [category, setCategory] = useState();
  const submit = (event) => {
    event.preventDefault();
  }
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  const guildname = sessionStorage.getItem('guild');
  const addtask = async()=>{
      const adding = await axios.post('/addQuest/'+sessionStorage.getItem('username'),
      {
        title: data.title,
        deadline: data.date,
        category: category,
        description: data.description,
        guildname: guildname,
      }
      ).then(res=>{
        if(res.status === 200){
          console.log(res);
          alert("Done Adding Task!");
          setModal(!modal);
          console.log(category);
          

        }else{
          alert("Opps, Failed Adding Task");
        }
      })
  }

  return (
    <>

      <div
        className="modal-add-btn" onClick={toggleModal}><IoMdAddCircle size={60} />
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add Quest</h2>
            <div>
              <form onSubmit={(e) => submit(e)} className='forms'>
                <input type="text" placeholder='Add Quest Title' value={data.title}
                  onChange={(e) => handle(e)} id='title' />
                <div className="date-categ-holder">
                  <input type="date" value={data.date}
                    onChange={(e) => handle(e)} id='date' />
                  <select value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category" id="category">
                    <option value="" className='categ-list'>Select Category</option>
                    <option value="Daily" className='categ-list'>Daily Quest</option>
                    <option value="Weekly" className='categ-list'>Weekly Quest</option>
                    <option value="Main" className='categ-list'>Main Quest</option>
                    <option value="Guild" className='categ-list'>Guild Quest</option>
                    
                  </select>
                </div>

                <input type="text" placeholder='Quest Description' value={data.description}
                  onChange={(e) => handle(e)} id='description' />
                <div className='btn-holder'>
                  <button onClick={addtask} id="submit" className='submit-btn'>Add Task</button>
                  <button className='cancel-btn' onClick={toggleModal}>Cancel</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}

    </>
  );
}