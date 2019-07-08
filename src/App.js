import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';


const Index = props => {
  console.log('props are', props)
  return (
    <>
      <h2>Home Page</h2>
      <p>Hello {props.name}</p>
    </>
  )
}
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        <Route 
          path='/' 
          exact 
          render={routeProps => <Index name='Eli' {...routeProps} /> }
        />
        <Route path='/about/' component={About} />
        <Route path='/contact/' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
