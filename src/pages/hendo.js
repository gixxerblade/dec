import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/layout"
import Maps from "../components/Maps"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Hendo = () => {
  const data = useStaticQuery(graphql`
    {
      hendo: contentfulAsset(file: { fileName: { eq: "hendoTitle.png" } }) {
        id
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      mapLegend: contentfulAsset(
        file: { fileName: { eq: "image.jpeg" } }
        title: { eq: "trail legend" }
      ) {
        id
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  `)
  const location = {
    address: "Henderson Pond, Trail, Midway Park, NC 28544",
    lat: 34.703995,
    lng: -77.328844,
  }

  return (
    <Layout>
      <PageHeader title="Henderson Pond" />
      <div className="section">
        <div className="container">
          <figure className="image title-image">
            <Img fluid={data.hendo.fluid} />
          </figure>
          <br />
          <div className="has-text-centered	">
{/*             <div className="column has-text-centered p-1">
              <iframe
                className="has-text-centered"
                title="trail conditions"
                style={{
                  height: "17.5rem",
                  width: "19.75rem",
                  border: "none",
                  overflow: "hidden",
                }}
                src="https://www.singletracks.com/ajax/trail_conditions_widget.php?hash=i:1:7826&amp;width=350&amp;height=250"
                scrolling="no"
              ></iframe>
            </div>
 */}            <p className="p-3 has-text-justified is-three-fifths is-size-5">
              Henderson Pond Trail is on board Camp LeJeune and was born with a
              MOA (Memorandum of Agreement) between Down East Cyclists and Camp
              LeJeune. The agreement authorized the club to build biking/hiking
              trails in the Henderson Pond Recreational area. The trail has been
              built and maintained over the years and we finally have close to 8
              miles of solid trail built for anyone with access to the base and
              their guests to ride and hike. The trail has been home to one of
              the races in the Coastal Carolina Off-Road Series (CCORS) MTB
              Races, Time Trial events, and more!
            </p>
          </div>
          <hr />
          <p className="heading has-text-centered is-size-4 p-3">
            Current Henderson Pond Route
          </p>
          <Maps location={location} />
        </div>
        <br />
        <div className="columns">
          <div className="column has-text-centered">
            <a
              href="https://downeastcyclists.s3.amazonaws.com/henderson-hendo-pond-trail.gpx"
              download
            >
              Download Hendo GPX File
            </a>
          </div>
        </div>
        <div className="container">
          <div className="heading p-3 is-size-4 has-text-centered is-uppercase">
            directions:
          </div>
          <div className="heading p-3 is-size-5 is-uppercase">
            From Main Gate:
          </div>
          <p className="has-text-justified p-3">
            As you enter Camp LeJeune, pass through the first traffic light and
            make a left turn at the second light on to Old Saw Mill Road. Within
            1/2 mile you will see a fence line on your right with a dirt road
            cutting through it. As you reach the end of the fence line on this
            dirt road you will see the trail cutting across, you can park at any
            of the parking areas or head down to the pond (take all rights on
            the dirt road) and park there [see trail access point #2 or 3].
          </p>
          <div className="heading p-3 is-size-5 is-uppercase">
            PMU/Race Day Parking:
          </div>
          <p className="has-text-justified p-3">
            From Holcomb Blvd main gate, follow through two traffic lights and
            make a left turn at the big MCCS sign in the median. [see trail
            access point #4]
          </p>
          <div className="heading p-3 is-size-5 is-uppercase">
            From Piney Green Gate:
          </div>
          <p className="has-text-justified p-3">
            On the Piney Green side of the trail, there is an access road to the
            ponds across from the “G” Range. You can park in any one of the
            parking areas as the trail passes each of them. [see map for trail
            access point #5/6]
          </p>
          <div className="heading is-size-6 has-text-centered mb-3">
            **Do not park at the paved Game Warden parking lot [trail access
            point # 7]. They will issue citations to any cyclist who parks
            there.**
          </div>
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <figure className="image">
                <Img fluid={data.mapLegend.fluid} />
              </figure>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="heading p-3 m-2 is-size-4 has-text-centered is-uppercase">
            RACES AND SPECIAL EVENTS
          </div>
          <p className="has-text-justified p-3">
            For Mountain Bike Races (like CCORS) and Special Events (like
            TAKMD), we utilize the “2nd Med PMU” parking area off of Holcomb
            Blvd. Pass through both traffic lights when you enter through the
            main gate and look for a bright neon sign on your left. There is a
            left turn just past this neon sign leading to the 2nd Med PMU area.
          </p>
          <p className="has-text-justified p-3">
            There is a way to get your Base Visitors pass in advance of CCORS
            races at Henderson Pond. For advanced visitors passes, you must get
            this information in no later than two weeks prior to race day so it
            can be processed. Without an advanced pass, you can still gain
            access to the base on race day but must present the required
            information below to the visitors center at the Main Gate. In order
            to participate and gain access into Camp Lejeune, every person 18
            years and older, racing or not, must have their valid driver’s
            license or state issued ID with them. The driver of each vehicle
            must present a valid drivers license, vehicle registration and proof
            of current insurance. In an efforts to make this a bit more
            efficient, you may email this information to Jeff LeBlanc at
            ncleblancs@ec.rr.com No Later Than two weeks prior to race day for
            an advanced screening visitors pass. You will need to email him the
            following information:
          </p>
          <p className="heading is-size-5 p-3">Drivers:</p>
          <p className="has-text-justified p-3">
            Name, Date of Birth, Drivers License # + State, Vehicle Info (Year,
            Make, Model, Color, Plate # + State), Vehicle Insurance Info
            (Company, Policy # and Expiration Date), Home Address.
          </p>
          <p className="heading is-size-5 p-3">Passengers 18+ Years Old:</p>
        </div>
        <p className="has-text-justified p-3">
          Name, Date of Birth, Drivers License # or State ID # + State issued,
          Home Address.
        </p>
        <p className="has-text-justified p-3">
          Check our <Link to="/events">EVENTS</Link> page for upcoming rides and
          races at this location.
        </p>
      </div>
    </Layout>
  )
}
export default Hendo
