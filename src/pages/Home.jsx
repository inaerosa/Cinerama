import React from 'react';

import Movies from './../components/Movies'
import Nav from './../components/Nav'

const Home = (props) => {

    const movies = props.movies

    return (

        <div>
            <Nav/>
            <Movies movies={movies} />
        </div>
    );
}

export default Home;