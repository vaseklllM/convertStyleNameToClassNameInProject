import React from "react"
import "./style.scss"
import PropTypes from "prop-types"
import { InfoIcon } from "./icons"
import { Span14 } from "../Text"

// круглый информирующий значок вместе с выпадающим текстом
const RoundInformativeIcon = (props) => {
  const {
    tooltipClassName,
    className,
    bodyClassName,
    children,
    w,
    Icon,
    size,
    position = "bottom" || position,
  } = props
  /**
   * param "position"
   * default = bottom
   * position: "left, top, right,bottom "
   */
  if (!children)
    return (
      <div styleName="RoundInformativeIcon" className={className}>
        <InfoIcon styleName="RoundInformativeIcon-icon" size={size} />
      </div>
    )

  return (
    <div styleName="RoundInformativeIcon" className={className}>
      {Icon ?? <InfoIcon styleName="RoundInformativeIcon-icon" size={size} />}
      <div
        styleName={`RoundInformativeIcon-body-${position}`}
        className={bodyClassName}
        style={{ width: `${w}px` }}
      >
        {typeof children === "string" ? (
          <Span14
            styleName="RoundInformativeIcon-body-text"
            className={tooltipClassName}
          >
            {children}
          </Span14>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

RoundInformativeIcon.propTypes = {
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  tooltipClassName: PropTypes.string,
  mainClassNames: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  w: PropTypes.number, // body width
  Icon: PropTypes.element,
  // style: PropTypes.object,
  size: PropTypes.string,
  top: PropTypes.string,
  position: PropTypes.string,
}

export default RoundInformativeIcon
