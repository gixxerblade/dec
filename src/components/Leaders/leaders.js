import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import styled from "styled-components"
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
      position: "Secretary/Web",
      link: "https://www.facebook.com/USMarinez/",
    },
  ]

  return information.map(info => (
    <article className="column is-centered is-half has-text-dark notification is-secondary leader-cards">
      <div className="card">
        <div className="card-image">
          <figure class="image has-text-centered">
            <Img fixed={info.image} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title has-text-dark has-text-centered">{info.name}</p>
          <p className="subtitle has-text-centered">{info.position}</p>
          {info.link && (
            <p className="subtitle has-text-centered">
              <a rel="noreferrer" target="_blank" href={info.link}>
                <StyledFB size={50} />
              </a>
            </p>
          )}
        </div>
      </div>
    </article>
  ))
}
export default Leaders

const StyledFB = styled(FacebookCircle)`
  color: #3578e5;
  border-radius: 50%;
  &:hover {
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-image: linear-gradient(
      rgb(255, 143, 178) 0%,
      rgb(167, 151, 255) 50%,
      rgb(0, 229, 255) 100%
    );
    -webkit-background-clip: svg;
    -webkit-svg-fill-color: transparent;
  }
`
