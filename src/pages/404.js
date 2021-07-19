import React from "react"
import Dec from "../icons"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <br />
    <br />
    <div className="section">
      <div className="container">
        <div className="container">
          <h1 className="title is-1 has-text-black has-text-centered">
            Page Not Found
          </h1>
          <p className="title is-3 has-text-black has-text-centered">
            You just hit a route that doesn&#39;t exist...
            <span role="img" aria-label="sadface">
              😥
            </span>
            .
          </p>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container has-text-centered">
        <Link id="sadface-link" title="Click to go home" to="/">
          <Dec shadow="#000" cyclists="#000" details="gray" height="300" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
