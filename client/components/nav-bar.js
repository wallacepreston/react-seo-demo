import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => (
  <nav>
    <div className="container">
    React SEO Demo | <Link to="/">Home</Link> | Welcome! What would you like to view? 
    <p>
      Routing: <Link to="/routing/bad-component-switching">Bad Component Switching</Link> | <Link to="/routing/browser-router">Browser Router Demo</Link> | <Link to="/routing/hash-router">Hash Router Demo</Link>
      <br></br>
      Meta Tags: <Link to="/header/no-helmet/">No Helmet</Link> | <Link to="/header/with-helmet/">With Helmet</Link>
    </p>
    </div>
  </nav>
)

export default NavBar;
