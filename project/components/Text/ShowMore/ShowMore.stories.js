import React from "react"
import ShowMore from "./"

export default {
  title: "vsevmeste/Text/ShowMore",
  component: ShowMore,
}

const Template = (args) => <ShowMore {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  show: false,
  handleShow: (x) => {
    console.log(x)
  },
  className: "",
}
// show
export const show = Template.bind({})

show.args = {
  show: true,
  handleShow: (x) => {
    console.log(x)
  },
  className: "",
}
