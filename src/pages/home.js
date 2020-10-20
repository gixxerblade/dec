import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dec from "../icons"
import Splash from "./splash"

const Home = () => (
  <>
    <Splash />
    <SEO title="Home" />
    <Layout>
      <div className="home-container">
        <Dec
          shadow="#000"
          details="#000"
          cyclists="#000"
          width={'75vw'}
          height={'auto'}
        />
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
