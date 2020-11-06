import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/layout"
import { navigate } from "@reach/router"

const BlogPost = ({ pageContext }) => {
  const {
    contentfulData: {
      data: {
        contentfulBlogPost: {
          publishDate,
          postTitle,
          content: { childMarkdownRemark },
          author,
          categories,
        },
      },
    },
  } = pageContext
  //console.log(contentfulBlogPost)

  return (
    <Layout>
      <PageHeader title={postTitle} />
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="heading">{postTitle}</div>
              <div className="tags mb-0 has-addons">
                <span className="heading">Tags:&nbsp;</span>
                {categories.map(tag => {
                  return (
                    <span key={tag.id} className="tag is-info is-rounded">
                      {tag.content}
                    </span>
                  )
                })}
              </div>
              <div className="heading is-uppercase">
                Author:&nbsp;{author || "DEC"}
              </div>
              <div className="heading">Date:&nbsp;{publishDate}</div>
            </div>
            <div className="column has-text-right">
              <button
                className="button is-info"
                onClick={() => {
                  typeof window.history !== "undefined" && navigate(-1)
                }}
              >
                Go Back
              </button>
            </div>
          </div>
          <div className="content">
            <hr />
            <div
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
              }}
              dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default BlogPost
