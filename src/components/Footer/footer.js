import React from "react"
import { FacebookCircle, Instagram } from "@styled-icons/boxicons-logos"
import styled from "styled-components"
import {
  BicycleGallery,
  BicycleShop,
  CapeFearCyclists,
  CapeFearSorba,
} from "../../icons"
const Footer = () => {
  return (
    <>
      <footer className="section">
        <div className="columns">
          <div className="column">
            <h1 className="heading is-size-3 has-text-centered">Connect</h1>
            <div className="social-container">
              <FacebookCircle
                title="Facebook"
                className=" fb-circle"
                size={60}
              />
              <Instagram title="Instagram" className=" instagram" size={50} />
            </div>
          </div>
          <div className="column">
            <h1 className="heading is-size-3 has-text-centered">Links</h1>
            <div className="columns has-text-centered is-center">
              <div className="column">
                <a href="https://www.bicycle-gallery.com/">
                  <BicycleGallery />
                </a>
              </div>
              <div className="column">
                <BicycleShop />
              </div>
              <div className="column">
                <CapeFearCyclists />
              </div>
              <div className="column">
                <CapeFearSorba />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <h2 className="heading">
            &copy;{new Date().getFullYear()} Down East Cyclists
          </h2>
        </div>
      </footer>
    </>
  )
}
export default Footer
