import React from "react"
import Layout from "../templates/layout"
import SEO from "../common/seo"
import GasTrackers from "../features/gasTracker/GasTrackers"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GasTrackers />
    </Layout>
  )
}

export default IndexPage
