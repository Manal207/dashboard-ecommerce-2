import React from 'react'
import { useState } from 'react'

export const Login = () => {

    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const [errorMsg, setErrorMsg]= useState('');
    const [succcessMsg, setSuccessMsg] = useState('');



  return (
    <div>
        <div className= "container">
            <div className='logo'>
            </div>
            <div className='title'>
                Login to dashboard
            </div>
            <form className='form-group'>
                <label>Username</label>
                <input type= "text" className='form-control'></input>
                <br></br>
                <label>Password</label>
                <input type='email' className='form-control'></input>
                <br></br>
                <button className='btn-login'>Login</button>


            </form>

        </div>
    </div>
    
  )
}
