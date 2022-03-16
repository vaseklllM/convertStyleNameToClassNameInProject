import React from "react"
import PriceEmpty from "./"

export default {
  title: "vsevmeste/Text/Price/PriceEmpty",
  component: PriceEmpty,
}

const Template = (args) => <PriceEmpty {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "1243",
}
