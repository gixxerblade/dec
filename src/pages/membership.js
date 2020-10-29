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
              <li>18km Road Time Trial</li>
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
            </ul>
          </div>
        </div>
        <div className="container mt-3">
          <h3 className="title has-text-dark is-size-3">
            Initial Dues / Membership Renewal
          </h3>
          <p>
            Dues can be renewed online&nbsp;
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.bikereg.com/down-east-cyclists-membership0"
            >
              HERE
            </a>
            &nbsp;at at only $20 dollars per individual or $30 a year per
            family! Don’t forget to provide your information and sign your
            release. Forms available at The Bicycle Shop or the Bicycle Gallery,
            club meetings.
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default Membership
/* 
18km Road Time Trial,
Coastal Carolina Off-Road Series,
Centuries,
Group rides,
Mountain Bike Camping Trips,
Social Gatherings,
Community Involvement,
Wounded Warrior Battalion weekly rides
Various charity events.
Croatan Buck Fifty aid station
Hope for the Warriors Cyclist Support

*/
