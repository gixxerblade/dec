const path = require("path")
const {
  buildAllBlogPostList,
  buildPaginatedPages,
  buildIndividualBlogPostPage,
} = require("./gatsby-node-helpers")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogListTemplate = path.resolve("./src/templates/blog-list-template.js")
  const blogPostTemplate = path.resolve('./src/templates/blog-post-template.js')

  const allBlogPostList = await buildAllBlogPostList(graphql)
  await buildPaginatedPages({
    graphql,
    totalBlogPostCount: allBlogPostList.data.allContentfulBlogPost.totalCount,
    blogListTemplate,
    createPage,
  })
  await buildIndividualBlogPostPage({
    graphql,
    blogPostTemplate,
    allBlogPostList,
    createPage,
  })
}
