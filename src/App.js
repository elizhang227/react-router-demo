import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainNav from './components/mainNav';
import HomePage from './components/homePage';
import About from './components/aboutPage';
import Contact from './components/contactPage';
import Topics from './components/topicsPage';

import './App.css';

const routesArray = [
  {linkRoute: '/', linkName: 'Homepage'},
  {linkRoute: '/about', linkName: 'About Page'},
  {linkRoute: '/contact', linkName: 'Contact Page'},
  {linkRoute: '/topics', linkName: 'Topics Page'},
]

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav routes={routesArray}/>
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
