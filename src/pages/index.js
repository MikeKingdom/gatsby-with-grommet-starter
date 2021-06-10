import React from "react"
// - import { Link } from "gatsby"
// +
import Link from "../components/link"
import { Box, Button, Collapsible, Heading, Paragraph, Text, } from "grommet"

import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"

const IndexPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Layout>
      <Seo title="Home" />
      <Heading>Hi people</Heading>
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>

      <Button primary onClick={() => setOpen(!open)} label="Toggle" />
      <Collapsible open={open}>
        <Box
          background="light-2"
          round="medium"
          pad="medium"
          align="center"
          justify="center"
        >
          <Text>This is a box inside a Collapsible component</Text>
        </Box>
      </Collapsible>
      <Text>This is other content outside the Collapsible box</Text>

      <Box width={{ max: "300px" }} pad="small">
        <Image />
      </Box>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage
