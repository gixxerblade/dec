import React from "react"
import Layout from "../components/layout"
import Accordion, { Panel } from "../components/Accordion"
import { bylaws } from "../objects/bylaws"
import PageHeader from '../components/PageHeader/PageHeader';
const ByLaws = () => {
  return (
    <Layout>
    <PageHeader title="club bylaws"/>
      <div className="section">
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
