import React, { useMemo, isValidElement } from "react"
import { Span14 } from "@/components/Text"
import { txt } from "@/utils"
import "./style.scss"
import PropTypes from "prop-types"

function TextItem(props) {
  const text = useMemo(() => {
    if (isValidElement(props.data)) return

    const isText = (t) => typeof t === "string" || typeof t === "number"

    if (isText(props.data)) {
      return props.data
    } else if (typeof props.data === "object" && isText(props.data.text)) {
      return props.data.text
    }
  }, [props.data])

  if (!props.data) return null

  if (isValidElement(props.data)) return props.data

  return (
    <Span14
      className={props.className}
      styleName={txt.join([
        "text",
        typeof props.data?.color === "string" && `color_${props.data?.color}`,
      ])}
    >
      {text}
    </Span14>
  )
}

const ptText = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

TextItem.propTypes = {
  className: PropTypes.string,
  // data: PropTypes.element
  data: PropTypes.oneOfType([
    ptText,
    PropTypes.element,
    PropTypes.exact({
      text: ptText,
      color: PropTypes.oneOf(["gray"]),
    }),
  ]),
}

export default TextItem
