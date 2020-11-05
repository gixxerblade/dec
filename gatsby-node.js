const path = require("path")
const {
  buildAllEvents,
  buildAllBlogPostList,
} = require("./gatsby-node-helpers")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const infiniteScrollTemplate = path.resolve(
    `./src/templates/infinite-scroll-template.js`
  )
  await buildAllEvents(graphql, createPage, infiniteScrollTemplate)
}
