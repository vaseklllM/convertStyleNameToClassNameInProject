import React from "react"
import PropTypes from "prop-types"
import { labelTypes } from "./enums"
import { ptLabelChildren } from "./propTypes"
import YellowBottomRightLabel from "./YellowBottomRightLabel"

function Label(props) {
  const { children, type = labelTypes.yellowBottomRight, className } = props

  const labels = {
    [labelTypes.yellowBottomRight]: <YellowBottomRightLabel text={children} className={className} />,
  }

  return labels[type]
}

Label.propTypes = {
  children: ptLabelChildren,
  type: PropTypes.oneOf(labelTypes._arr),
  className: PropTypes.string
}

export default Label
