import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import Leadership from "./leadership"
import Membership from "./membership"
import ByLaws from "./bylaws"
import Privacy from "./privacy"
import Events from "./events"

import "./mystyles.scss"

const IndexPage = () => (
  <Router>
    <Home path="/" />
    <Leadership path="/leadership" />
    <Membership path="/membership" />
    <ByLaws path="/bylaws" />
    <Privacy path="/privacy" />
    <Events path="/events" />
  </Router>
)

export default IndexPage
