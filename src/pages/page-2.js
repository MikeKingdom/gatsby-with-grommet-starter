import React from "react"
// - import { Link } from "gatsby"
// +
import Link from "../components/link"
import { Heading, Paragraph } from "grommet"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Heading>Hi from the second page</Heading>
    <Paragraph>Welcome to page 2</Paragraph>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
