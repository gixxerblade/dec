import React, { useState, useEffect } from "react"
import GoogleMap from "./GoogleMap"
import useWindowDimensions from "../../hooks/useWindowDimension"
import commons from "../../objects/commons.json"

const isClient = typeof window !== "undefined"

const CommonMap = ({ location }) => {
  const [zoomLevel, setZoomLevel] = useState(17.2)
  const [dimensions, setDimensions] = useState(useWindowDimensions())
  const changeZoomLevel = width => {
    if (width < 415) setZoomLevel(14.6)
    if (width < 1025 && width > 414) setZoomLevel(15.5)
  }

  useEffect(() => {
    changeZoomLevel(dimensions.width)

    return () => changeZoomLevel(dimensions)
  }, [zoomLevel, dimensions])

  // ? set map as HYBRID
  const getOptions = maps => {
    return {
      mapTypeId: maps.MapTypeId.HYBRID,
    }
  }
  // ? Helper function to convert coordinates for api use
  const convertCoords = coords => {
    let coordArr = []
    coords.map(coordinate =>
      coordArr.push({ lat: coordinate[1], lng: coordinate[0] })
    )
    return coordArr
  }

  const handleApiLoaded = (map, maps) => {
    // ? Helper function to show info window
    const showInfoWindow = (marker, info) => {
      marker.addListener("mouseover", () => {
        info.open(map, marker)
      })
      marker.addListener("mouseout", () => {
        info.close(map, marker)
      })
    }

    const parking = new maps.Marker({
      position: { lat: 34.795418, lng: -77.400873 },
      label: "P",
      map,
    })
    const parkingInfo = new maps.InfoWindow({
      content: `<div>Parking</div>`,
    })
    showInfoWindow(parking, parkingInfo)


    commons.features.map(feature => {
      const { coordinates } = feature.geometry
      const { name } = feature.properties
      const { type } = feature.geometry
      if (name === "Blue Trail" && type === "LineString") {
        const trail = new maps.Polyline({
          path: convertCoords(coordinates),
          strokeColor: "#000fff",
          strokeWeight: 5,
          strokeOpacity: 0.7,
        })
        trail.setMap(map)
      }
      if (name === "Green Trail" && type === "LineString") {
        const greenTrail = new maps.Polyline({
          path: convertCoords(coordinates),
          strokeColor: "#7CFC00",
          strokeWeight: 5,
          zIndex: 1,
          strokeOpacity: 0.7,
        })
        greenTrail.setMap(map)
      }
      return null
    })
  }

  return (
    <div className="google-map-commons container has-text-centered">
      {isClient && (
        <GoogleMap
          language="en"
          libraries={["visualization", "drawing", "geometry"]}
          fullscreenControl="true"
          streetViewControl="false"
          center={location}
          zoom={zoomLevel}
          options={getOptions}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        ></GoogleMap>
      )}
    </div>
  )
}
export default CommonMap
