import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginAsync, selectLogged,aboutAsync,contactAsync,logout } from './loginSlice'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Login = () => {
    const dispatch = useAppDispatch();
    const logged = useAppSelector(selectLogged);
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    return (
        <div style={{backgroundColor:"red"}}>
            <h1>Login</h1>
            User name<input onChange={(e)=>setusername(e.target.value)}/><br></br>
            Password<input onChange={(e)=>setpassword(e.target.value)}/><br></br>
            {logged ? <button onClick={() => dispatch(logout())}>Logout</button> :

             <Button variant="primary" onClick={() => dispatch(loginAsync({ username, password}))}>Login</Button>}
        
             <button onClick={() => dispatch(aboutAsync())}>About</button>
             <button onClick={() => dispatch(contactAsync())}>Contact</button>
           
        </div>
    )
}

export default Login