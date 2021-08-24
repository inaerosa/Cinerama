import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios'
import Movies from './components/Movies'
import Profile from './pages/Profile'
import Login from './pages/Login'

function App() {

  const [movie, setMovie] = useState([])
  const [fav, setFav] = useState([])

  const baseURL = "https://api.tvmaze.com/shows?page=1"

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovie(response.data);
    }, [])
  })

  const handleClickAddition = (movie) => {
    if (!fav.includes(movie)){
      const newMovie = [...fav, movie]
      setFav(newMovie);
    } 
  }

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact >
            <Movies movies={movie} fav={fav}handleClickAddition={handleClickAddition}/>
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/profile" exact>
            <Profile fav={fav} />
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
