import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return ( 
        <>
        <div id="cadastro">

            <h1>Subscribe!</h1>
            <div id="subscribe-form">
                <label for="nome">
                    <input type="text" name="nome" id="nome" placeholder="Name"/>
                </label>
                <label for="username">
                    <input type="text" name="user" id="user" placeholder= "Username"></input>
                </label>
                <label for = "email">
                    <input type="text" name = "email" id="email" placeholder="Email">
                    </input>
                </label>
                <label for = "password">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </label>
                <button type="submit" id="subscribe-button">I'm ready!</button>
            </div>
        </div>
    </>
     );
}
 
export default Subscribe;