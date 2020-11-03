import React from "react"

export const MeetUpCards = ({ events }) => {
  const GOOGLE_DIRECTIONS = "https://www.google.com/maps/search/?api=1&query="
  return (
    <>
      {events.map(event => {
        const address1 = `${event.node.venue.address_1.split(" ").join("+")}`
        const city = `${event.node.venue.city}`
        const state = `${event.node.venue.state}`
        const zip = `${event.node.venue.zip}`
        const directions = `${GOOGLE_DIRECTIONS}${address1}%7c${city}%7c${state}%7c${zip}`
        console.log(directions)
        const dateObject = new Date(event.node.time)
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
          <div key={event.node.id} className="section">
            <div className="box radius-large">
              <div className="media-content">
                <div className="content">
                  <div className="columns">
                    <div className="column title is-4 has-text-dark">
                      <strong>{event.node.name}</strong>
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
                          __html: event.node.description,
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
                              {event.node.venue.name}
                            </li>
                            <li className="list-item">
                              {event.node.venue.address_1}
                            </li>
                            <li className="list-item">
                              {event.node.venue.city},&nbsp;
                              {event.node.venue.state}&nbsp;
                              {event.node.venue.zip}
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
    </>
  )
}
