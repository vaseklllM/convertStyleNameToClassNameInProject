import React from "react"
import DateKey from "./"

export default {
  title: "vsevmeste/Text/DateKey",
  component: DateKey,
}

const Template = (args) => <DateKey {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  date: "01.02.2021",
  className: "",
}
