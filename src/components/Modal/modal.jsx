import React, { useState } from 'react'

const Modal = () => {
    const [showModal, setShowModal] = useState(true)

    return (
        <div class={`modal ${showModal ? 'is-active' : ''}`}>
            <div onClick={() => setShowModal(!showModal)} class="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">Big Branch Status</header>
                <section class="modal-card-body">
                    Stuff here
                </section>

            </div>
            <button onClick={() => setShowModal(!showModal)} class="modal-close is-large" aria-label="close" />
        </div>
    )
}

export default Modal