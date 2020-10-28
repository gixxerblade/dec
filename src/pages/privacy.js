import React from "react"
import Layout from "../components/layout"
import Accordion, { Panel } from "../components/Accordion"
import { privacy } from "../objects/privacy"
const Privacy = () => {
  return (
    <Layout>
      <div className="section is-center">
        <h1 className="title has-text-dark has-text-centered">
          Privacy Policy
        </h1>
        <div className="container">
          <p>
            Down East Cyclists (“us”, “we”, or “our”) operates the Down East
            Cyclists website (the “Service”).
          </p>
          <br />
          <p>
            This page informs you of our policies regarding the collection, use
            and disclosure of Personal Information when you use our Service.
          </p>
          <br />
          <p>
            We will not use or share your information with anyone except as
            described in this Privacy Policy.
          </p>
          <br />
          <p>
            We use your Personal Information for providing and improving the
            Service. By using the Service, you agree to the collection and use
            of information in accordance with this policy.
          </p>
        </div>
      </div>
      <div className="container has-text-dark">
        <Accordion accordionId={privacy}>
          {privacy.map((privacy, index) => (
            <Panel
              key={privacy.id}
              id={index}
              title={privacy.title}
              body={privacy.body}
            />
          ))}
        </Accordion>
      </div>
    </Layout>
  )
}
export default Privacy
