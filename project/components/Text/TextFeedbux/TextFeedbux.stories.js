import React from "react"
import TextFeedbux from "./"

export default {
  title: "vsevmeste/Text/TextFeedbux",
  component: TextFeedbux,
}

const Template = (args) => <TextFeedbux {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "children",
}
