import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const BlogPostLink = ({
  featuredImage,
  title,
  slug,
  author,
  publishDate,
  excerpt,
}) => {
  return (
    <div className="section article blog-line">
      <div className="content has-text-dark">
        <div className="container is-fullhd has-text-centered">
          <Link to={`/blog/${slug}`}>
            <Img
              Tag="figure"
              fixed={featuredImage}
              className="card-image"
              title={title}
            />
          </Link>
          <Link to={`/blog/${slug}`}>
            <h1 className="title is-4 has-text-dark has-text-centered article-title mb-2">
              {title}
            </h1>
          </Link>
          <div className="container my-1">
            <div className="tags has-addons level-item has-text-centered">
              <span className="tag is-rounded is-info">
                {author || "Down East Cyclists"}
              </span>
              <span className="tag is-rounded">{publishDate}</span>
            </div>
          </div>
          <div className="content is-size-5 article-body has-text-left">{excerpt}</div>
        </div>
      </div>
      <div className="container has-text-centered">
        <Link to={`/blog/${slug}`}>
          <button className="button is-medium is-right">Read More</button>
        </Link>
      </div>
      <br />
    </div>
  )
}

const Blog = ({ pageContext }) => {
  const {
    currentPage,
    isFirstPage,
    isLastPage,
    totalPages,
    contentfulData,
  } = pageContext
  // * Alternate image
  const dec = useStaticQuery(graphql`
    {
      contentfulAsset(file: { fileName: { eq: "hungry_toad-48.jpg" } }) {
        id
        fixed {
          ...GatsbyContentfulFixed
        }
        title
      }
    }
  `)
  const nodes = contentfulData.allContentfulBlogPost.edges
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`
  return (
    <Layout>
      <PageHeader title="news" />
      <div className="container">
        <section className="articles">
          <div className="column is-8 is-offset-2">
            {nodes.map(({ node }) => {
              return (
                <BlogPostLink
                  key={node.id}
                  featuredImage={
                    node?.featuredImage?.fixed || dec?.contentfulAsset.fixed
                  }
                  title={node.postTitle}
                  slug={node.slug}
                  author={node.author}
                  publishDate={node.publishDate}
                  excerpt={node?.content?.childMarkdownRemark?.excerpt}
                />
              )
            })}
          </div>
        </section>
      </div>
      {/* Pagination */}
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        {!isFirstPage && (
          <Link to={prevPage} className="pagination-previous">
            Previous
          </Link>
        )}
        {!isLastPage && (
          <Link to={nextPage} className="pagination-next">
            Next page
          </Link>
        )}
        <ul className="pagination-list">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <Link
                to={`${index === 0 ? "/blog" : `/blog/${index + 1}`}`}
                className={`pagination-link ${
                  index + 1 === currentPage ? "is-current" : ""
                }`}
                aria-label={`Go to page ${index}`}
                title={`Go to page ${index + 1}`}
              >
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <br/>
    </Layout>
  )
}
export default Blog
