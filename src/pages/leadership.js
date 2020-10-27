import React from "react"
import Layout from "../components/layout"
import Leaders from "../components/Leaders"

const Leadership = () => {
  return (
    <Layout>
      <div className="section is-fullheight mt-6">
        <div className="title has-text-dark has-text-centered">Leadership</div>
        <div className="hero-body">
          <div className="columns is-centered is-multiline is-variable">
            <Leaders />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Leadership
