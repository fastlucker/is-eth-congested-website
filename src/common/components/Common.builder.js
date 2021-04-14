import React from "react"
import { Divider } from "@material-ui/core"
import { Builder } from "@builder.io/react"

// Pass element as function that returns the element to avoid
// React does not recognize the `builderState` prop on a DOM element
Builder.registerComponent(() => <Divider />, {
  name: "Divider",
  image: "https://img.icons8.com/ios-filled/344/horizontal-line.png",
})
