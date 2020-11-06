const buildAllEvents = async (graphql, createPage, infiniteScrollTemplate) => {
  const allMeetupEvents = await graphql(`
    query {
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
  `)
  createPage({
    path: "/allevents",
    component: infiniteScrollTemplate,
    context: {
      events: allMeetupEvents.data.allMeetupEvent.edges,
    },
  })
}

const buildAllBlogPostList = async graphql => {
  const allBlogPostList = await graphql(`
    query {
      allContentfulBlogPost {
        totalCount
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return allBlogPostList
}

const buildPaginatedPages = async ({
  graphql,
  createPage,
  blogListTemplate,
  totalBlogPostCount,
}) => {
  const postsPerPage = 3
  const totalPages = Math.ceil(totalBlogPostCount / postsPerPage)

  let index = 0

  while (index < totalPages) {
    const currentPage = index + 1
    const isFirstPage = index === 0
    const isLastPage = currentPage === totalPages
    const skip = index * postsPerPage
    const paginatedBlogPostsList = await graphql(`
      query paginatedBlogPostsList {
        allContentfulBlogPost(
          sort: { order: DESC, fields: publishDate }
          limit: 3
          skip: ${skip}
        ) {
          edges {
            node {
              postTitle
              author
              slug
              id
              publishDate(formatString: "MMMM Do, YYYY")
              content {
                id
                childMarkdownRemark {
                  excerpt
                  html
                  timeToRead
                }
              }
              tags {
                content
              }
              featuredImage {
                fixed {
                    base64
                    width
                    height
                    src
                    srcSet
                  }
              }
              contentImages {
                fixed {
                    base64
                    width
                    height
                    src
                    srcSet                                  }
              }
            }
          }
        }
      }
    `)
    createPage({
      path: isFirstPage ? "/blog" : `/blog/${currentPage}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        isFirstPage,
        isLastPage,
        currentPage,
        totalPages,
        contentfulData: paginatedBlogPostsList.data,
      },
    })
    index++
  }
}

const buildIndividualBlogPostPage = async ({
  graphql,
  allBlogPostList,
  blogPostTemplate,
  createPage,
}) => {
  for (let edge of allBlogPostList.data.allContentfulBlogPost.edges) {
    const blogPost = await graphql(`
      query {
        contentfulBlogPost(slug: { eq: "${edge.node.slug}" }) {
          id
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          postTitle
          content {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
          author
          categories {
            content
            id
          }
          contentImages {
            fixed {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
            }
            title
          }
        }
      }
    `)
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        contentfulData: blogPost,
      },
    })
  }
}

module.exports = {
  buildAllEvents,
  buildAllBlogPostList,
  buildPaginatedPages,
  buildIndividualBlogPostPage,
}
