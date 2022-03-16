import React from "react"
import PropTypes from "prop-types"

export default function KitsPrice({ children, className }) {
  return <div className={className}>{children}</div>
}

KitsPrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
