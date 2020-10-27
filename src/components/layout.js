/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./Nav"
import Footer from "./Footer"
import "../assets/layout.scss"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  // * For sticky header
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setIsSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`} ref={ref}>
        <Nav
          siteTitle={data.site.siteMetadata?.title || `Down East Cyclists`}
        />
      </div>
      <div className="container">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
