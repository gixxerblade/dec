import React, { FC, useEffect, useState } from "react"
import { Stop } from "@styled-icons/octicons/Stop"
import { HappyBeaming } from "@styled-icons/boxicons-solid/HappyBeaming"

const Modal:FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true)
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setShowModal(!showModal)
  }

  // Close modal after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowModal(false)
    }, 5000)
  }, [])

  return (
    <div className={`modal modal-fade ${showModal ? "is-active" : ""}`}>
      <div
        onClick={handleClick}
        onKeyDown={handleClick}
        className="modal-background"
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          Big Branch Status&nbsp;{" "}
          <span>
            <Stop color="#FF0000" size="40" />
          </span>
        </header>
        <section className="modal-card-body">
          Big Branch is currently closed
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
