import React from 'react'
import Movie from './Movie'

const Movies = ({movies}) => {
    return ( 
        <>
        <div id="container">
             {movies.map(movie =>   
                 <Movie movie={movie} myList={movie.myList} key={movie.id}/>
               )}
        </div>
        </>

     );
}
 
export default Movies;