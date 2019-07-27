import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MSEPage = () => (
  <Layout addMargin>
    <SEO title="" />
    <h3>M.C.Sc (Software Engineering)</h3>
    <p>
      The UIT Campus aims to offer a broad range of Master Degree Program.
      Currently,it also offers Master of Computer Science for Software
      Engineering Courses for 2017-2018 academic year and 2018-2019 academic
      year. Master's candidates are required to have minimum credit, 20 credits
      (mandatorily taking 10 courses and doing a thesis). The candidates must
      have completed the following subjects:{" "}
    </p>
    <ul>
      <li>Compulsory Courses</li>
      <ul>
        <li>English</li>
        <li>SE-601: Systems of Systems Engineering</li>
        <li>SE-602: Formal Specification and Model Checking</li>
        <li>SE-603: Neural Network and Deep Learning</li>
        <li>BIS-602: Production and Operations Management</li>
        <li>ES-603: Cyber-Physical System and Embedded Devices</li>
        <li>CM-601: Information Theory</li>
      </ul>
      <li>Elective Courses</li>
      <p>
        The candidates may choose three courses from the following elective
        courses:
      </p>
      <ul>
        <li>KE-601: Computational Intelligence</li>
        <li>BIS-603: Business Intelligence Modeling and Analytics</li>
        <li>KE-505: Semantic Web and Ontology Engineering</li>
        <li>ES-401: Micro-controller Programming</li>
        <li>CM-602: Applied Combinatorics</li>
        <li>KE-602: Geographic Information System</li>
        <li>KE-404: Computer Graphics</li>
      </ul>
      <p>
        If the candidates take the courses from the other faculty, you must
        fulfill the additional requirements set by the other faculty.
      </p>
      <li>Career Opportunities</li>
      <p>
        After this program, graduates can find jobs in their specialized fields
        as project manager, systems analysts, and data scientists, software
        engineers, software quality manager, technical support, enterprise
        system consultant and etc.
      </p>
    </ul>
  </Layout>
)
export default MSEPage
