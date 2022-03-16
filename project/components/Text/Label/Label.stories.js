import React from "react"
import Label from "./"
import { labelTypes } from "@/components/Text/Label/enums"

export default {
  title: "vsevmeste/Text/Label",
  component: Label,
}

const Template = (args) => <Label {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "children",
  type: labelTypes.yellowBottomRight,
  className: "",
}
