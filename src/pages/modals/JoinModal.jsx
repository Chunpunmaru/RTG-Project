import React, { useState } from 'react';
import './Guildmodal.scss';
import axios from '../../api/axios';

export default function Guildmodal() {
    const [guildID, setGuildID] = useState("");
    const [guildName, setGuildName] = useState("");

    const handlesubmit = (event) => {
        event.preventDefault();
    }

    const [joinmodal, setJoinmodal] = useState(false);

    const toggleModal = () => {
        setJoinmodal(!joinmodal)
    }

    const join = async() =>{
            try{
                const joining = axios.patch('/joinGuild/'+sessionStorage.getItem('username'),
                JSON.stringify({
                    guild_name: guildName,
                    inv_code: guildID
                })
                ).then(res=>{
                    sessionStorage.setItem('guild',guildName);
                    alert("Joined guild");
                    window.location.reload(false);
                    
                }).catch(error=>{
                    if(error.response.status===403){
                        alert("Guild Does not Exists");
                    }else if(error.response.status===404){
                        alert("Wrong Invitation Code");
                    }
                    console.log(error.response.status);
                }    
                )
            }catch(err){
                alert("error");
            }

    }

    return (
        <>
            <button onClick={toggleModal} className='join-guild-btn'>
                Join Guild
            </button>

            {joinmodal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className="modal-content">
                        <h2>Join Guild</h2>
                        <div >
                            <form onSubmit={handlesubmit} className='forms'>
                                <input type="text" placeholder='GuildID' value={guildID}
                                    onChange={(e) => { setGuildID(e.target.value) }} id='guildID' />
                                <input type="text" placeholder='GuildName' value={guildName}
                                    onChange={(e) => { setGuildName(e.target.value) }} id='guildName' />

                                <div className='btn-holder'>
                                    <div><button className='join-btn' onClick={join}> Join</button></div>
                                    <div><button className='cancel-btn' onClick={toggleModal}> Cancel</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            )}

        </>
        
    )
}