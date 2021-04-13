import { Builder } from "@builder.io/react"
import Header from "./Header"

Builder.registerComponent(Header, {
  // NOTE: never name a component the same as a model
  name: "Header",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Your Title Here",
    },
  ],
})
