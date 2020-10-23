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
              <div
                className="has"
                class="fb-page"
                data-href="https://www.facebook.com/downeastcyclists"
                data-tabs="timeline"
                data-width="500"
                data-height="300"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/downeastcyclists"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/downeastcyclists">
                    Down East Cyclists
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)
export default Home
