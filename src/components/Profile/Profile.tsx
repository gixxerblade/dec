import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

const Profile = ({ showModal }) => {
  const identity = useIdentityContext()
  const isLoggedIn = identity?.isLoggedIn
  const name = identity?.user?.user_metadata.full_name

  return (
    isLoggedIn ? (
      <nav className="navbar is-fixed-top">
        <button onClick={showModal} className="button">Logout</button>
        <Link to="/dashboard/trailstatus">B3 Status</Link>
        <span>Welcome, {name}</span>
      </nav>
    ) : null
  )
}
export default Profile