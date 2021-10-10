import React, { useRef, useEffect, useState } from "react"
import Layout from "../components/layout"
import Modal from '../components/Modal/modal'
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
const Home = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAsset(title: { eq: "ridedowneast" }) {
        id
        file {
          contentType
          url
        }
      }
    }
  `)
  const videoRef = useRef()

  const play = () => {
    videoRef.current.play()
  }

  useEffect(() => {
    let current = true
    if (current) {
      play()
    }
    return () => (current = false)
  })

  return (
    <>
    <Modal />
      <div viewport-fit="cover" className="hero is-fullheight success-video">
        <div className="hero-video">
          <video
            onPlay={play}
            ref={videoRef}
            type="video/mp4"
            className="hero-body"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={data.contentfulAsset.file.url} />
          </video>
        </div>
      </div>
      <Layout>
        <Seo title="Home" />
        <div className="hero is-fullheight">
          <div className="hero-body is-centered">
            <div className="home-content-box"></div>
            <div className="container is-full	home-content">
              <h2 className="title is-2 has-text-black has-text-centered">
                A Recreational Cycling Club in Eastern North Carolina
              </h2>
              <p className="subtitle is-size-3 has-text-centered has-text-black">
                Down East Cyclists are a group of like-minded people interested
                in the promotion of safe cycling in eastern NC. The club has
                annual elections to appoint officers, and monthly meetings to
                both inform and listen to members.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Home
