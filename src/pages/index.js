import React from "react"
import Layout from "templates/layout"
import SEO from "common/components/seo"
import GasTrackers from "features/gasTracker/GasTrackers"
import IsEthCongested from "features/gasTrend/IsEthCongested"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GasTrackers />
      <IsEthCongested />
    </Layout>
  )
}

export default IndexPage
