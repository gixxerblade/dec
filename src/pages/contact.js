import React from "react"
import Layout from "../components/layout"
const Contact = () => (
  <Layout>
    <div className="section">
      <div className="container has-text-centered">
        <h1 className="title has-text-dark has-text-centered">Contact Us</h1>
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-fifths">
            <form
              className="form-horizontal"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <legend className="is-sr-only title has-text-dark has-text-right">
                Contact Us
              </legend>
              <div className="field">
                <label className="label has-text-left" for="textinput-0">
                  Name
                </label>
                <div className="control">
                  <input
                    id="textinput-0"
                    name="textinput-0"
                    type="text"
                    placeholder="Name"
                    className="input is-large"
                    required="true"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-left" for="textinput-1">
                  Email
                </label>
                <div className="control">
                  <input
                    id="textinput-1"
                    name="textinput-1"
                    type="text"
                    placeholder="Emails"
                    className="input is-large"
                    required=""
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-left" for="textarea-0">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    id="textarea-0"
                    name="textarea-0"
                    placeholder="Enter your message here"
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    id="singlebutton-0"
                    name="singlebutton-0"
                    className="button is-success"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  </Layout>
)
export default Contact
