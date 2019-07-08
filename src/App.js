import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainNav from './components/mainNav';
import HomePage from './components/homePage';
import About from './components/aboutPage';
import Contact from './components/contactPage';
import Topics from './components/topicsPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Route 
          path='/' 
          exact 
          render={routeProps => <HomePage name='Eli' {...routeProps} /> }
        />
        <Route path='/about/' component={About} />
        <Route path='/contact/' component={Contact} />
        <Route path='/topics' component={Topics} />
      </div>
    </Router>
  );
}

export default App;
