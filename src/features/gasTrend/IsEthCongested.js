import React from "react"
import { useSelector } from "react-redux"
import {
  selectGasInfoBySpeed,
  selectGasInfoStatus,
} from "features/gasTracker/gasTrackerSlice"
import {
  selectGasTrendAverage,
  selectGasTrendStatus,
} from "features/gasTrend/gasTrendSlice"
import { Box, Grid, Typography } from "@material-ui/core"
import { Builder } from "@builder.io/sdk"

export default function IsEthCongested(props) {
  const normalGasInfo = useSelector(state =>
    selectGasInfoBySpeed(state, "normal")
  )
  const normalAverage = useSelector(state =>
    selectGasTrendAverage(state, "normal")
  )
  const gasInfoStatus = useSelector(selectGasInfoStatus)
  const gasTrendStatus = useSelector(selectGasTrendStatus)
  const everythingLoaded = gasInfoStatus === "idle" && gasTrendStatus === "idle"
  const isCongested = normalGasInfo.gwei > normalAverage
  const {
    title = "Is Ethereum Congested?",
    yesMessage = "Yes!",
    noMessage = "No!",
    loadingMessage = "Loading...",
  } = props
  return (
    <Box py={2}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            {title}
          </Typography>
          <Typography
            align="center"
            variant="h3"
            color={
              everythingLoaded ? (isCongested ? "error" : "secondary") : "error"
            }
          >
            {everythingLoaded
              ? isCongested
                ? yesMessage
                : noMessage
              : loadingMessage}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

Builder.registerComponent(IsEthCongested, {
  name: "Is Ethereum Congested?",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image: "https://img.icons8.com/ios-filled/344/question.png",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Is Ethereum Congested?",
    },
    {
      name: "yesMessage",
      type: "string",
      defaultValue: "Yes!",
    },
    {
      name: "noMessage",
      type: "string",
      defaultValue: "No!",
    },
    {
      name: "loadingMessage",
      type: "string",
      defaultValue: "Loading...",
    },
  ],
})
