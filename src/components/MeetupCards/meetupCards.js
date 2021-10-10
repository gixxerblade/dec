import React, { useState, useEffect, useCallback } from "react"

export const MeetUpCards = ({ events }) => {
  const [hasMore, setMore] = useState(events.length > 10)
  const [currentList, addToList] = useState([...events.slice(0, 10)])

  const loadEdges = useCallback(() => {
    const currentLength = currentList.length
    const more = currentLength < events.length
    const nextEdges = more
      ? events.slice(currentLength, currentLength + 10)
      : []
    setMore(more)
    addToList([...currentList, ...nextEdges])
  }, [currentList, events])

  const handleScroll = useCallback(() => {
    if (!hasMore) return
    else if (
      window &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
    ) {
      loadEdges()
    }
  }, [hasMore, loadEdges])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasMore, currentList, handleScroll])

  return (
    <>
      {currentList.map((event, idx) => {
        const dateObject = new Date(event.startTime)
        const dayOfWeek = dateObject.toLocaleString("en-US", {
          weekday: "long",
        })
        const month = dateObject.toLocaleString("en-US", { month: "long" })
        const day = dateObject.toLocaleString("en-US", { day: "numeric" })
        const year = dateObject.toLocaleString("en-US", { year: "numeric" })
        const time = dateObject.toLocaleTimeString("en-US", {
          timeStyle: "short",
        })
        return (
          <div key={`${event.id}${idx}`} className="section">
            <div className="box radius-large">
              <div className="media-content">
                <div className="content">
                  <div className="columns is-centered">
                    <a
                      href={event.url}
                      className="column is-half title is-4 has-text-link m-2"
                      title="Link to Meetup"
                      aria-label="Link to Meetup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>{event.title}</strong>
                    </a>
                    <div className="column has-text-right m-2">
                      <strong>
                        {dayOfWeek}&nbsp;{month},{day}, {year} at&nbsp;
                        {time}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
