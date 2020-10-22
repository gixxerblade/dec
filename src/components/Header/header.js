import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Dec from "../../icons"

const Header = ({ siteTitle }) => {
  return (
    <header className="container is-fluid has-background-dark">
      <h1 className="title is-1 has-text-centered">
        <Link to="/">
          {<Dec className="navbar-brand" width="15rem" /> || siteTitle}
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Down East Cyclists`,
}

export default Header
