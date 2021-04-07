import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectGasInfo } from "features/gasTracker/gasTrackerSlice"
import {
  fetchGasTrendAsync,
  selectGasTrend,
} from "features/gasTrend/gasTrendSlice"
import { Box, Grid, Typography } from "@material-ui/core"

export default function IsEthCongested() {
  const dispatch = useDispatch()
  const gasInfo = useSelector(selectGasInfo)
  const gasTrend = useSelector(selectGasTrend)
  useEffect(() => {
    dispatch(fetchGasTrendAsync(7))
  }, [])
  return (
    <Box p={4}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Is Ethereum Congested?
          </Typography>
          <Typography align="center" variant="h3" color="error">
            Yes!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
