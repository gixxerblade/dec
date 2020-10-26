import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import Leadership from "./leadership"
import Membership from "./membership"
import ByLaws from "./bylaws"
import Privacy from "./privacy"
import "./mystyles.scss"

const IndexPage = () => (
  <Router>
    <Home path="/" />
    <Leadership path="/leadership" />
    <Membership path="/membership"/>
    <ByLaws path="/bylaws" />
    <Privacy path="/privacy" />
  </Router>
)

export default IndexPage
