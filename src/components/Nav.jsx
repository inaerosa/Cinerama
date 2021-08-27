import React, { useState } from 'react';

import { useHistory } from 'react-router-dom'

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
            <nav>
                <div className="menu">
                    <button id="title-nav" class="button-nav">
                        Cinerama
                    </button>

                    <input type="text" onChange={handleInputChange} placeholder="  search for a movie" size={30}></input>
                    <button id="icon" onClick={() => { handleClick(); setIsModalVisible(true) }}><Search ></Search></button>
                    {isModalVisible ? (
                        <Modal onClose={() => setIsModalVisible(false)}>
                            <MovieDetail movie={movie} />
                        </Modal>
                    ) : null}

                    <button onClick={() => { history.push(`/profile`); }} id="icon">
                        <User id="btn-login" />
                    </button>

                </div>

            </nav>
        </>
    );
}

export default Nav;