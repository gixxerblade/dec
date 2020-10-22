import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import "./mystyles.scss"

const IndexPage = () => (
  <Router>
    <Home path="/" />
  </Router>
)

export default IndexPage
