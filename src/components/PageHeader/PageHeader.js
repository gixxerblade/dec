import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

function PageHeader({ title }) {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "group.jpeg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <header>
      <BackgroundImage
        Tag="div"
        fluid={data.headerImage.childImageSharp.fluid}
        style={{
          backgroundPositionY: "top",
          height: "35vh",
        }}
      >
        <div className="section">
          <div className="container">
            <h1 className="title mt-6 has-text-white is-uppercase has-text-centered">
              {title}
            </h1>
          </div>
        </div>
      </BackgroundImage>
    </header>
  )
}

export default PageHeader
