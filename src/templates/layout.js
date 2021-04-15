/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { StyledProvider } from "components-extra"
import { graphql } from "gatsby"
import { defaultTheme } from "themes"
import { Container, Box } from "@material-ui/core"
import { BuilderComponent } from "@builder.io/react"
import { useDispatch } from "react-redux"
import { fetchGasInfoAsync } from "features/gasTracker/gasTrackerSlice"
import { fetchGasTrendAsync } from "features/gasTrend/gasTrendSlice"
import Link from "common/components/Link"
import "../../builder-settings"
import "./layout.css"

const Layout = ({ data }) => {
  const models = data?.allBuilderModels
  const header = models?.header[0]?.content ?? []
  const footer = models?.footer[0]?.content ?? []
  const page = models?.page[0]?.content ?? []
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGasTrendAsync(7))
    dispatch(fetchGasInfoAsync())
  })

  return (
    <StyledProvider theme={defaultTheme}>
      <BuilderComponent renderLink={Link} modelName="header" content={header} />
      <Container>
        <Box py={3}>
          <BuilderComponent renderLink={Link} modelName="page" content={page} />
        </Box>
      </Container>
      <BuilderComponent renderLink={Link} modelName="footer" content={footer} />
    </StyledProvider>
  )
}

export default Layout

export const query = graphql`
  query LayoutQuery($path: String!) {
    allBuilderModels {
      header(limit: 1, options: { cachebust: true }) {
        content
      }
      footer(limit: 1, options: { cachebust: true }) {
        content
      }
      page(target: { urlPath: $path }, limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`
