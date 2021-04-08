import React, { useEffect } from "react"
import Layout from "templates/layout"
import SEO from "common/components/SEO"
import GasTrackers from "features/gasTracker/GasTrackers"
import IsEthCongested from "features/gasTrend/IsEthCongested"
import GasTrendChart from "features/gasTrend/GasTrendChart"
import { fetchGasInfoAsync } from "features/gasTracker/gasTrackerSlice"
import { fetchGasTrendAsync } from "features/gasTrend/gasTrendSlice"
import { useDispatch } from "react-redux"
import { Box, Divider } from "@material-ui/core"

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
      <Box display="flex" justifyContent="center" p={2}>
        <iframe
          src="https://viewm.moonicorn.network/#%7B%22options%22%3A%7B%22publisherAddr%22%3A%220xB7d3F81E857692d13e9D63b232A90F4A1793189E%22%2C%22whitelistedTokens%22%3A%5B%220x6B175474E89094C44Da98b954EedeAC495271d0F%22%5D%2C%22whitelistedType%22%3A%22legacy_728x90%22%2C%22randomize%22%3Atrue%2C%22targeting%22%3A%5B%5D%2C%22width%22%3A%22728%22%2C%22height%22%3A%2290%22%2C%22minPerImpression%22%3A%220%22%2C%22fallbackUnit%22%3A%22QmUDmY7LpLr7VDfB4dsCguMTD7CEowsQsc6swZDyxeURDq%22%2C%22marketSlot%22%3A%22QmYDCZenG27eBY3FyW9sUKAAhtTi2DDDUepgu2JfXKtBu1%22%7D%7D"
          width="728"
          height="90"
          scrolling="no"
          frameborder="0"
          style={{ border: 0, margin: 0 }}
          onload="window.addEventListener('message', function(ev) { 
                    if (ev.data.hasOwnProperty('adexHeight') && ('https://viewm.moonicorn.network' === ev.origin)) {
                      for (let f of document.getElementsByTagName('iframe')) {	
                        if (f.contentWindow === ev.source) {
                          f.height = ev.data.adexHeight;
                        }
                      }	
                    }
                  }, false)"
        ></iframe>
      </Box>
      <Divider />
      <GasTrendChart />
    </Layout>
  )
}

export default IndexPage
