import React from "react"
import Permissions from "./"

export default {
  title: "vsevmeste/Text/Permissions",
  component: Permissions,
}

const Template = (args) => <Permissions {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  data: [
    {
      id: 1,
      title: "title",
      subtitle: "subtitle",
      checkbox: {
        isClickable: true,
        value: false,
      },
    },
    {
      id: 2,
      title: "title",
      subtitle: "subtitle",
      checkbox: {
        isClickable: true,
        value: false,
      },
    },
  ],
  styleName: "",
  onChange: (x) => {
    console.log(x)
  },
}
