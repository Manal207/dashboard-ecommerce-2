import React from 'react'
import { useState } from 'react'
import {auth} from '../Config/Config'
import { useNavigate } from 'react-router-dom'
import '../CSSFiles/Login.css'
import nikelogo from '../Images/nikelogosvg.svg'

export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        // console.log(email, password);
        auth.signInWithEmailAndPassword(email,password).then(()=>{
            setSuccessMsg('Login Successfull. You will now automatically get redirected to dashboard page');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                navigate('/ProductsList');
            },3000)
        }).catch(error=>setErrorMsg('Email or password incorrect. Please try again'));
    }

  return (
    <div className='background'>
        <div className= "container">
            <div className='logo'>
                <img className='nikelogo' src={nikelogo}  alt="logo"/>
            </div>
            <div className='title'>
                Login to dashboard
            </div>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='form-group' onSubmit={handleLogin}>
                <label className='form-control'>Email</label>
                <input type= "email" className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br><br></br><br></br>
                <label className='form-control'>Password</label>
                <input type='password' className='form-control' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
                </>}
                <br></br><br></br>
                <button className='btn-login'>Login</button>
            </form>
        </div>
    </div>
  )
}