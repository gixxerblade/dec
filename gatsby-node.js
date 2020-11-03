const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMeetupEvent(sort: { order: ASC, fields: time }) {
        edges {
          node {
            id
            time
            description
            local_date
            local_time
            name
            link
            duration
            venue {
              address_1
              city
              name
              state
              zip
            }
            status
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const {
      data: {
        allMeetupEvent: { edges },
      },
    } = result
    const infiniteScrollTemplate = path.resolve(
      `src/templates/infinite-scroll-template.js`
    )
    createPage({
      path: "/allevents",
      component: infiniteScrollTemplate,
      context: {
        edges,
      },
    })
    return edges
  })
}
