import React from 'react';
import './Login.scss';
import { json, Link, Navigate } from 'react-router-dom';
import LogoImg from './rtg-logo.gif';
import { useRef, useEffect, useState } from 'react';
import axios from '../../api/axios';


function Login() {
    useEffect(()=>{
        for(var x =0; x<sessionStorage.length;x++){
            sessionStorage.clear();
        }
    },[])
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrmsg] = useState('');
    const [success, setSuccess] = useState(false);
    const LOGIN_URL = '/login'
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrmsg('');
    }, [username, password])


    const userRef = useRef();
    const errRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response.data[0].lvl)
            setUsername('');
            setPassword('');
            setSuccess(true);
            sessionStorage.setItem('username', username);

        } catch (err) {
            if (!err?.response) {
                alert('No Server Response');

            } else if (err.response?.status === 400) {
                alert('Missing username or password');
            } else if (err.response?.status === 401) {
                alert('Unathorized');
            } else if (err.response.status == 406) {
                alert('Wrong password/username');
            }
            else if (err.response.status == 428) {
                alert('Account Does Not Exists');
            }
            else {
                alert('Login Failed');
            }
            errRef.current.focus();

        }

    }


    return (
        <>
            {success ? (
                <Navigate to="/profile"></Navigate>
            ) : (
                <div className="main-login">
                    <div className="left-side">
                        <div>
                            <img src={LogoImg} alt="rtg-logo" className="rtg-logo" />
                        </div>
                    </div>

                    <div className="right-side">
                        <form onSubmit={handleSubmit} className='login-form'>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                            <input
                                type="text"
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id='username'
                                ref={userRef}
                                autoComplete="off"
                                required
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id='password'
                                required
                            />
                            <div className="btn-holder">
                                <button type='submit' id="sub-btn">Login</button>
                                {/* </Link> */}
                                <Link to="/Register" className='link'>Sign-up?</Link>
                                {/* <Link to="/profile" > */}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login