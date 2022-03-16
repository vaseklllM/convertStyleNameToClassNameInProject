import React from "react"
import Permission from "./"

export default {
  title: "vsevmeste/Text/Permission",
  component: Permission,
}

const Template = (args) => <Permission {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  data: {
    id: 1,
    title: "title",
    subtitle: "subtitle",
    checkbox: {
      isClickable: true,
      value: false,
    },
  },
  styleName: "",
  onChange: (x) => {
    console.log(x)
  },
}
