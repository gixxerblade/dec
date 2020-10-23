import React, { useState } from "react"
import { Link } from "gatsby"
import Dec from "../../icons"
const Nav = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav
      className="navbar has-background-dark is-fluid"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => setIsActive(!isActive)}
        role="button"
        className={`navbar-burger burger has-text-light are-large ${
          isActive ? "is-active" : ""
        }`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div className="navbar-brand">
        {<Dec width="13rem" /> || <h1>{siteTitle}</h1>}
      </div>
      <div
        onClick={() => setIsActive(!isActive)}
        className={`navbar-menu ${
          isActive ? "is-active has-background-dark" : ""
        }`}
      >
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">About</div>
            <div className="navbar-dropdown">
              <Link className="navbar-item dropdowns-a" to="/leadership">
                Leadership
              </Link>
              <a
                className="navbar-item dropdowns-a"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.downeastcyclists.com/about/membership/"
              >
                Membership
              </a>
              <Link className="navbar-item dropdowns-a" to="/bylaws">
                By Laws
              </Link>
              <Link className="navbar-item dropdowns-a" to="/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/events">
            Events
          </Link>
          <Link className="navbar-item" to="/news">
            News
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">MTB Trails</div>
            <div className="navbar-dropdown">
              <Link className="navbar-item dropdowns-a" to="/hendo">
                Hendo
              </Link>
              <Link className="navbar-item dropdowns-a" to="/commons">
                Commons
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Nav
