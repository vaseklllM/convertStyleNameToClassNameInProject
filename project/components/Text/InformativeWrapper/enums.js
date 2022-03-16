import { createEnumProto } from "@/enums/fns/createEnumProto"

const positionsObject = {
  top: "top",
  bottom: "bottom",
}

export const informativeWrapperPositions = Object.freeze({
  ...positionsObject,
  ...createEnumProto(positionsObject),
})
