import React, { useEffect } from "react"
import Layout from "templates/layout"
import SEO from "common/components/SEO"
import GasTrackers from "features/gasTracker/GasTrackers"
import IsEthCongested from "features/gasTrend/IsEthCongested"
import GasTrendChart from "features/gasTrend/GasTrendChart"
import { fetchGasInfoAsync } from "features/gasTracker/gasTrackerSlice"
import { fetchGasTrendAsync } from "features/gasTrend/gasTrendSlice"
import { useDispatch } from "react-redux"
import { Divider } from "@material-ui/core"

const IndexPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGasTrendAsync(7))
    dispatch(fetchGasInfoAsync())
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <IsEthCongested />
      <Divider />
      <GasTrackers />
      <Divider />
      <GasTrendChart />
    </Layout>
  )
}

export default IndexPage
