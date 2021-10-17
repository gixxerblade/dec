import React, { FC } from "react"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"

const Login = (props) => {
  const { showModal } = props
  const identity = useIdentityContext()
  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/", { replace: true })
  }
  return (
    <div>
      <h1 className="title">Login or Signup</h1>
      <button className="button is-dark" onClick={showModal}>
        Login
      </button>
    </div>
  )
}
export default Login