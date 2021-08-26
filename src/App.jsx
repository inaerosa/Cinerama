import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios'
import Movies from './components/Movies'
import Profile from './pages/Profile'


function App() {

  const [movie, setMovie] = useState([])
  const [fav, setFav] = useState([])
  const [favList, setFavList] = useState([])

  const baseURL = "https://api.tvmaze.com/shows?page=1"

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovie(response.data);
    }, [])
  })

  useEffect(() => {
    axios.get('http://localhost:3001/read').then((response) => {
      setFavList(response.data);
    })
  },[])

  const listAddFav = (id_movie, name, url, status) => {
    axios.post('http://localhost:3001/insert', {
      id_movie: id_movie,
      name: name,
      url: url, 
      status: status
    })
  }

  const handleClickAddition = (movie) => {
    if (!fav.includes(movie)){
      const newMovie = [...fav, movie]
      setFav(newMovie);
      listAddFav(newMovie.id, newMovie.name, newMovie.url, newMovie.status);
    }  
  }

  const handleClickRemoval = (movieId) => {
    setFav(fav.filter(fav => fav.id !== movieId));
    listRemoveFav(movieId);
  }

  const listRemoveFav = (movieId) => {
    axios.delete(`http://localhost:3001/delete${movieId}`)
  }

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact >
            <Movies movies={movie} handleClickAddition={handleClickAddition} handleClickRemoval={handleClickRemoval}/>
          </Route>
          <Route path="/profile" exact>
            <Profile fav={favList} handleClickRemoval={handleClickRemoval} />
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
