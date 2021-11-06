import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import IdentityModal from "react-netlify-identity-widget"
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute"
import Layout from "../../components/layout"
import Login from "../../components/Login/Login"
import Profile from "../../components/Profile/Profile"
import TrailStatus from "../../components/TrailStatus/TrailStatus"
import "react-netlify-identity-widget/styles.css"
import "@reach/tabs/styles.css"

const Dashboard = ({ location }) => {
  const [isVisible, setIsVisible] = useState(false)
  const showModal = () => setIsVisible(true)
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("login", { replace: true })
    }
  }, [])

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        {/* PrivateRoute to prevent unauthenticated users from accessing protected areas */}
        <PrivateRoute path="dashboard/trailstatus" component={TrailStatus} />
        <Login path="dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setIsVisible(false)}
        onLogin={() => setIsVisible(false)}
      />
    </Layout>
  )
}
export default Dashboard