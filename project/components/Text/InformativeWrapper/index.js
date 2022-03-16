import React, { useRef } from "react"
import PropTypes from "prop-types"
import "./style.scss"

import { Span14 } from "../Text"
import { informativeWrapperPositions } from "./enums"

const InformativeWrapper = ({
  children,
  label,
  w,
  className,
  position = informativeWrapperPositions.top,
}) => {
  const wrapper = useRef(null)

  if (!children) return null

  return (
    <div styleName="wrapper" className={className}>
      <div ref={wrapper}>{children}</div>
      <div
        styleName={position}
        style={{
          width: `${w}px`,
          left: `${wrapper.current?.clientWidth / 2 - 3}px`,
        }}
      >
        {typeof label === "string" ? (
          <Span14 styleName="text">{label}</Span14>
        ) : (
          label
        )}
      </div>
    </div>
  )
}

InformativeWrapper.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  w: PropTypes.number,
  position: informativeWrapperPositions._pt,
  className: PropTypes.string,
}

export default InformativeWrapper
