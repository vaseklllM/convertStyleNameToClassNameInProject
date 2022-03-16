import React from "react"
import FinalTariffPrice from "./"

export default {
  title: "vsevmeste/Text/Price/FinalTariffPrice",
  component: FinalTariffPrice,
}

const Template = (args) => <FinalTariffPrice {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "1243",
  className: "",
}
