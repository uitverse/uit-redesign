import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SEPage = () => (
  <Layout addMargin>
    <SEO title="Software Engineering" />
    <h3>Software Engineering</h3>
    <p>
      {" "}
      Software Engineering focuses on software development and goes beyond
      programming from design to development, testing to troubleshooting, to
      create systems software or applications that behave reliably and
      efficiently, are affordable to develop and maintain, satisfy all the
      requirements that customers have defined for them. SE programs generally
      expect students to focus on problem modeling and analysis,software
      design,software verification and validation,software quality, software
      process, software management, etc.
    </p>
    <h3>Career</h3>
    <ul>
      <li> Software Engineers</li>
      <li>Project Manager</li>
      <li>System Analysts</li>
      <li>Software Developer / Programmer</li>
      <li>Software Tester</li>
      <li>Technical Support</li>
      <li>Middle ware Analyst</li>
    </ul>
  </Layout>
)
export default SEPage
