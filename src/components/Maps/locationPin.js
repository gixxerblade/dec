import React from "react"
import { Map } from "@styled-icons/boxicons-regular/Map"

const LocationPin = ({ text }) => {
  return (
    <>
      <div className="pin">
        <Map color="#fff" size={30} className="pin-icon" />
        <p className="pin-text">{text}</p>  
      </div>
    </>
  )
}
export default LocationPin
