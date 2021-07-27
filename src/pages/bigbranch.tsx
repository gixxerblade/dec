import React, { FC, Props } from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import Maps from "../components/Maps"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import { StaticImage, getImage, GatsbyImage, getSrc } from "gatsby-plugin-image"

const BigBranch: FC = ({}) => {
  const data = useStaticQuery(graphql`
    {
      b3_alt: contentfulAsset(file: { fileName: { eq: "b3_color.jpg" } }) {
        gatsbyImageData(width: 600, quality: 100)
      }
      b3_map: contentfulAsset(
        file: { fileName: { eq: "big_branch_bike_park_trail.jpg" } }
      ) {
        id
        gatsbyImageData(width: 600, quality: 100)
      }
      b3_concept_map: contentfulAsset(
        file: { fileName: { eq: "b3_future_trail.png" } }
      ) {
        gatsbyImageData(width: 600, quality: 100)
      }
    }
  `)

  const b3_image = getImage(data.b3_alt)
  const b3_map = getImage(data.b3_map)
  const b3_concept = getImage(data.b3_concept_map)

  return (
    <Layout>
      <PageHeader title="Big Branch Bike Park" className="has-text-white" />
      <div className="section pb-0">
        <div className="container is-fluid has-text-centered">
          <figure className="image title-image">
            <GatsbyImage alt="B3 Image" image={b3_image} />
          </figure>
          <br />
          <div className="content has-text-centered">
            <a
              href="https://www.strava.com/segments/28334000"
              target="_blank"
              rel="noopener"
            >
              Inner Loop Map
            </a>
            <br />
            <a
              href="https://www.strava.com/segments/28334049"
              target="_blank"
              rel="noopener"
            >
              Outer Loop Map
            </a>
          </div>
        </div>
      </div>
      <div className="section pb-0 pt-2 is-medium">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              With the help of a NC Parks-Recreational Trails grant, Onslow
              County completed construction of a new mountain bike park named
              Big Branch Bike Park, located within the existing Burton Park area. The
              park will also feature a cross-country running section.
            </p>
            <p>
              Big Branch Bike Park features a 1.5 mile beginner double flow
              track (Inner Loop) and a 4.5 mile intermediate single-track (Outer
              Loop).
            </p>
            <p>
              The trail is open from dawn to dusk and the county usually locks
              the gate before dark.
            </p>
            <p className="has-text-weight-bold">Trail direction switches based on day of week:</p>
            <div className="list-item">M, W, F, Su : Clockwise</div>
            <div className="list-item">T, Th, Sa: Counter Clockwise</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <figure className="image title-image p-2 pt-3 has-text-centered has-background-white-ter">
            <GatsbyImage alt="B3 Map" image={b3_map} />
            <figcaption className="has-text-centered pt-1 has-text-weight-bold">
              Current Big Branch Bike Park Configuration
            </figcaption>
          </figure>
          <br />
          <figure className="image title-image has-text-centered p-2 pt-3 has-background-white-ter">
            <GatsbyImage alt="B3 Map" image={b3_concept} />
            <figcaption className="has-text-centered pt-1 has-text-weight-bold">
              Future Concept of Big Branch Bike Park
            </figcaption>
          </figure>
        </div>
      </div>
    </Layout>
  )
}

export default BigBranch
