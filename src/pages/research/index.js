import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"



const ResearchPage = () => (
  <Layout addMargin addSidebar="research">
    <SEO title="Research" />
    <h2>Research Goal:</h2>
    <ul>
      <li>
        To become a Research-Based University in Computing and Information
        Sciences
      </li>
      <li>
        To be a Research-oriented University in National, Regional, Continental
        and International Levels.
      </li>
    </ul>
    <h2>Research Mission:</h2>
    <ul>
      <li>
        To provide Computing and Information Solutions for IT-sector Development
      </li>
    </ul>
    <div>
      <h2>Teaching Labs</h2>
      <ul>
        <li>
          <Link to="/research/labs/klab">K-Lab</Link>
        </li>
        <li>
          <Link to="/research/labs/physicslab">Physics Lab</Link>
        </li>
        <li>
          <Link to="/research/labs/ciscolab">CISCO Network Lab</Link>
        </li>
        <li>
          <Link to="/research/labs/languagelab">English Network Lab</Link>
        </li>
        <li>
          <Link to="/research/labs/hardwarelab">Hardware Lab</Link>
        </li>
      </ul>
      <h2>Research Labs</h2>
      <ul>
        <li>Cloud Computing System (CCS)</li>
        <li>Data Analysis and Management (DAM)</li>
        <li>Digital Signal Processing (DSP)</li>
        <li>Knowledge Engineering (KE)</li>
        <li>Mathematical Modeling (MM)</li>
        <li>Natural Language Processing (NLP)</li>
        <li>Smart Houses (SH)</li>
        <li>Software Engineering (SE)</li>
        <li>Traffic Control (TC)</li>
      </ul>
    </div>
  </Layout>
)

export default ResearchPage
