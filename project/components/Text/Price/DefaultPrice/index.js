import React from "react"
import PropTypes from "prop-types"
import { H4 } from "../../Text"
import "./style.scss"

export default function DefaultPrice(props) {
  const { children, className } = props
  return (
    <H4 className={className} styleName="price">
      {children}
    </H4>
  )
}

DefaultPrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
