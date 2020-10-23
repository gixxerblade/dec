import React from "react"
import { FacebookCircle, Instagram } from "@styled-icons/boxicons-logos"
import styled from "styled-components"
import {
  BicycleGallery,
  BicycleShop,
  CapeFearCyclists,
  CapeFearSorba,
  Icons,
} from "../../icons"
const Footer = () => {
  return (
    <>
      <footer className="section has-text-grey has-background-light">
        <div className="columns">
          <div className="column">
            <h1 className="heading is-size-3 has-text-centered has-text-weight-bold">Connect</h1>
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
            <h1 className="heading is-size-3 has-text-centered has-text-weight-bold	">Links</h1>
            <div className="columns has-text-centered is-center">
              <div className="column">
                <a href="https://www.bicycle-gallery.com/">
                  <StyledIcon>
                    <BicycleGallery />
                  </StyledIcon>
                </a>
              </div>
              <div className="column">
                <StyledIcon>
                  <BicycleShop />
                </StyledIcon>
              </div>
              <div className="column">
                <StyledIcon>
                  <CapeFearCyclists />
                </StyledIcon>
              </div>
              <div className="column">
                <StyledIcon>
                  <CapeFearSorba />
                </StyledIcon>
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

const StyledIcon = styled(Icons)`
  svg {
    fill: $black;
    &:hover {
      transition: 0.2s linear;
      fill: #ef1a25;
    }
  }
`
