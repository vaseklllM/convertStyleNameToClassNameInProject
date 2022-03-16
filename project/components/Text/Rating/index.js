import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import { H2 } from ".."
import { txt } from "@/utils"

const Rating = (props) => {
  const { children, isGrayColor, className } = props
  let rating = undefined
  if (typeof children === "string") rating = parseFloat(children)
  else if (typeof children === "number") rating = children
  rating = rating?.toFixed(1)

  return (
    <H2
      styleName={txt.join(["text", isGrayColor && "gray_rating_text"])}
      className={className}
    >
      {rating}
    </H2>
  )
}

Rating.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isGrayColor: PropTypes.bool,
  className: PropTypes.string,
}

export default Rating
