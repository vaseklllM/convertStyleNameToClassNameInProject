import React from "react"
import PropTypes from "prop-types"
import { Span14 } from "../../Text"

export default function TablePrice({ children, className }) {
  return <Span14 className={className}>{children}</Span14>
}

TablePrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
