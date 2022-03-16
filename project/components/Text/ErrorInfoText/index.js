import React from "react"
import PropTypes from "prop-types"
import { RedInfoIcon } from "./icons"
import "./style.scss"
import { Span14 } from "../Text"

function ErrorInfoText(props) {
  const { text, className } = props

  if (typeof text !== "string") return null

  return (
    <div className={className} styleName='body'>
      <RedInfoIcon styleName='icon' />
      <Span14 styleName='text'>{text}</Span14>
    </div>
  )
}

ErrorInfoText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

export default ErrorInfoText
