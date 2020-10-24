import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Content from './components/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Software from './components/Software';
import Movies from './components/Movies';
import Television from './components/Television';
import Games from './components/Games';
import Ebooks from './components/Ebooks';


const App = () : JSX.Element => {
  

  return(
    <>
      <Router>
      <div className="main">
        
      <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/software">
            <Software />
          </Route>
          <Route path="/television">
            <Television />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/ebooks">
            <Ebooks />
          </Route>
          
        </Switch>
        <div className="leftNav">
          <h1 style={{textAlign : 'center', color : 'white'}}>Torrent-Scraper</h1>
          <ul>
            
              <Link to="/">Home</Link>

              <Link to="/movies">Movies</Link>

              <Link to="/software">Software</Link>

              <Link to="/television">Television</Link>

              <Link to="/games">Games</Link>

              <Link to="/ebooks">Ebooks</Link>

            
          </ul>
          <span>Made by <a href="https://github.com/Adityesh" style={{color : 'white', textDecoration : 'none'}} target='_blank'>Adityesh</a></span>
        </div>
      </div>
      </Router>
    </>
  )
}

export default App;
