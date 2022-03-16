import { obj } from "@/utils/obj"

const types = {
  /** желтый фон, используеться внизу справа компонента */
  yellowBottomRight: 1,
}

export const labelTypes = {
  ...types,
  _arr: obj.toArray(types, true),
}
