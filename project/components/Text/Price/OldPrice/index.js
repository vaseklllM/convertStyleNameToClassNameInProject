import React from "react"
import PropTypes from "prop-types"
import { P12 } from "../../Text"
import "./style.scss"

export default function OldPrice({ children, className }) {
  return (
    <P12 styleName="old_price" className={className}>
      {children}
    </P12>
  )
}

OldPrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
