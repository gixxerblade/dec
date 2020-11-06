const path = require("path")
const {
  buildAllEvents,
  buildAllBlogPostList,
  buildPaginatedPages,
  buildIndividualBlogPostPage,
} = require("./gatsby-node-helpers")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const infiniteScrollTemplate = path.resolve(
    `./src/templates/infinite-scroll-template.js`
  )
  const blogTemplate = path.resolve("./src/templates/blog-list-template.js")
  const blogPostTemplate = path.resolve('./src/templates/blog-post-template.js')

  await buildAllEvents(graphql, createPage, infiniteScrollTemplate)
  const allBlogPostList = await buildAllBlogPostList(graphql)
  await buildPaginatedPages({
    graphql,
    totalBlogPostCount: allBlogPostList.data.allContentfulBlogPost.totalCount,
    blogTemplate,
    createPage,
  })
  await buildIndividualBlogPostPage({
    graphql,
    blogPostTemplate,
    allBlogPostList,
    createPage,
  })
}
