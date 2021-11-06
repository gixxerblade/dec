import React, { FC, useEffect, useState } from "react"
import { Link } from 'gatsby'
import { ThumbsUp, ThumbsDown } from "@styled-icons/entypo"
import Dec from '../../icons'
import useFetch from "../../hooks/useFetch"

interface TrailData {
  trail: string
  open: boolean
  message?: string
  loading?: boolean
}

const linkMap = {
  "Big Branch Bike Park": '/bigbranch',
  "Commons": '/commons',
  "Henderson Pond": '/hendo'
}

const sortedTrailNames = (a, b): TrailData[] => {
  return a.trail.localeCompare(b.trail)
}

const Signal = (props: Partial<TrailData>) => (
  props.open ? (
    <ThumbsUp size="20" color="#66ff00" />
  ) : (
    <ThumbsDown size="20" color="#B81D13" />
  )
)

const Modal: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true)
  const { response, loading, error } = useFetch("/.netlify/functions/getTrails")
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setShowModal(!showModal)
  }
  // Close modal after 10 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowModal(false)
    }, 10000)
  }, [])

  return (
    <div className={`modal is-clipped modal-fade ${showModal ? "is-active" : ""}`}>
      <div
        onClick={handleClick}
        onKeyDown={handleClick}
        className="modal-background"
      ></div>
      <div className="modal-content">
        <section className="box">
          <div className="tile is-vertical">
            <Dec cyclists="black" details="black" shadow="black" height="115" />
            <div className="has-text-centered">
              <span className="mr-1 is-size-4">Onslow County Trail Status&nbsp; </span>
              <span className="has-text-centered">
              </span>
            </div>
          </div>
          <div className="content">
            <ul className="ml-0" style={{ listStyleType: "none" }}>
              {response?.length &&
                response.sort(sortedTrailNames).map((data: TrailData) => (
                  <li className="has-text-centered mb-5" key={data.trail}>
                    <span className="is-size-5">{data.trail}{" "}</span>
                    <span>
                      <Link to={linkMap[data.trail]}>
                        <button
                          className="button is-black is-small is-rounded"
                          style={{ pointerEvents: "none" }}
                        >
                          <Signal open={data.open} />
                        </button>
                      </Link>
                    </span>
                    <div className="is-size-6">
                      {data.message}
                    </div>
                  </li>
                ))}
            </ul>
            {loading && (
              <div className="section has-text-centered">
                <button className="button is-large is-loading is-ghost"></button>
              </div>
            )}
            {error && (
              <div className="content">
                <p className="subtitle">Error loading results</p>
                <p>Please refresh page</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <button
        onClick={handleClick}
        onKeyDown={handleClick}
        className="modal-close is-large"
        aria-label="close"
      />
    </div>
  )
}

export default Modal
