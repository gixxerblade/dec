import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
const Thanks = () => (
  <Layout>
    <div className="hero is-large is-bold is-dark">
      <div className="hero-head"></div>
      <div className="hero-body has-text-centered">
        <Link title="Click to go home" to="/">
          <h1 className="title">Thank you!</h1>
          <h3 className="subtitle is-size-3">
            Someone will be in contact with you shortly.
          </h3>
        </Link>
      </div>
      <div className="hero-foot"></div>
    </div>
  </Layout>
)

export default Thanks
