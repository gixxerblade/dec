import React, { createRef, useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"
import LocationPin from "./locationPin"
import tracks from "../../objects/tracks.json"
import hendoInfo from "../../objects/hendo-info.json"
import useWindowDimensions from "../../hooks/useWindowDimension"
const isClient = typeof window !== "undefined"
//src/hooks/useFetch.js
const Maps = ({ location }) => {
  const mapRef = createRef()
  const getOptions = maps => {
    // set map as HYBRID
    return {
      mapTypeId: maps.MapTypeId.HYBRID,
    }
  }
  // destructure coordinates
  let {
    features: [
      {
        geometry: { coordinates },
      },
    ],
  } = tracks
  const kidsTrack = hendoInfo.features[4].geometry.coordinates
  const kidsTrackArr = []

  kidsTrack.map(coordinate =>
    kidsTrackArr.push({ lat: coordinate[1], lng: coordinate[0] })
  )
  //console.log(kidsTrackArr)
  // reorder coordinates to {lat: lat, lng: lng}
  coordinates = coordinates[0]
  let coordArr = []
  coordinates.map(coordinate =>
    coordArr.push({ lat: coordinate[1], lng: coordinate[0] })
  )
  const handleApiLoaded = (map, maps) => {
    const mapDisplay = new maps.Polygon({
      paths: coordArr,
      strokeColor: "#ef1a25",
      strokeWeight: 3,
    })
    const kids = new maps.Polygon({
      paths: kidsTrackArr,
      strokeColor: "#ffff00",
      strokeWeight: 3,
    })

    kids.setMap(map)
    mapDisplay.setMap(map)
  }
  // useWindowDimensions custom hook to change zoom level
  const { width } = useWindowDimensions()
  const [zoomLevel, setZoomLevel] = useState(16)

  const changeZoomLevel = width => {
    if (width < 415) setZoomLevel(14.6)
    if (width < 1025 && width > 414) setZoomLevel(15.5)
  }
  /* Marine Corps Base Camp Lejeune
North Carolina
34.703396, -77.331199
 */
  useEffect(() => {
    changeZoomLevel(width)
  }, [width, zoomLevel])
  return (
    <>
      <div className="google-map container has-text-centered">
        {isClient && (
          <GoogleMapReact
            ref={mapRef}
            bootstrapURLKeys={{
              key: process.env.GATSBY_GOOGLE_MAPS,
              language: "en",
              libraries: ["visualization"],
              fullscreenControl: true,
              streetViewControl: false,
            }}
            center={location}
            zoom={zoomLevel}
            options={getOptions}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            {hendoInfo.features.map((feature, idx) => {
              if (feature.geometry.type === "Point") {
                const coords = feature.geometry.coordinates
                return (
                  <LocationPin
                    key={idx}
                    lat={coords[1]}
                    lng={coords[0]}
                    text={`${feature.properties.name}`}
                  />
                )
              }
            })}
            <LocationPin lat={34.703386} lng={-77.33175} text="Kids Track" />
            <LocationPin lat={location.lat} lng={location.lng} text="Hendo" />
          </GoogleMapReact>
        )}
      </div>
    </>
  )
}
export default Maps
