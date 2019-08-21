import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './Navbar.css';

class Navbar extends React.Component {
    render()  {
      return (
        <div className="navbar_container">
          <ul className="nav">
            <div className = "logo">
              <Link to="/">Emma Grotto</Link>
            </div>
              
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resumé</Link></li>
          
          </ul>
        </div>  
      )
    }
}

export default Navbar;