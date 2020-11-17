import React, { useState } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import Typed from "react-typed"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
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
                netlify-honeypot="bot-field"
                action="/thanks"
                onSubmit={handleSubmit}
              >
                <p style={{ display: "none" }}>
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input
                      type="hidden"
                      name="bot-field"
                      onChange={handleChange}
                    />
                  </label>
                </p>
                <input
                  type="hidden"
                  name="form-name"
                  value="contact"
                  onChange={handleChange}
                />
                <div className="field">
                  <label
                    aria-label="name"
                    className="label has-text-left"
                    htmlFor="name"
                  >
                    Name
                    <div className="control">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Peter Sagan"
                        className="input is-large"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label
                    aria-label="email"
                    className="label has-text-left"
                    htmlFor="email"
                  >
                    Email
                    <div className="control">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@someemail.com"
                        className="input is-large"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label
                    aria-label="message"
                    className="label has-text-left"
                    htmlFor="message"
                  >
                    Message
                    <div className="control">
                      <Typed
                        strings={[
                          "How can I join the club?",
                          "Where do you meet?",
                          "How can I join the club?",
                          "When is the next group event?",
                          "Do I have to be a member to join you on rides?",
                          "Do your members ride mountain bikes?",
                          "Can I join your rides on a mountain/cruiser/hybrid bike?",
                          "I have a question...",
                        ]}
                        typeSpeed={30}
                        attr="placeholder"
                        loop
                        cursorChar=""
                      >
                        <textarea
                          id="messsage"
                          placeholder="Enter your message here..."
                          className="textarea"
                          name="message"
                          onChange={handleChange}
                          required
                        ></textarea>
                      </Typed>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      id="singlebutton-0"
                      name="singlebutton-0"
                      className="button is-success"
                    >
                      Button
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
}
export default Contact
