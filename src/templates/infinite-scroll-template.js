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
        document.documentElement.offsetHeight - 100
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
        <div className="container">
          <h1 className="title is-2 has-text-centered has-text-dark">Events</h1>
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
                  <div key={node.id} className="section is-center">
                    <div className="container tile is-justify-content-center is-ancestor">
                      <div className="box tile is-9 radius-large">
                        <div className="tile is-parent is-vertical is-8">
                          <div className="tile is-child is-8">
                            <div className="title is-size-4 has-text-dark">
                              <a
                                href={node.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <strong>{node.name}</strong>
                              </a>
                            </div>
                            <div className="subtitle">
                              <strong>
                                {dayOfWeek}&nbsp;{month},{day}, {year} at&nbsp;
                                {time}
                              </strong>
                            </div>
                          </div>
                          <div className="tile is-child is-vertical is-12">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: node.description,
                              }}
                            />
                          </div>
                        </div>
                        <div className="tile">
                          <div className="tile is-child is-8">
                            <div className="title is-size-5 has-text-dark has-text-centered">
                              Location
                            </div>
                            <a
                              title="Click For Directions"
                              aria-label="Directions"
                              target="_blank"
                              rel="noreferrer"
                              href={`${directions}`}
                            >
                              <ul className="has-text-centered event-address">
                                <li className="list-item">{node.venue.name}</li>
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
