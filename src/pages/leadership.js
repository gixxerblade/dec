import React from "react"
import Layout from "../components/layout"
import Leaders from "../components/Leaders"
import PageHeader from '../components/PageHeader/PageHeader';

const Leadership = () => {
  return (
    <Layout>
    <PageHeader title="leadership"/>
      <div className="section is-fullheight mt-6">
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
