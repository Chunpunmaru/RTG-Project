import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import LogoImg from './rtg-logo.gif';
import { useState } from 'react';
import axios from '../../api/axios';
import { ErrorResponse } from '@remix-run/router';

function Register() {



    const url = '/addAccount'

    const [data, setData] = useState({
        username: "",
        password: "",
        conpass: ""

    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            username: data.username,
            password: data.password,
            conpass: data.conpass

        }).then( res => {
            console.log(res);
            if(res.status==200){
                alert("Account sucessfully added");
            }
        }
        ).catch(error => {
            if (error.response) {
                if (error.response.status == 404) {
                    alert("Passwords does not match")

                }
                else if (error.response.status == 400) {
                    alert("User Already Exists")
                }


            }
        });

    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="main-register">
            <div className="left-side">
                {/* <h3>Login Page (left side)</h3> */}
                <div >
                    <img src={LogoImg} alt="" className="rtg-logo" />
                </div>
            </div>

            <div className="right-side">
                {/* <h3>Login Page (right side)</h3> */}
                <form onSubmit={(e) => submit(e)} className='login-form'>
                    <input onChange={(e) => handle(e)} type="text" placeholder="Username" value={data.username}
                        id="username" />
                    <input onChange={(e) => handle(e)} type="password" placeholder="Password" value={data.password}
                        id="password" />
                    <input onChange={(e) => handle(e)} type="password" placeholder="Verify Password" value={data.conpass}
                        id="conpass" />

                    <div className="btn-holder">
                        <button id="sub-btn" >Sign-up</button>
                        <Link to="/" className='link'>Login?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register