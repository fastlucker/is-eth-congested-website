import React, { useState } from "react"
import { Newsletter } from "components-extra"
import { Box, makeStyles } from "@material-ui/core"
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
