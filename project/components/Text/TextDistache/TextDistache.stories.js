import React from "react"
import TextDistache from "./"

export default {
  title: "vsevmeste/Text/TextDistache",
  component: TextDistache,
}

const Template = (args) => <TextDistache {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  size: 20,
}
// size18
export const size18 = Template.bind({})

size18.args = {
  size: 18,
}
