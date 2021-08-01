import React, { useState, useEffect } from "react"
import GoogleMap from "./GoogleMap"
import useWindowDimensions from "../../hooks/useWindowDimension"
import hendo from "../../objects/hendo.json"

const isClient = typeof window !== "undefined"

//src/hooks/useFetch.js
const Maps = ({ location }) => {
  // useWindowDimensions custom hook to change zoom level
  const dimensions = useWindowDimensions()

  // ? set map as HYBRID
  const getOptions = maps => {
    return {
      mapTypeId: maps.MapTypeId.HYBRID,
    }
  }
  const handleApiLoaded = (map, maps) => {
    // ? Helper function to convert coordinates for api use
    const convertCoords = coords => {
      let coordArr = []
      coords.map(coordinate =>
        coordArr.push({ lat: coordinate[1], lng: coordinate[0] })
      )
      return coordArr
    }
    // ? Helper function to show info window
    const showInfoWindow = (marker, info) => {
      marker.addListener("mouseover", () => {
        info.open(map, marker)
      })
      marker.addListener("mouseout", () => {
        info.close(map, marker)
      })
    }
    const gameWardenInfo = new maps.InfoWindow({
      content: `<div>Game Warden's Office</div>`,
    })
    const gameWarden = new maps.Marker({
      position: { lat: 34.70779, lng: -77.326537 },
      title: "Game Wardens",
      map,
      icon:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png",
    })
    showInfoWindow(gameWarden, gameWardenInfo)

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

    // ? Map through hendo.json and extract all coordinates for map display
    hendo.features.map((feature, index) => {
      const { coordinates } = feature.geometry
      const { name } = feature.properties
      const { type } = feature.geometry
      if (name === "Creek" && type === "LineString") {
        const creek = new maps.Polyline({
          path: convertCoords(coordinates),
          strokeColor: "#00ffff",
          strokeWeight: 3,
          strokeOpacity: 1,
        })
        creek.setMap(map)
      }
      if (name === "Hazmat Area" && type === "LineString") {
        const hazmatArea = new maps.Polyline({
          path: convertCoords(coordinates),
          strokeColor: "#ffffff",
          strokeWeight: 3,
          strokeOpacity: 1,
        })
        hazmatArea.setMap(map)
      }
      if (name === "Road" && type === "LineString") {
        const road = new maps.Polyline({
          path: convertCoords(coordinates),
          strokeColor: "#000000",
          strokeWeight: 4,
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

      const accessPointLabels = "12345678"
      if (name === "Access Point" && type === "Point") {
        const accessInfo = new maps.InfoWindow({
          content: `<div>Trail Access Point</div>`,
        })
        const access = new maps.Marker({
          position: { lat: coordinates[1], lng: coordinates[0] },
          map,
          title: "Access Point",
          label: accessPointLabels[index % accessPointLabels.length],
        })
        access.setMap(map)
        showInfoWindow(access, accessInfo)
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
      }
      return null
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
          <GoogleMap
            //ref={mapRef}
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
    </>
  )
}
export default Maps
