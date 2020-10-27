import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
const Leaders = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { in: "leaders" } }) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
            name
          }
        }
      }
    }
  `)
  console.log(data)
  const information = [
    {
      name: "Joe Hanks",
      image: data.allFile.edges[0].node.childImageSharp.fixed,
      position: "President",
      link: "https://www.facebook.com/joseph.hanks.35",
    },
    {
      name: "Bruce Lockhart",
      image: data.allFile.edges[1].node.childImageSharp.fixed,
      position: "Vice-President",
      link: "https://www.facebook.com/cuzinbruce",
    },
    {
      name: "Steve Clark",
      image: data.allFile.edges[2].node.childImageSharp.fixed,
      position: "Secretary",
      link: "https://www.facebook.com/USMarinez/",
    },
    {
      name: "Van Carter",
      image: data.allFile.edges[3].node.childImageSharp.fixed,
      position: "Treasurer",
      link: "",
    },
  ]

  return information.map(info => (
    <article className="column has-text-dark notification is-secondary">
      <div className="card">
        <figure class="image has-text-centered">
          <Img fixed={info.image} />
        </figure>
        <p className="title has-text-dark has-text-centered">{info.name}</p>
        <p className="subtitle has-text-centered">{info.position}</p>
        {info.link && (
          <p className="subtitle has-text-centered">
            <a rel="noreferrer" target="_blank" href={info.link}>
              <FacebookCircle className="fb-circle" size={50} />
            </a>
          </p>
        )}
      </div>
    </article>
  ))
}
export default Leaders
