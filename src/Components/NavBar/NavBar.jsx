import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../app.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link to="/" className="fs-2 ubuntu navbar-brand">
          Heck<span className="text-primary">Stack</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink activeClassName='active' to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/location" className="nav-link">
              Location
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episodes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
