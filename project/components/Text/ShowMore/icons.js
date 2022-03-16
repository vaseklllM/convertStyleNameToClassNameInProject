import React from "react"
import PropTypes from "prop-types"

export const ArrowIcon = ({ show }) => {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ArrowIcon"
      style={{ transform: `rotate(${show ? "180deg" : "0deg"})` }}
    >
      <path
        d="M1 1L4 4L7 1"
        stroke="#2991F5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

ArrowIcon.propTypes = {
  show: PropTypes.bool,
}
