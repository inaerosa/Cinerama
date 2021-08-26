import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axios from 'axios'
import Movies from './components/Movies'
import Profile from './pages/Profile'
import Login from './pages/Login'

function App() {

  const [movie, setMovie] = useState([])
  const [fav, setFav] = useState([])
  const [userList, setUserList] = useState([])
  const [newLike, setNewLike] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/read').then((response) => {
      setUserList(response.data);
    })
  },[])


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
    // axios.put(`http://localhost:3001/update`${user._id}, {
    //   movie: movie
    // })
  }

  const handleClickRemoval = (movieId) => {
    setFav(fav.filter(fav => fav.id !== movieId));
    axios.delete(`http://localhost:3001/delete${fav.id}`)
  }
  
  const handleClickAddUser = (name, username, email, password) => {
    axios.post('http://localhost:3001/insert', {
      name: name,
      username: username,
      email: email,
      password: password
    })
  }

  const updateMovie = (fav) => {
    
  }

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact >
            <Movies movies={movie} fav={fav} handleClickAddition={handleClickAddition} handleClickRemoval={handleClickRemoval} updateMovie={updateMovie}/>
          </Route>
          <Route path="/login">
              <Login handleClickAddUser={handleClickAddUser}/>
          </Route>
          <Route path="/profile/:id" exact>
            <Profile fav={fav} handleClickRemoval={handleClickRemoval} userList={userList}/>
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
