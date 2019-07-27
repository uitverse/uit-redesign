import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"



const UITJourneyPage = () => (
  <Layout addMargin addSidebar="about">
    <SEO title="UIT's 6 Years Journey" />
    <iframe
      title="UIT 6 Years Journey"
      src="https://docs.google.com/viewer?embedded=true&url=http://www.uit.edu.mm/UIT6YearsJourney.pdf"
      style={{
        width: "100%",
        height: "800px",
        border: "none",
      }}
    ></iframe>
  </Layout>
)

export default UITJourneyPage
