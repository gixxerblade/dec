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
    {
      allContentfulBlogPost(sort: { order: DESC, fields: publishDate }) {
        totalCount
        edges {
          node {
            id
            postTitle
            slug
            publishDate(formatString: "MMMMM Do, YYYY")
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
    const skip = index + postsPerPage
    const paginatedBlogPostsList = await graphql(`
      query paginatedBlogPostsLists {
        allContentfulBlogPost(
          sort: { order: DESC, fields: publishDate }
          limit: 3
          skip: ${skip}
        ) {
          edges {
            node {
              postTitle
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
                fluid(maxWidth: 450) {
                    ...GatsbyContentfulFluid

                }
              }
              contentImages {
                fluid(maxWidth: 300) {
                    ...GatsbyContentfulFluid
                }
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
        contentfulData: paginatedBlogPostsList.data.allContentfulBlogPost,
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
        query paginatedBlogPostsLists {
          allContentfulBlogPost(
            sort: { order: DESC, fields: publishDate }
            limit: 3
            skip: ${skip}
          ) {
            edges {
              node {
                postTitle
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
                  fluid(maxWidth: 450) {
                      ...GatsbyContentfulFluid
  
                  }
                }
                contentImages {
                  fluid(maxWidth: 300) {
                      ...GatsbyContentfulFluid
                  }
                }
              }
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
