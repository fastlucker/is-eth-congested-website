import React, { useState } from "react"
import { Newsletter } from "components-extra"
import { Box, makeStyles } from "@material-ui/core"
import { Builder } from "@builder.io/react"

const useStyles = makeStyles(theme => ({
  full: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
  },
}))

export default function CustomNewsletter() {
  const classes = useStyles()
  const [email, setEmail] = useState("")

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Newsletter
        className={classes.full}
        title="Subscribe to our newsletter"
        description="Get exclusive offers every week!"
        caption="By subscribing, you agree to receive emails from us. Don't worry, we are not spamers :)"
      >
        <Newsletter.Input
          id="email"
          className={classes.input}
          placeholder="Email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Newsletter.Button
          onClick={() => console.log("Thanks for subscribing!")}
        >
          Subscribe
        </Newsletter.Button>
      </Newsletter>
    </Box>
  )
}

Builder.registerComponent(CustomNewsletter, {
  name: "Newsletter",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image: "https://img.icons8.com/ios-filled/344/form.png",
  inputs: [
    {
      // TODO: add inputs when we decide to use this
      // must implement api and pass variables in the component in builder.io
    },
  ],
})
