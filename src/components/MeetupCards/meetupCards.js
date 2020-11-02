import React from "react"

export const MeetUpCards = ({ events }) => {
  return (
    <>
      {events.map(event => {
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
                    <div className="column has-text-dark">
                      <strong>{event.node.name}</strong>
                    </div>
                    <div className="column has-text-right">
                      <strong>
                        {dayOfWeek}&nbsp;{month},{day}, {year} at&nbsp;
                        {time}
                      </strong>
                    </div>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event.node.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
