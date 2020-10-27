import React from "react"
import Layout from "../components/layout"
import Leaders from "../components/Leaders"

const Leadership = () => {
  return (
    <Layout>
      <div className="hero is-fullheight mt-6">
      <div className="title has-text-dark has-text-centered">Leadership</div>
        <div className="hero-body">
          <div className="columns is-centered is-vcentered is-multiline has-text-centered is-variable is-2-mobile is-2-tablet is-3-desktop is-8-widescreen is-2-fullhd">
            <Leaders />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Leadership
