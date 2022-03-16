import React from "react"
import "./style.scss"
import { CheckIcon } from "./icons"
import { Span16, P14 } from "../Text"
import ptPermission from "./propTypes"
import { txt } from "../../../utils"
import { Checkbox } from "../../Switches"

const Permission = (props) => {
  const { data, styleName, onChange, className } = props
  const { title, description, checkbox } = data

  function changeCheckbox(value) {
    if (typeof data.id === "number") {
      onChange({ id: data.id, value })
    } else onChange({ value })
  }

  const check = (() => {
    if (typeof checkbox === "object" && checkbox.isClickable) {
      return (
        <div styleName="Permission-checkbox">
          <Checkbox defaultValue={checkbox.value} onChange={changeCheckbox} />
        </div>
      )
    } else {
      return (
        <div styleName="Permission-icon">
          <CheckIcon />
        </div>
      )
    }
  })()

  return (
    <div styleName={txt.join(["Permission", styleName])} className={className}>
      {check}
      <div styleName="Permission-text">
        <Span16>{title}</Span16>
        <P14>{description}</P14>
      </div>
    </div>
  )
}

Permission.defaultProps = {
  data: {
    checkbox: {
      value: true, // состояние флага
      isCheckbox: false, // кликабельный ли флаг
    },
  },
  onChange: () => {},
}

Permission.propTypes = ptPermission

export default Permission
