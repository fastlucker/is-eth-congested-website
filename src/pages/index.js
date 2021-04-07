import React from "react"
import Layout from "src/templates/layout"
import SEO from "components/seo"
import GasTrackers from "src/features/gasTracker/GasTrackers"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GasTrackers />
    </Layout>
  )
}

export default IndexPage
