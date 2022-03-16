import React from "react"
import Rating from "./"

export default {
  title: "vsevmeste/Text/Rating",
  component: Rating,
}

const Template = (args) => <Rating {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: 4,
  isGrayColor: false,
  className: "",
}
// isGrayColor
export const isGrayColor = Template.bind({})

isGrayColor.args = {
  children: 4,
  isGrayColor: true,
  className: "",
}
