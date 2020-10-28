import React from "react"
import Layout from "../components/layout"
import Accordion, { Panel } from "../components/Accordion"
import { bylaws } from "../objects/bylaws"
const ByLaws = () => {
  return (
    <Layout>
      <div className="section">
        <div className="title is-uppercase has-text-dark has-text-centered">
          Club Bylaws
        </div>
        <div className="container">
          <Accordion accordionId={bylaws}>
            <div className="box">
              {bylaws.map((bylaw, index) => (
                <Panel
                  key={bylaw.id}
                  id={index}
                  title={bylaw.title}
                  body={bylaw.body}
                />
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </Layout>
  )
}
export default ByLaws
