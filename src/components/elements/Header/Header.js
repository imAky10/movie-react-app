import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">
          <h1 className="rmdb-logo" > Moviefy </h1>
          
        </Link>
        
      </div>
    </div>
    
  )
}

export default Header;