import React from 'react'
import { Heart, X } from 'react-feather';
import './MovieDetail.css'
import Transparent from './../img/transparent.png'
import Button from './../components/Button'


const MovieDetail = (props) => {

    const movie = props.movie;

    const original = `${movie.summary}`

    const strippedString = original.replace(/(<([^>]+)>)/gi, "");

    const addFavorite = (movie) => {
        props.handleClickAddition(movie);

    }

    const removeFavorite = (movie) => {
        props.handleClickRemoval(movie);
    }

    return (
        <>

            <div className="container-movie">
                <div className="container-horizontal">
                    {movie.image ? <img src={movie.image.medium} alt="" className="poster" /> : <img src={Transparent} alt="" srcset="" />}
                    <Button onClick={() => addFavorite(movie)}><Heart className="heart" /></Button>
                    <Button onClick={() => removeFavorite(movie)}><X /></Button>
                </div>

                <div className="info_filme">
                    <h1>{movie.name ? movie.name : ""}</h1>
                    <p>{movie.genres ? movie.genres : ""}</p>
                    <h3 id="sobre">About</h3>
                    <p>{strippedString}</p>

                </div>
            </div>
        </>

    );
}

export default MovieDetail;