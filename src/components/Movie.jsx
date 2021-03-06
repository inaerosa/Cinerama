import React, { useState } from 'react';
import Modal from './Modal'
import MovieDetail from './MovieDetail';
import './Movie.css'
const Movie = (props) => {
    
    const movie = props.movie;
    const [isModalVisible, setIsModalVisible] = useState(false)
  
    return (

        <div id="container">
            <div id="movie">
                <div id="data">
                    <button className="btn-movie" onClick={() => { setIsModalVisible(true) }}><img src={movie.image.medium} alt="" /><br></br> <p>{movie.name}</p> </button>
                    {isModalVisible ? (
                        <Modal onClose={() => setIsModalVisible(false)}>
                            <MovieDetail fav={props.fav} movie={movie} handleClickAddition={props.handleClickAddition} handleClickRemoval={props.handleClickRemoval}  /> 
                        </Modal>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Movie;