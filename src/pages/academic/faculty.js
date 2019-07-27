import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"

const facultyPage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="Faculty" />
    <h2>The University of Information Technology's Faculties</h2>
    <p>
      According to the Degrees offered, the departments of the University of
      Information Technology are organized as the following :
    </p>
    <h3>Academic Faculties</h3>
    <ul>
      <li>Faculty of Computer Science</li>
      <li>Faculty of Computer Systems and Technologies</li>
      <li>Faculty of Computing</li>
      <li>Faculty of Information Science</li>
      <li>Faculty of Languages</li>
      <ul>
        <li>Department of English</li>
        <li>Department of Myamar</li>
      </ul>
      <li>Faculty of Natural Science</li>
      <ul>
        <li>Department of Physics</li>
      </ul>
      <li>Information Technology Supporting and Maintenance</li>
    </ul>
    <h3>Management Departments</h3>
    <ul>
      <li>Department of Student Affairs</li>
      <li>Department of Staff Affairs</li>
      <li>Department of Operation Division</li>
      <li>Department of International Relations</li>
      <li>Department of Finance</li>
    </ul>
  </Layout>
)

export default facultyPage
