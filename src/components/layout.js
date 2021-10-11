import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IdentityContextProvider } from "react-netlify-identity-widget";
import Nav from "./Nav"
import Footer from "./Footer"
import "../assets/layout.scss"
const Layout = ({ children }) => {
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
    <IdentityContextProvider url="https://www.downeastcyclists.com">
      <div className="sticky-wrapper sticky">
        <Nav
          siteTitle={data.site.siteMetadata?.title ?? `Down East Cyclists`}
        />
      </div>
      <div className="container">
        <main>{children}</main>
        <Footer />
      </div>
    </IdentityContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
