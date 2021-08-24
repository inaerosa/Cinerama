import React from 'react'
import Movie from './Movie'
import Nav from './Nav'


const Movies = (props) => {
    const movies = props.movies;
    return ( 
        <>
        <Nav/>
        <div id="container">
             {movies.map(movie =>   
                 <Movie movie={movie} fav={props.fav} key={movie.id} handleClickAddition={props.handleClickAddition} />
         
               )}
        </div>
        </>

     );
}
 
export default Movies;