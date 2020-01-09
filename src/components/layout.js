import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Grommet, Anchor, Box, Footer, Main, Text } from "grommet"
import { grommet } from "grommet/themes"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // TODO: make Main not do height 100% and use it...
  // TODO: any other way to make Grommet do display:flex?
  //       these two tweaks make main take up the middle and
  //       the footer stay at the bottom
  return (
    <Grommet
      theme={grommet}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
      <Footer background="light-4" justify="center" pad="small">
        <Text textAlign="center" size="small">
          © {new Date().getFullYear()}, Built with
          {` `}
          <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
          {` and `}
          <Anchor href="https://v2.grommet.io">Grommet</Anchor>
        </Text>
      </Footer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
