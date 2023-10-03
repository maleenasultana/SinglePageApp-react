import React from 'react'
import "../components/Navbar.css";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>

        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand">Single Page Portfolio</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/hero">Hero</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/experience">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
