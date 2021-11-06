import React, { MouseEventHandler, useCallback, useEffect, useState } from "react"
import qs from 'qs'
import { useIdentityContext } from "react-netlify-identity"
import { generateHeaders } from "../../hooks/generateHeaders"
import { TrailData } from "../../interfaces/Trail"

const TrailStatus = () => {
  const [data, setData] = useState<TrailData[]>(null)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)
  const [selectedTrail, setSelectedTrail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(true)
  const [id, setId] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [disabled, setDisabled] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false)
  const [success, setSuccess] = useState<Partial<Response>>(null)
  const identity = useIdentityContext()
  const [trailData, setTrailData] = useState<TrailData>({ trail: '', open: true, message: '' })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set the headers for authorization
        const authHeaders = await generateHeaders(identity)
        // Fetch data
        const trails = await fetch("/.netlify/functions/getTrails", {
          method: "GET",
          headers: authHeaders,
        })
        const info = await trails.json()
        setData(info)
        setLoading(false)
      } catch (err) {
        setErrors(err)
      }
    }
    fetchData()
  }, [location.pathname])

  useEffect(() => {
    if (selectedTrail?.length) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    const filteredRes = data?.find((item: TrailData) => item.trail === selectedTrail)
    setId(filteredRes?.id)
  }, [selectedTrail])

  const onSelectTrailHandler = (e) => {
    e.preventDefault()
    setSelectedTrail(e.target.value)
    setIsActive(false)
  }

  const handleStatusClicked = (e) => {
    e.preventDefault()
    setButtonClicked(!buttonClicked)
    setOpen(!open)
  }

  const resetForm = () => {
    setSelectedTrail('')
    setOpen(true)
    setMessage('')
    setId('')
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setSuccess(null)
    const trailObj = { trail: selectedTrail, open, message }
    setTrailData(trailObj)
    const serializedTrailData = qs.stringify(trailObj)
    try {
      const authHeader = await generateHeaders(identity)
      const response = await fetch(`/.netlify/functions/setTrailStatus/?id=${id}&${serializedTrailData}`, {
        headers: authHeader,
      })
      setSuccess(response)
    } catch (error) {
      new Error('Error sending info')
    } finally {
      resetForm()
    }
  }
  return (
    <div className="section pt-0 mt-1">
      {selectedTrail && <div>
        <pre className="content has-background-dark has-text-white">
          <code>
            {JSON.stringify(trailData)}
          </code>
        </pre>
      </div>}
      {/* <div className="mb-1">Select Trail:</div> */}
      <div className="select my-3">
        <select onChange={onSelectTrailHandler} value={selectedTrail || "Select a trail..."}>
          <option className="dropdown-item" disabled>Select a trail...</option>
          {data?.map((item: Partial<TrailData>) => (
            <option
              key={item.id}
              className="dropdown-item"
              value={item.trail}
            >
              {item.trail}
            </option>
          ))}
          {loading && <button className="is-large is-ghost is-loading" />}
        </select>
      </div>
      <div className="mb-3">
        <p>Click to toggle status:</p>
        <button onClick={handleStatusClicked} className={`button mr-3 ${open ? 'is-success' : 'is-danger'}`}>
          {open ? "Open" : "Closed"}
        </button>
      </div>
      <div>
        <textarea onChange={(e) => setMessage(e.target.value)} className="textarea is-medium" value={message} rows={1} maxLength={75} placeholder="Optional...add a short message up to 75 characters"></textarea>
      </div>
      <button onClick={handleSubmit} disabled={disabled} className="button mt-3 is-light" type="submit">Submit</button>
      {errors && <div className="container has-text-danger subtitle">Error retrieving data!</div>}
      {success?.headers && success?.ok ? (
        <div className="section mt-4 has-text-success subtitle has-background-dark">
          <p>
            Successfully updated trail status
          </p>
        </div>
      ) : null}
      {!success?.ok && success?.headers ? (
        <div className="section mt-4 has-text-danger subtitle">
          <p>
            An error was encountered. Try again...
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default TrailStatus
