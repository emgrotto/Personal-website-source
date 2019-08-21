import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Contacts from './Contacts';
import Navbar from './Navbar';
import {Resume} from './Resume';
import {Home} from './Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
      </div>
      <Contacts />
      
    </Router>
  );
}

export default App;
