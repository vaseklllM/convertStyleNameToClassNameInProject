import React from "react"
import PropTypes from "prop-types"
import { Span10 } from "../Text"
import "./style.scss"

function RedMessagePcs(props) {
  const { pcs, className } = props

  if (typeof pcs !== "number" || pcs < 1) return null

  return (
    <div className={className} styleName='item'>
      <Span10 styleName='text'>{pcs}</Span10>
    </div>
  )
}

RedMessagePcs.propTypes = {
  pcs: PropTypes.number,
  className: PropTypes.string,
}

export default RedMessagePcs
