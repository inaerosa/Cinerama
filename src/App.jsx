import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios'
import './App.css';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'

function App() {

  const [movie, setMovie] = useState([])

  const baseURL = "https://api.tvmaze.com/shows?page=1"

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovie(response.data);
    }, [])
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Home movies={movie} />
          </Route>
          <Route path="/login" component={Login} />

          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
