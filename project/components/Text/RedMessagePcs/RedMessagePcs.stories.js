import React from "react"
import RedMessagePcs from "./"

export default {
  title: "vsevmeste/Text/RedMessagePcs",
  component: RedMessagePcs,
}

const Template = (args) => <RedMessagePcs {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  pcs: 3,
  className: "",
}
