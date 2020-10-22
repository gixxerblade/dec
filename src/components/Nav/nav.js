import React from "react"
import { Link } from "gatsby"
import Dec from "../../icons"
const Nav = ({ siteTitle }) => {
  return (
    <nav
      className="navbar has-background-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div className="navbar-brand">
        {<Dec width="13rem" /> || <h1>siteTitle</h1>}
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">About</div>
            <div className="navbar-dropdown">
              <Link className="navbar-item about-dropdown" to="/leadership">
                Leadership
              </Link>
              <a
                className="navbar-item about-dropdown"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.downeastcyclists.com/about/membership/"
              >
                Membership
              </a>
            </div>
          </div>
          <Link className="navbar-item" to="/events">
            Events
          </Link>
          <Link className="navbar-item" to="/news">
            News
          </Link>
          <Link className="navbar-item" to="/mtb">
            MTB Trails
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Nav
