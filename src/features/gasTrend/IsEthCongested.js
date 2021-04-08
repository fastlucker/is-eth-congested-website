import React from "react"
import { useSelector } from "react-redux"
import { selectGasInfoBySpeed } from "features/gasTracker/gasTrackerSlice"
import { selectGasTrendAverage } from "features/gasTrend/gasTrendSlice"
import { Box, Grid, Typography } from "@material-ui/core"

export default function IsEthCongested() {
  const normalGasInfo = useSelector(state =>
    selectGasInfoBySpeed(state, "normal")
  )
  const normalAverage = useSelector(state =>
    selectGasTrendAverage(state, "normal")
  )
  const isCongested = normalGasInfo.gwei > normalAverage
  return (
    <Box py={2}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Is Ethereum Congested?
          </Typography>
          <Typography
            align="center"
            variant="h3"
            color={isCongested ? "error" : "secondary"}
          >
            {isCongested ? "Yes!" : "No!"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
