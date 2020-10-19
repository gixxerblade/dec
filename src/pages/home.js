import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Splash from "./splash"
const Home = () => (
  <>
    <Splash />
    <SEO title="Home" />
    <Layout>
      <div className="home-container">
        <h1>Down East Cyclists</h1>
        <h2>A Recreational Cycling Club in Eastern North Carolina</h2>
        <p className="intro">
          Down East Cyclists are a group of like-minded people interested in the
          promotion of safe cycling in eastern NC. The club has annual elections
          to appoint officers, and monthly meetings to both inform and listen to
          members.
        </p>
      </div>
    </Layout>
  </>
)
export default Home
