import React from 'react';
import Calendar from './components/Calendar.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Admin from './components/Admin.js'
import './components/Accueil'
import './App.css';
import Accueil from './components/Accueil';
import EditCalendar from './components/EditCalendar.js';
//import Countdown from './components/Countdown.js/index.js';
//import ParentTimer from './components/ParentTimer.js';
// const app = express()
// const express = require('express-router')()


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
    <div>
      
      {/* <Link to="/Accueil"> Accueil </Link>
      <Link to="/EditCalendar"><span className="link"> EditCalendar</span> </Link>
      <Link to="/Calendar"> Calendar </Link> */}
     
      <Route path="/Accueil" component={Accueil}/>
      <Route path="/EditCalendar" component={EditCalendar}/>
      <Route
        path='/Calendar'
        render={(props) => <Calendar {...props} edit={false} />}
      />
      <Route
        path='/EditCalendar'
        render={(props) => <Calendar {...props} edit={true} />}
      />
  
    </div>
    
  </BrowserRouter>


    </div>
    
  );
}

export default App;
