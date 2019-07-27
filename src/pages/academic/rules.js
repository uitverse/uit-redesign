import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"



const AcademicRulesPage = () => (
  <Layout addMargin addSidebar="academic">
    <SEO title="Academic Rules" />
    <iframe
      title="UIT Academic Rules"
      src="https://docs.google.com/viewer?embedded=true&url=http://www.uit.edu.mm/UITAcademicRules.pdf"
      style={{ width: "100%", height: "800px", border: "none" }}
    ></iframe>
  </Layout>
)

export default AcademicRulesPage
