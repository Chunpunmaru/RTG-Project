import React, { useEffect } from 'react';
import './if-guild.scss';
import axios from '../../api/axios';
import {useState} from 'react';
function WithGuild() {

    //static GuildInfo
    const [inv_code,setInv_code]=useState();
    const [guildmembers,setGuildmembers] =useState([]);

    useEffect(()=>{
        members()

    },[])

    const members = ()=>{
        axios.get('/getMembers/'+sessionStorage.getItem('guild'))
        .then(res=>{
        setGuildmembers(res.data);
        setInv_code(res.data[0].inv_code);
        })
    }
    

    const leaveGuild = async ()=>{
        try{
            const leave = axios.patch('/leave/'+sessionStorage.getItem('username'))
        .then(e=>{
            alert("Left Guild")
            console.log(e);
            sessionStorage.setItem('guild','');
            window.location.reload(false);
        })
        }catch(error){
            alert("error");
        }  
    }
    
    
    return (
        <section>
            <div className='main-guild'>


                <div className='guild-list'>
                    <div className="main-head">
                        <div className="guild-info">
                            
                                    <div className='guild-info-holder'>
                                        <p className="guild-name">{sessionStorage.getItem('guild')}</p>
                                        <p id='code' className="guild-code">Invitation Code: {inv_code}</p>
                                    </div>                                
                            
                        </div>
                        <div className='main-btn'>
                            <button className="leave-btn" onClick={leaveGuild} >Leave Guild</button>
                        </div>
                    </div>

                    <div className='guild-members'>
                        {guildmembers.map((members) => {
                            return (
                                <div className="member-info" key={members}>
                                    <p className='member-name'>{members.members} </p>
                                    <p className='member-title'>{members.position}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WithGuild