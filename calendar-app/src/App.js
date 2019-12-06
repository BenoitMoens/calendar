import React from 'react';
import Calendar from './components/Calendar.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Admin from './components/Admin.js'
import './components/Accueil'
import './App.css';
import Accueil from './components/Accueil';
//import Countdown from './components/Countdown.js/index.js';
//import ParentTimer from './components/ParentTimer.js';
// const app = express()
// const express = require('express-router')()


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
    <div>
      
      <Link to="/Accueil"> Accueil </Link>
      <Link to="/Admin"> Admin </Link>
      <Link to="/Calendar"> Calendar </Link>
     
      <Route path="/Accueil" component={Accueil}/>
      <Route path="/Admin" component={Admin}/>
      <Route path="/Calendar" component={Calendar}/>
    </div>
    
  </BrowserRouter>


    </div>
    
  );
}

export default App;
