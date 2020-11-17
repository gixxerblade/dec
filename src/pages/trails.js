import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/layout"
import { Link } from "gatsby"
const Trails = () => {
  return (
    <Layout>
      <PageHeader title="Local MTB Trails" />
      <div className="section">
        <div className="container has-text-centered">
          <h2 className="title has-text-dark is-size-3 is-uppercase">
            Onslow County Trails
          </h2>
          <h3 className="heading is-size-4">
            <Link title="Henderson Pond Trail" to="/hendo">
              Henderson Pond Trail
            </Link>
          </h3>
          <h3 className="heading is-size-4">
            <Link to="/commons">Jacksonville Commons</Link>
          </h3>
          <h3 className="heading is-size-4">
            Jacksonville City Pump Track (Coming soon!)
          </h3>
        </div>
        <hr />
        <div className="container has-text-centered is-uppercase">
          <h2 className="title has-text-dark is-size-3">
            Craven County Trails
          </h2>
          <h3 className="heading is-size-4">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.alltrails.com/trail/us/north-carolina/piranha-pit-loop-trail"
            >
              Piranha Pit
            </a>
          </h3>
        </div>
        <hr />
        <div className="container has-text-centered is-uppercase">
          <h2 className="title has-text-dark is-size-3">
            Cape Fear SORBA Trails
          </h2>
          <h3 className="heading is-size-4">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="http://www.meetup.com/Down-East-Cyclists/pages/Blue_Clay_Bike_Park/"
            >
              Blue Clay
            </a>
          </h3>
          <h3 className="heading is-size-4">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="http://www.meetup.com/Down-East-Cyclists/pages/Brunswick_Nature_Park/"
            >
              Brunswick Nature Park
            </a>
          </h3>
          <h3 className="heading is-size-4">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="http://blog.capefearsorba.com/about-3/local-trails/browns-creek-trail/"
            >
              Brown's Creek
            </a>
          </h3>
        </div>{" "}
        <hr />
        <div className="container has-text-centered is-uppercase">
          <h2 className="title has-text-dark is-size-3">Greenville Trails</h2>
          <h3 className="heading is-size-4">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="http://www.meetup.com/Down-East-Cyclists/pages/Bicycle_Post_Trail%2C_Greenville"
            >
              Bike Post Trails
            </a>
          </h3>
        </div>
        <hr />
        <div className="container has-text-centered">
          <div className="heading is-size-4">
            Check back for more trail system updates and additions!
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Trails
