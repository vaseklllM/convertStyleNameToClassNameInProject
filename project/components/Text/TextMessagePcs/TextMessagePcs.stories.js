import React from "react"
import TextMessagePcs from "./"

export default {
  title: "vsevmeste/Text/TextMessagePcs",
  component: TextMessagePcs,
}

const Template = (args) => <TextMessagePcs {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "children",
}
