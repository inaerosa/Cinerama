import React, { useState } from 'react';
import './Subscribe.css'

const Subscribe = (props) => {
    //crio estado pra cada dado
    const [name, setName] = useState('');
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleInputName = (e) => {
        setName(e.target.value);
    }

    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    
    return ( 
        <>
        <div id="cadastro">

            <h1>Subscribe!</h1>
            <div id="subscribe-form">
                <label for="nome">
                    <input type="text" name="nome" id="nome" placeholder="Name" onChange={handleInputName}/>
                </label>
                <label for="username">
                    <input type="text" name="user" id="user" placeholder= "Username" onChange={handleInputUsername}></input>
                </label>
                <label for = "email">
                    <input type="text" name = "email" id="email" placeholder="Email" onChange={handleInputEmail}>
                    </input>
                </label>
                <label for = "password">
                    <input type="password" name="password" id="password" placeholder="Password" onChange={handleInputPassword}/>
                </label>
                <button type="submit" id="subscribe-button" onClick = { () => props.handleClickAddUser(name, username, email, password )}>I'm ready!</button>
            </div>
        </div>
    </>
     );
}
 
export default Subscribe;