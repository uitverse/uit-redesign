import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"

const AdmissionPage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="Admission" />
    <h2>Welcome to UIT</h2>
    <p>
      {" "}
      UIT has amazing opportunities for the students. You are invited to take
      the next step forward in your way to success and join our university.
      Students who want to fulfill their academic ambitions, intellectual
      passions and the ones, who want to be IT Professionals, can come to our
      university. If it sounds good and interesting to you, UIT is the right
      choice for your future.
    </p>
    <strong>The annual student Intake : 200 students </strong>
    <h2>Admission Requirements for UIT</h2>
    <p>
      The students are to get{" "}
      <em>
        <strong> at least 450 marks </strong>
      </em>
      in the Matriculation Examination to apply to the UIT. The candidates from
      Myanmar are applicable to join this university. The time to join this
      university is in{" "}
      <em>
        <strong> December </strong>
      </em>
      .{" "}
    </p>
    <ul>
      <li> 4 Photographs of the Applicant </li>
      <li>
        copies and the original of NRC of the applicant and copies of parents'
        NRC
      </li>
      <li>Copy and Original of Matriculation Exam Mark Receipt </li>
    </ul>
  </Layout>
)

export default AdmissionPage
