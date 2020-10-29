import React from "react"
import Layout from "../components/layout"
import { MeetUpCards } from "../components/MeetupCards/meetupCards"
import PageHeader from "../components/PageHeader/PageHeader"

const Events = () => {
  return (
    <Layout>
      <PageHeader title="upcoming events" className="has-text-white" />
      <MeetUpCards />
    </Layout>
  )
}
export default Events
