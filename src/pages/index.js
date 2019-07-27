import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Hero2 from "../components/hero2"
import Hero3 from "../components/hero3"
import Hero4 from "../components/hero4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Hero2 />
    <Hero3 />
    <Hero4 />
  </Layout>
)

export default IndexPage
