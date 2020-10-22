import React from "react"
import YouTube from "react-youtube"
const Splash = () => {
  const playVideo = event => {
    event.target.playVideo()
  }
  const opts = {
    height: "100vh",
    width: "100vw",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  }
  return (
    <YouTube
      videoId="Yla8hqIeH0c"
      className="youtube"
      opts={opts}
      title="Down East Cyclists"
      onReady={playVideo}
    />
  )
}
export default Splash
