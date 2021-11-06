import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { MeetUpCards } from "../components/MeetupCards/meetupCards"
import PageHeader from "../components/PageHeader/PageHeader"

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      const res = await fetch("/.netlify/functions/meetup")
      const data = await res.json()
      setEvents(data)
    }
    fetchCalendarEvents()
  }, [])

  return (
    <Layout>
      <PageHeader title="upcoming events" className="has-text-white" />
      <div className="section pb-0">
        <div className="columns">
          <div className="column title is-4 has-text-dark is-uppercase">
            <strong>Upcoming events ({events.length})</strong>
          </div>
        </div>
      </div>
      <MeetUpCards events={events} />
    </Layout>
  )
}
export default Events
