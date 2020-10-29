import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const MeetUpCards = () => {
  const data = useStaticQuery(graphql`
    {
      allMeetupEvent(limit: 5) {
        edges {
          node {
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
  const events = data?.allMeetupEvent?.edges

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
          <div className="section">
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
                    dangerouslySetInnerHTML={{ __html: event.node.description }}
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
