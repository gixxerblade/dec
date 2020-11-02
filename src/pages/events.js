import React from "react"
import Layout from "../components/layout"
import { MeetUpCards } from "../components/MeetupCards/meetupCards"
import PageHeader from "../components/PageHeader/PageHeader"
import { Link, useStaticQuery, graphql } from "gatsby"
const Events = () => {
  const data = useStaticQuery(graphql`
    {
      allMeetupEvent(limit: 5, sort: { order: ASC, fields: time }) {
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

  const events = data?.allMeetupEvent?.edges

  return (
    <Layout>
      <PageHeader title="upcoming events" className="has-text-white" />
      <div className="section pb-0">
        <div className="columns">
          <div className="column title is-4 has-text-dark is-uppercase">
            <strong>Upcoming events ({events.length})</strong>
          </div>
          <div className="column has-text-right">
            <Link className="button is-medium" to="/allevents">
              See all
            </Link>
          </div>
        </div>
      </div>
      <MeetUpCards events={events} />
    </Layout>
  )
}
export default Events
