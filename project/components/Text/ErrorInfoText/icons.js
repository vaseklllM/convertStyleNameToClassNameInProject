import React from "react"
import PropTypes from "prop-types"

export function RedInfoIcon({ className }) {
  const p = {
    stroke: "#E91E63",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8C14.6673 4.3181 11.6825 1.33333 8.00065 1.33333C4.31875 1.33333 1.33398 4.3181 1.33398 8C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z'
        {...p}
      />
      <path d='M8 10.6667V8' {...p} />
      <path d='M8 5.33333H8.00667' {...p} />
    </svg>
  )
}

RedInfoIcon.propTypes = {
  className: PropTypes.string,
}
