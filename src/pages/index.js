import React from "react"
// - import { Link } from "gatsby"
// +
import Link from "../components/link"
import { Box, Heading, Paragraph } from "grommet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
    <Box width={{ max: "300px" }} pad="small">
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
