import React from "react"
import PropTypes from "prop-types"
import { ptLabelChildren } from "../propTypes"
import { Span12 } from "../../Text"
import "./style.scss"

function YellowBottomRightLabel(props) {
  const { text, className } = props

  return (
    <Span12 className={className} styleName='body'>
      {text}
    </Span12>
  )
}

YellowBottomRightLabel.propTypes = {
  text: ptLabelChildren,
  className: PropTypes.string,
}

export default YellowBottomRightLabel
