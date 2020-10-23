import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Splash from "./splash"

const Home = () => (
  <>
    <Splash />
    <SEO title="Home" />
    <Layout>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container is-centered">
            <div className="columns is-full">
              <div className="column">
                <h2 className="title has-text-dark has-text-centered">
                  A Recreational Cycling Club in Eastern North Carolina
                </h2>
                <p className="is-size-4 has-text-centered has-text-dark">
                  Down East Cyclists are a group of like-minded people
                  interested in the promotion of safe cycling in eastern NC. The
                  club has annual elections to appoint officers, and monthly
                  meetings to both inform and listen to members.
                </p>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="title is-size-4	has-text-dark">
                Down East Cyclists Facebook
              </div>
              <iframe title="facebook feed"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdowneastcyclists&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=593868267388583"
                width="500"
                height="600"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)
export default Home
