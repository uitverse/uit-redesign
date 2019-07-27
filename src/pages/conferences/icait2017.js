import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


import Notice from "../../components/notice"

const icait2017Page = () => (
  <Layout addMargin addSidebar="conferences">
    <SEO title="ICAIT 2017" />
    <Notice
      description="ICAIT 2017 has completely been held in November of 2017."
      action={{
        title: "View Papers",
        link: "/conferences/papers/icait2017",
      }}
    />
    <h2>CALL FOR PAPERS</h2>
    <p>
      The 1st International Conference on Advanced Information Technologies
      (ICAIT) will be held at MICT Park, Yangon, Myanmar on 1st and 2nd November
      2017 organized by the University of Information Technology (UIT) under the
      Ministry of Education. It will cover the areas of research and development
      in the fields of advanced information technologies. The conference offers
      an excellent opportunity to learn and share the latest developments to
      interact with leading experts in the filed. ICAIT,2017 will aim to
      strengthen the research laboratories, IT industries and universities.
    </p>
    <h2>TOPICS OF CONFERENCE</h2>
    <ul>
      <li> Advanced Computational Paradigms </li>
      <li> Big Data Methods and Analytics </li>
      <li>Cloud Computing</li>

      <li>Computer Vision and Image Processing</li>
      <li>Cyber Security and Data Forensics</li>
      <li>Database and Data Mining</li>
      <li>Embedded Systems and Digital Signal Processing</li>
      <li>Internet of Things and Cyber Physical Systems</li>
      <li>Mobile and Ubiquitous Computing</li>
      <li>Modeling and Simulation</li>
      <li>Natural Language Processing</li>
      <li>Networking and Communications</li>
      <li>Parallel and Distributed Systems</li>
      <li>Software Defined Network</li>
      <li>Software Engineering</li>
      <li>Web and Internet Computing</li>
    </ul>
    <h2>PAPER SUBMISSION GUIDELLINES</h2>
    <p>
      Authors are invited to submit papers by{" "}
      <font color="red">
        <strike>
          31<sup>st</sup> August, 2017
        </strike>
        (15<sup>th</sup> September, 2017)
      </font>
      . Submitted papers must be original and should not have been published
      previously.The paper must be no more than 6 pages with
      <a href="http://uit.edu.mm/paper-format-ICAIT2017.doc" download="">
        <i> paper-format-ICAIT2017</i>
      </a>
      .
    </p>
    <hr />
    <table>
      <tbody>
        <tr>
          <th>
            <font color="red">IMPORTANT DATE</font>
          </th>
          <th>Registration fees</th>
        </tr>
        <tr>
          <td>
            Submission Deadline&nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;{" "}
            <strike>
              31<sup>st</sup> August, 2017
            </strike>
            &nbsp;{" "}
            <strike>
              {" "}
              (15<sup>th</sup> September, 2017)
            </strike>
          </td>

          <td>Local Participant &nbsp; &nbsp; &nbsp;:&nbsp; &nbsp;70000 Ks</td>
        </tr>
        <tr>
          <td>
            Acceptance Notification : &nbsp; &nbsp;{" "}
            <strike>
              4<sup>th</sup> October, 2017{" "}
            </strike>
          </td>
          <td>Foreign Participant &nbsp;: &nbsp; &nbsp;300 USD</td>
        </tr>
        <tr>
          <td>
            Camera Ready &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp;{" "}
            <strike>
              15<sup>th</sup> October, 2017
            </strike>
            &nbsp;
            <strike>
              (20<sup>th</sup> October, 2017)
            </strike>
          </td>
          <td>
            Submission Email &nbsp;: &nbsp; &nbsp;
            <font color="red">icait2017@uit.edu.mm</font>
          </td>
        </tr>
        <tr>
          <td>
            Conference Dates &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;:&nbsp;&nbsp;&nbsp;1<sup>st</sup> - 2<sup>nd</sup> November,
            2017
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p>
      The 1<sup>st</sup> International Conference on Advanced Information
      Technologies Program Agenda is available for download here:{" "}
      <a href="http://uit.edu.mm/ICAIT 2017_agenda_update.pdf" download="">
        <i>
          <strong>ICAIT 2017 Agenda</strong>
        </i>
      </a>
      .
    </p>
  </Layout>
)

export default icait2017Page
