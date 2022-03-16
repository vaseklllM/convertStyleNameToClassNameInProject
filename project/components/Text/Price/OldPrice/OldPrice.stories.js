import React from "react"
import OldPrice from "./"

export default {
  title: "vsevmeste/Text/Price/OldPrice",
  component: OldPrice,
}

const Template = (args) => <OldPrice {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "1243",
  className: "",
  currency: { name_short: "USD" },
}
