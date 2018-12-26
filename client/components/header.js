import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => (
    <nav>
      <div className="container">
        Hello World | <Link to="/home">Home</Link> | Welcome! What would you like to view? <Link to="/">Log In</Link> | <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
)

export default Header
