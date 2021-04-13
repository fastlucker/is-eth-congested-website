/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { StyledProvider } from "components-extra"
import { useStaticQuery, graphql } from "gatsby"
import { defaultTheme } from "themes"
import { Container, Box } from "@material-ui/core"
import Header from "common/components/Header"
import Footer from "common/components/Footer"
import { BuilderComponent } from "@builder.io/react"
import "../../builder-settings"
import "./layout.css"

const Layout = ({ children }) => {
  const { allBuilderModels: models } = useStaticQuery(graphql`
    query HeaderFooterQuery {
      allBuilderModels {
        header(limit: 1, options: { cachebust: true }) {
          content
        }
        footer(limit: 1, options: { cachebust: true }) {
          content
        }
      }
    }
  `)

  const header = models?.header[0]?.content ?? []
  const footer = models?.footer[0]?.content ?? []
  return (
    <StyledProvider theme={defaultTheme}>
      <BuilderComponent modelName="header" content={header} />
      <Container>
        <Box py={3}>{children}</Box>
      </Container>
      <BuilderComponent modelName="footer" content={footer} />
    </StyledProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
