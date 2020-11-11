import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/layout"
import Maps from "../components/Maps"
const Hendo = () => {
  const location = {
    address: "Henderson Pond, Trail, Midway Park, NC 28544",
    lat: 34.703995,
    lng: -77.328844,
  }

  return (
    <Layout>
      <PageHeader title="Henderson Pond" />
      <div className="section">
        <div className="container">
          <div className="title has-text-dark has-text-centered">TODO:</div>
          <div className="container  has-text-centered">
            <Maps location={location} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Hendo
