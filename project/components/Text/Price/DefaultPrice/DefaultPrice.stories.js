import React from "react"
import DefaultPrice from "./"

export default {
  title: "vsevmeste/Text/Price/DefaultPrice",
  component: DefaultPrice,
}

const Template = (args) => <DefaultPrice {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "1243",
  className: "",
  currency: { name_short: "USD" },
}
