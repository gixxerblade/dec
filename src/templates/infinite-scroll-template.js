import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

const InfiniteScroll = ({ pageContext: { events } }) => {
  const [hasMore, setMore] = useState(events.length > 10)
  const [currentList, addToList] = useState([...events.slice(0, 10)])
  const loadEdges = () => {
    const currentLength = currentList.length
    const more = currentLength < events.length
    const nextEdges = more
      ? events.slice(currentLength, currentLength + 10)
      : []
    setMore(more)
    addToList([...currentList, ...nextEdges])
  }
  const handleScroll = () => {
    if (!hasMore) return
    else if (
      window &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight-100
    ) {
      loadEdges()
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    //eslint-disable-next-line
  }, [hasMore, currentList])

  const GOOGLE_DIRECTIONS = "https://www.google.com/maps/search/?api=1&query="

  return (
    <>
      <div className="section">
        <h1 className="title is-2 has-text-centered has-text-dark">Events</h1>
        <div className="container">
          <div className="content">
            <ul>
              {currentList.map(({ node }) => {
                const address1 = `${node.venue.address_1.split(" ").join("+")}`
                const city = `${node.venue.city}`
                const state = `${node.venue.state}`
                const zip = `${node.venue.zip}`
                const directions = `${GOOGLE_DIRECTIONS}${address1}%7c${city}%7c${state}%7c${zip}`
                const dateObject = new Date(node.time)
                const dayOfWeek = dateObject.toLocaleString("en-US", {
                  weekday: "long",
                })
                const month = dateObject.toLocaleString("en-US", {
                  month: "long",
                })
                const day = dateObject.toLocaleString("en-US", {
                  day: "numeric",
                })
                const year = dateObject.toLocaleString("en-US", {
                  year: "numeric",
                })
                const time = dateObject.toLocaleTimeString("en-US", {
                  timeStyle: "short",
                })
                return (
                  <div key={node.id} className="section">
                    <div className="box radius-large">
                      <div className="media-content">
                        <div className="content">
                          <div className="columns">
                            <div className="column title is-4 has-text-dark">
                              <strong>{node.name}</strong>
                            </div>
                            <div className="column has-text-right">
                              <strong>
                                {dayOfWeek}&nbsp;{month},{day}, {year} at&nbsp;
                                {time}
                              </strong>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: node.description,
                                }}
                              />
                            </div>
                            <div className="column">
                              <div className="content">
                                <div className="title is-5 has-text-dark has-text-right">
                                  Location
                                </div>
                                <a
                                  title="Click For Directions"
                                  aria-label="Directions"
                                  target="_blank"
                                  rel="noreferrer"
                                  href={`${directions}`}
                                >
                                  <ul className="has-text-right event-address">
                                    <li className="list-item">
                                      {node.venue.name}
                                    </li>
                                    <li className="list-item">
                                      {node.venue.address_1}
                                    </li>
                                    <li className="list-item">
                                      {node.venue.city},&nbsp;
                                      {node.venue.state}&nbsp;
                                      {node.venue.zip}
                                    </li>
                                  </ul>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

const InfiniteScrollTemplate = props => {
  return (
    <Layout>
      <InfiniteScroll {...props} />
    </Layout>
  )
}
export default InfiniteScrollTemplate
