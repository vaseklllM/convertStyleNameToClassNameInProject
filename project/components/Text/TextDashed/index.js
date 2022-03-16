import React, { memo } from "react"
import PropTypes from "prop-types"
import "./style.scss"
import TextItem from "@/components/Text/TextDashed/TextItem"

/** компонент, который делает текст вида "лево ___________ право" */
function TextDashed(props) {
  return (
    <div styleName="text" className={props.className}>
      <TextItem styleName="left" data={props.leftText} />
      <div
        styleName="line"
        style={{ borderBottomStyle: props.line?.borderBottomStyle }}
      />
      <TextItem styleName="right" data={props.rightText} />
    </div>
  )
}

TextDashed.propTypes = {
  className: PropTypes.string,
  // текст слева
  leftText: TextItem.propTypes.data,
  // текст справа
  rightText: TextItem.propTypes.data,
  line: PropTypes.exact({
    borderBottomStyle: PropTypes.oneOf(["dashed", "dotted"]),
  }),
}

export default memo(TextDashed)
