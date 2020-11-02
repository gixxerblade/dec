import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import rideDownEast from "../../video/ridedowneast.mp4"
import { CloseCircle } from "@styled-icons/evaicons-solid/CloseCircle"
const Home = () => {
  const [closed, setClosed] = useState(false)
  const videoRef = useRef()

  const play = () => {
    videoRef.current.play()
    videoRef.current.onended = end
  }

  useEffect(() => {
    let current = true

    if (current) {
      play()
    }

    return () => (current = false)
  })

  const end = () => {
    document.querySelector(".success-video").style.display = "none"
  }
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="section is-fullheight">
          <div className="container is-centered">
            <div className="container is-full pb-5">
              <h2 className="title has-text-dark has-text-centered">
                A Recreational Cycling Club in Eastern North Carolina
              </h2>
              <p className="is-size-4 has-text-centered has-text-dark">
                Down East Cyclists are a group of like-minded people interested
                in the promotion of safe cycling in eastern NC. The club has
                annual elections to appoint officers, and monthly meetings to
                both inform and listen to members.
              </p>
            </div>
            <div
              className={`container success-video ${closed ? "close-vid" : ""}`}
            >
              <CloseCircle
                size={50}
                onKeyDown={() => setClosed(!closed)}
                onClick={() => setClosed(!closed)}
              />
              <video
                onPlay={play}
                ref={videoRef}
                type="video/mp4"
                className="is-fluid"
                muted
                controls
              >
                <source src={rideDownEast} />
              </video>
            </div>
            <div className="container has-text-centered is-fluid fb-container">
              <iframe
                width="500"
                height="600"
                title="facebook feed"
                className="facebook"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdowneastcyclists&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=593868267388583"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Home
