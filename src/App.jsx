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
      console.log(movie.name);
      listAddFav(movie.id, movie.name, movie.url,movie.status);
    } 
  }

  const handleClickRemoval = (movie) => {
    setFav(fav.filter(fav => fav.id !== movie.id));
    listRemoveFav(movie._id); 
  }

  const listRemoveFav = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Movies movies={movie} handleClickAddition={handleClickAddition} handleClickRemoval={handleClickRemoval}/>
          </Route>
          <Route path="/profile" exact>
            <Profile favList={favList} handleClickRemoval={handleClickRemoval} />
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
