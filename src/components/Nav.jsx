import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, useHistory, Link} from 'react-router-dom'

import { User, Search } from 'react-feather';

import './Nav.css'


import axios from 'axios';
import MovieDetail from './MovieDetail'
import Modal from './Modal'



const Nav = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [movie, setMovie] = useState({});

    const history = useHistory();

    const handleInputChange = (e) => {
        setInputSearch(e.target.value);
    }


    const handleClick = async () => {
        const { data } = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${inputSearch}`)
        setMovie(data)
    }

    const [isModalVisible, setIsModalVisible] = useState(false)


    return (

        <>
            <Router>
                <Switch>
                    <nav>
                        <div className="menu">
                            <button id="title-nav" class="button-nav">
                                Cinerama
                            </button>
                            <button onClick={() => {  history.push(`/profile`) }}>Movies</button>
                        
                            <input type="text" onChange={handleInputChange} placeholder="  search for a movie" size={30}></input>
                            <button id="icon" onClick={() => {handleClick(); setIsModalVisible(true) }}><Search ></Search></button>
                            {isModalVisible ? (
                                <Modal onClose={() => setIsModalVisible(false)}>
                                    <MovieDetail movie={movie} />
                                </Modal>
                            ) : null}
                             <button  id="btn-login" class="button-nav" onClick={() => {  history.push(`/profile`) }}><User id="icon" /> 
                                <div id="login-icon">   
                                    
                                </div>
                            </button>
                        </div>

                    </nav>
                </Switch>
            </Router>
        </>

    );
}

export default Nav;