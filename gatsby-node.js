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
  await buildAllEvents(graphql, createPage, infiniteScrollTemplate)
  const allBlogPostList = await buildAllBlogPostList(graphql)
  await buildPaginatedPages({
    graphql,
    totalBlogPostCount:
      allBlogPostList.data.allContentfulBlogPostList.totalCount,
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
