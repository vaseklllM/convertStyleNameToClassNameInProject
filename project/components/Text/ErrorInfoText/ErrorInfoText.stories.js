import React from "react"
import ErrorInfoText from "./"

export default {
  title: "vsevmeste/Text/ErrorInfoText",
  component: ErrorInfoText,
}

const Template = (args) => <ErrorInfoText {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  text: "text",
  className: "",
}
