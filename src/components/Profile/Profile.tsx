import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import TrailStatus from "../TrailStatus/TrailStatus"

const Profile = ({ showModal }) => {
  const identity = useIdentityContext()
  const isLoggedIn = identity?.isLoggedIn
  const name = identity?.user?.user_metadata.full_name

  return (
    isLoggedIn ? (
      <div className="section mb-0 pb-0">
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="profile navigation"
        >
          <div className="navbar-start is-align-items-center">
            <h2 className="navbar-item has-text-dark">Trail Status</h2>
          </div>
          <div className="navbar-end is-justify-content-center is-align-items-center mr-2">
            <button onClick={showModal} className="button navbar-item has-text-dark">Logout</button>
            <div className="has-text-center has-text-dark navbar-item">Welcome, {name}</div>
          </div>
        </nav>
        <div className="section">
          <div className="container pt-0 mt-0">
            <div className="content">
              <TrailStatus />
            </div>
          </div>
        </div>
      </div>
    ) : null
  )
}
export default Profile