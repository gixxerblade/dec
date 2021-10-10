import React from "react"
import PropTypes from "prop-types"
import { useAccordion } from "./Accordion"
import { Plus } from "@styled-icons/boxicons-regular/Plus"
import { Minus } from "@styled-icons/boxicons-regular/Minus"

const Panel = ({ body, title, id }) => {
  const { onClick, isOpen, accordionId } = useAccordion(id)

  const toggle = (e) => {
    if (e.keyCode === 13 || e.type === "click") {
      onClick(id)
    }
  }

  return (
    <div
      role="tab"
      tabIndex={0}
      onKeyDown={e => toggle(e)}
      className={`panel panel-default ${isOpen ? "active" : ""}`}
    >
      <div
        onClick={e => toggle(e)}
        onKeyDown={e => toggle(e)}
        role="button"
        id={`heading-${id}`}
        className="panel-heading"
        tabIndex="0"
      >
        <h2 className="panel-title">
          <div
            className="collapsed"
            data-toggle="collapse"
            data-parent={`#${accordionId}`}
            aria-expanded={isOpen}
            aria-controls={`collapse-${id}`}
          >
            <div>{typeof title === "function" ? title() : title}</div>
            {isOpen ? (
              <Minus
                size={30}
                className="minus has-text-dark"
                aria-label="close accordion"
              />
            ) : (
              <Plus
                size={30}
                className="plus has-text-dark"
                aria-label="expand accordion"
              />
            )}
          </div>
        </h2>
      </div>
      <div
        style={{
          padding: isOpen ? "40px 15px" : "0 15px",
          transition: "all ease 0.5s",
          willChange: "height, padding",
        }}
        role="tabpanel"
        aria-labelledby={`heading-${id}`}
        aria-hidden={!isOpen}
      >
        {isOpen && <div>{typeof body === "function" ? body() : body}</div>}
      </div>
    </div>
  )
}

Panel.propTypes = {
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  id: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Panel
