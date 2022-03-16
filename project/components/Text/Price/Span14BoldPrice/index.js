import React from "react"
import PropTypes from "prop-types"
import { Span14bold } from "../../Text"
import "./style.scss"

export default function Span14BoldPrice(props) {
  const { children, className } = props

  return (
    <Span14bold className={className} styleName="price">
      {children}
    </Span14bold>
  )
}

Span14BoldPrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
