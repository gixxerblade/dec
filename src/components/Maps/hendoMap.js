import React, { createRef, useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"
import LocationPin from "./locationPin"
import hendoAll from "../../objects/hendo-all.json"
import useWindowDimensions from "../../hooks/useWindowDimension"

const isClient = typeof window !== "undefined"
//src/hooks/useFetch.js
const Maps = ({ location }) => {
  // useWindowDimensions custom hook to change zoom level
  const [dimensions, setDimensions] = useState(useWindowDimensions())

  const mapRef = createRef()

  const getOptions = maps => {
    // set map as HYBRID
    return {
      mapTypeId: maps.MapTypeId.HYBRID,
    }
  }
  const handleApiLoaded = (map, maps) => {
    // Helper function to convert coordinates for api use
    const convertCoords = coords => {
      let coordArr = []
      coords.map(coordinate =>
        coordArr.push({ lat: coordinate[1], lng: coordinate[0] })
      )
      return coordArr
    }
    // Helper to show info window
    const showInfoWindow = (marker, info) => {
      marker.addListener("mouseover", () => {
        info.open(map, marker)
      })
      marker.addListener("mouseout", () => {
        info.close(map, marker)
      })
    }

    const kidsInfo = new maps.InfoWindow({
      content: `<div>Kid's Track</div>`,
    })
    const kidsMarker = new maps.Marker({
      position: { lat: 34.702602, lng: -77.331527 },
      title: "Kid's Track",
      map: map,
      icon: "https://downeastcyclists.s3.amazonaws.com/cycling.png",
    })
    showInfoWindow(kidsMarker, kidsInfo)

    // Map through hendo-all.json and extract all coordinates for map display
    // This is getting complicated...
    hendoAll.features.map(feature => {
      const { coordinates } = feature.geometry
      const { name } = feature.properties
      const { type } = feature.geometry
      if (name === "Road" && type === "LineString") {
        const road = new maps.Polyline({
          path: convertCoords(coordinates),
          strokeColor: "#000000",
          strokeWeight: 3,
          strokeOpacity: 1,
        })
        road.setMap(map)
      }
      if (name === "Henderson Pond MTB Trail" && type === "LineString") {
        const track = new maps.Polygon({
          paths: convertCoords(coordinates),
          strokeColor: "#ef1a25",
          strokeWeight: 3,
          fillOpacity: 0,
          zIndex: 0,
        })
        track.setMap(map)
      }

      if (name === "Kids Course" && type === "LineString") {
        const kids = new maps.Polyline({
          path: convertCoords(coordinates),
          strokeColor: "#ffff00",
          strokeWeight: 3,
          fillOpacity: 0,
        })
        kids.setMap(map)
      }
      if (name === "Parking" && type === "Point") {
        const parkingInfo = new maps.InfoWindow({
          content: `<div>Parking</div>`,
        })
        const parkingSymbol = {
          url: "https://downeastcyclists.s3.amazonaws.com/parking.png",
          scaledSize: maps.Size(20, 32),
          origin: maps.Point(0, 0),
          anchor: maps.Point(0, 0),
        }
        const parking = new maps.Marker({
          position: { lat: coordinates[1], lng: coordinates[0] },
          map: map,
          icon: parkingSymbol,
        })
        parking.setMap(map)
        showInfoWindow(parking, parkingInfo)
      }
      if (name === "Picnic Area" && type === "Point") {
        const picnicInfo = new maps.InfoWindow({
          content: `<div>Picnic Area</div>`,
        })
        const picnicIcon = {
          url: `https://downeastcyclists.s3.amazonaws.com/picnic.png`,
        }
        const picnic = new maps.Marker({
          position: { lat: coordinates[1], lng: coordinates[0] },
          icon: picnicIcon,
        })
        picnic.setMap(map)
        showInfoWindow(picnic, picnicInfo)
      } else return null
    })
  }

  const [zoomLevel, setZoomLevel] = useState(16)

  const changeZoomLevel = width => {
    if (width < 415) setZoomLevel(14.6)
    if (width < 1025 && width > 414) setZoomLevel(15.5)
  }

  useEffect(() => {
    changeZoomLevel(dimensions.width)

    return () => changeZoomLevel(dimensions)
  }, [zoomLevel, dimensions])

  return (
    <>
      <div className="google-map container has-text-centered">
        {isClient && (
          <GoogleMapReact
            ref={mapRef}
            bootstrapURLKeys={{
              key: process.env.GATSBY_GOOGLE_MAPS,
              language: "en",
              libraries: ["visualization", "drawing", "geometry"],
              fullscreenControl: true,
              streetViewControl: false,
            }}
            center={location}
            zoom={zoomLevel}
            options={getOptions}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          ></GoogleMapReact>
        )}
      </div>
    </>
  )
}
export default Maps
