import React from "react"
import ConfirmedStatus from "./"

export default {
  title: "vsevmeste/Text/ConfirmedStatus",
  component: ConfirmedStatus,
}

const Template = (args) => <ConfirmedStatus {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  confirmed: false,
  text: "text",
  date: "01.02.2021",
  url: "/",
}
// confirmed
export const confirmed = Template.bind({})

confirmed.args = {
  confirmed: true,
  text: "text",
  date: "01.02.2021",
  url: "/",
}
