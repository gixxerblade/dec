import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader/PageHeader"
const Membership = () => {
  return (
    <Layout>
      <PageHeader title="membership" />
      <div className="section is-fullheight is-center">
        <div className="container"></div>
        <div className="container">
          <h3 className="title has-text-dark is-size-3">Discounts</h3>
          <p className="has-text-left">
            10 percent discount at&nbsp;
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.thebicycle.com/"
            >
              The Bicycle Shop
            </a>
            &nbsp;and&nbsp;
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.bicycle-gallery.com/"
            >
              The Bicycle Gallery
            </a>
            &nbsp;after 30 days of paid membership begins and only available to
            active club members. Free supported Centuries, insured events,
            social gatherings, and Ad Hoc Holiday parties.
          </p>
        </div>
        <div className="container mt-3">
          <h3 className="title has-text-dark is-size-3">Club Events</h3>
          <div className="content">
            <h4>
              Down East Cyclists has sponsored a number of events throughout the
              years:
            </h4>
            <ul>
              <li>Coastal Carolina Off-Road Series</li>
              <li>Centuries</li>
              <li>Group rides</li>
              <li>Mountain Bike Camping Trips</li>
              <li>Social Gatherings</li>
              <li>Community Involvement</li>
              <li>Wounded Warrior Battalion weekly rides</li>
              <li>Various charity events</li>
              <li>Croatan Buck Fifty aid station</li>
              <li>Hope for the Warriors Cyclist Support</li>
              <li>Trail cleanup days at Big Branch</li>
            </ul>
              <span>...and more</span>
          </div>
        </div>
        <div className="content mt-3">
          <h3 className="title has-text-dark is-size-3">
            Initial Dues / Membership Renewal
          </h3>
          <p>
            <span>👉👉👉&nbsp;</span>
            <a
              className="has-text-weight-bold	is-underlined"
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.bikereg.com/down-east-cyclists-membership0"
            >
              Dues can be renewed online here
            </a>
            <span>&nbsp;👈👈👈</span>
          </p>
          <p>
            Cost is $30 dollars per individual or $50 a year per
            family!
          </p>
          <p>
            Don’t forget to provide your information and sign your online
            release. Additionally, forms are available at The Bicycle Shop, Bicycle Gallery, or
            club meetings.
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default Membership
