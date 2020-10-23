import React from "react"
import { FacebookCircle, Instagram } from "@styled-icons/boxicons-logos"
import { BicycleGallery, BicycleShop } from "../../icons"
const Footer = () => (
  <>
    <footer className="section">
      <div className="columns">
        <div className="column">
          <h1 className="heading is-size-3 has-text-centered">Connect</h1>
          <div className="social-container">
            <FacebookCircle title="Facebook" className=" fb-circle" size={60} />
            <Instagram title="Instagram" className=" instagram" size={50} />
          </div>
        </div>
        <div className="column">
          <h1 className="heading is-size-3 has-text-centered">Links</h1>
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
export default Footer
