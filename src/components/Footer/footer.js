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

const friends = [
  {
    title: "Bicycle Gallery",
    icon: <BicycleGallery />,
    link: "https://www.bicycle-gallery.com/",
  },
  {
    title: "Bicycle Shop",
    icon: <BicycleShop />,
    link: "https://www.thebicycleshop.com",
  },
  {
    title: "Cape Fear Cyclists",
    icon: <CapeFearCyclists />,
    link: "https://www.capefearcyclists.org/",
  },
  {
    title: "Cape Fear Sorba",
    icon: <CapeFearSorba />,
    link: "https://capefearsorba.org/",
  },
]

const Footer = () => {
  console.log(friends)
  return (
    <>
      <footer className="section has-text-grey has-background-light">
        <div className="columns">
          <div className="column">
            <h1 className="heading is-size-4 has-text-centered has-text-weight-bold">
              Connect
            </h1>
            <div className="social-container">
              <a
                aria-label="Down east cyclists Facebook"
                href="https://www.facebook.com/downeastcyclists"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookCircle
                  title="Facebook"
                  className="fb-circle"
                  size={60}
                />
              </a>
              <a
                aria-label="down east cyclists instagram"
                href="https://www.instagram.com/downeastcyclists/"
              >
                <Instagram title="Instagram" className="instagram" size={50} />
              </a>
            </div>
          </div>
          <div className="column">
            <h1 className="heading is-size-4 has-text-centered has-text-weight-bold	">
              Links
            </h1>
            <div className="columns has-text-centered is-center">
              {friends &&
                friends.map(friend => {
                  return (
                    <div key={friend.title} className="column">
                      <a
                        target="_blank"
                        aria-label={friend.title}
                        rel="noreferrer noopener"
                        href={friend.link}
                        title={friend.title}
                      >
                        <StyledIcon>{friend.icon}</StyledIcon>
                      </a>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className="column">
            <h1 className="heading is-size-4 has-text-centered has-text-weight-bold	">
              Weekly Mileage
            </h1>
            <div className="has-text-centered">
              <iframe
                height="160"
                width="300"
                frameborder="0"
                allowTransparency="true"
                scrolling="no"
                loading="lazy"
                src="https://www.strava.com/clubs/down-east-cyclists/latest-rides/8683108f61f96a7b5c9c472f4176a0b942b74964?show_rides=false"
              ></iframe>
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
