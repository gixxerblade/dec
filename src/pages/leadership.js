import React from "react"
import Layout from "../components/layout"
import Leaders from "../components/Leaders"

const Leadership = () => {
  return (
    <Layout>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="columns has-text-centered is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
            <Leaders />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Leadership
