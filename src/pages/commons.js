import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/layout"
import CommonMap from "../components/Maps/commonMap"

const Commons = () => {
  const location = {
    lat: 34.794045,
    lng: -77.403597,
  }

  return (
    <Layout>
      <PageHeader title="Jacksonville Commons" />
      <div className="section">
        <div className="container">
          <div className="columns p-3">
            <div className="column has-text-centered p-1">
              <iframe
                style={{
                  height: "17.5rem",
                  width: "19.75rem",
                  border: "none",
                  overflow: "hidden",
                }}
                src="https://www.singletracks.com/ajax/trail_conditions_widget.php?hash=i:1:7958&amp;width=350&amp;height=250"
                width="300"
                height="150"
                scrolling="no"
                title="commons trail conditions"
              ></iframe>
            </div>
            <div className="p-3 column is-three-fifths is-size-5">
              <h1 className="heading is-uppercase has-text-centered is-size-4">
                jacksonville commons mtb course
              </h1>
              <p className=" has-text-justified p-3 is-size-5">
                Jacksonville Commons “Challenge Course” is a ~3.0 mile single
                and double track trail located within the Jacksonville Commons
                housing subdivision. The “Green” loop is aprox .75 miles of easy
                double track and the “Blue” loop is 3.0 miles of winding single
                track with some “fun” features added in.
              </p>
            </div>
            <div className="column"></div>
          </div>
          <CommonMap location={location} />
          <div className="container pt-3">
            <div className="columns has-text-centered">
              <div className="column has-text-right">
                <a href="../objects/blue-trail.gpx">Blue Trail GPX Route</a>
              </div>
              <div className="column has-text-left">
                <a href="../objects/green-trail.gpx">Green Trail GPX Route</a>
              </div>
            </div>
          </div>
          <div className="container"></div>
        </div>
      </div>
    </Layout>
  )
}
export default Commons
