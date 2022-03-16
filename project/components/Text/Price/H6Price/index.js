import React from "react"
import PropTypes from "prop-types"
import { H6 } from "../../Text"
import "./style.scss"

export default function H6Price(props) {
  const { children, className } = props
  return (
    <H6 className={className} styleName="price">
      {children}
    </H6>
  )
}

H6Price.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
