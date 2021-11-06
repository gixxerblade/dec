import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"

const Login = ({ showModal }) => {
  const identity = useIdentityContext()
  if (identity?.isLoggedIn) {
    navigate("/dashboard/", { replace: true })
  }
  return (
    <div className="section">
      <h1 className="title has-text-black">Login or Signup</h1>
      <button className="button is-black" onClick={showModal}>
        Login
      </button>
    </div>
  )
}
export default Login