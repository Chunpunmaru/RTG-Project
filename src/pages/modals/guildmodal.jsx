import React, { useState } from 'react';
import './Guildmodal.scss';
import axios from '../../api/axios';



export default function Guildmodal() {
    const [guildName, setGuildName] = useState("");
    const handlesubmit = (event) => {
        event.preventDefault();
    }

    const [guildmodal, setGuildmodal] = useState(false);

    const toggleModal = () => {
        setGuildmodal(!guildmodal)
    }
    const create = async()=>{
        try{
            const createguild = axios.post("/addGuild/"+sessionStorage.getItem('username'),
            JSON.stringify({
                guild_name: guildName
            })
            ).then(res=>{
                alert('Succesfully Made Guild!');
                console.log(res);
                sessionStorage.setItem('guild',guildName);
                window.location.reload(false);
            })
        }catch(error){
            if(error.response){
                if(error.response.status ===402){
                    alert("Guild Already Exists")
                }else{
                    alert("Error Try Again")
                }
            }
        
        }
    }


    return (
        <>

            <button onClick={toggleModal} className='create-guild-btn'>
                Create Guild
            </button>

            {guildmodal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className="modal-content">
                        <h2>Create Guild</h2>
                        <div >
                            <form onSubmit={handlesubmit} className='forms'>
                                <input type="text" placeholder='GuildName' value={guildName} className='create-input'
                                    onChange={(e) => { setGuildName(e.target.value) }} id='guildName' />

                                <div className='btn-holder'>
                                    <button className='create-btn' onClick={create}>Create</button>
                                    <button className='cancel-btn' onClick={toggleModal}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

