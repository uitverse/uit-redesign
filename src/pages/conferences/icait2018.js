import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Notice from "../../components/notice"

const icait2017Page = () => (
  <Layout addMargin addSidebar="conferences">
    <SEO title="ICAIT 2018" />
    <Notice
      description="ICAIT 2018 has completely been held in November of 2018."
      action={{
        title: "View Papers",
        link: "/conferences/papers/icait2018",
      }}
    />
    <h2>CALL FOR PAPERS</h2>
    <p>
      {" "}
      The 2nd International Conference on Advanced Information Technologies
      (ICAIT) will be held at Novotel Yangon Max Hotel, Yangon, Myanmar on 1st
      and 2nd November, 2018 organized by the University of Information
      Technology (UIT) under the Ministry of Education. It will cover the areas
      of research and development in the filds of advanced information
      technologies. The conference offers an excellent opportunity to learn and
      share the latest developments to interact with leading experts in the
      field. ICAIT, 2018 will aim to strengthen the research laboratories, IT
      industries and universities.
    </p>
    <h2>KEYNOTE SPEAKERS</h2>
    <ul>
      <li>
        Prof. Carlo Ghezzi, Professor of Software Engineering, Politecnico di
        Milano, Italy.
      </li>
      <li>
        Prof. Hiroyuki Iida, Professor, School of Information Science, Japan
        Advanced Institute of Science and Technology (JAIST).
      </li>
      <li>
        Prof. Yoichi Shinoda, Professor, School of Information Science, Japan
        Advanced Institute of Science and Technology (JAIST).
      </li>
    </ul>
    <h2>TOPICS OF CONFERENCE</h2>
    <ul>
      <li>Advanced Computational Paradigms</li>
      <li>Big Data Methods and Analytics</li>
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
          31<sup>st</sup> July, 2018
        </strike>
      </font>
      <font color="red">
        <strike>
          (31<sup>st</sup> August, 2018)
        </strike>
      </font>
      . Submitted papers must be original and should not have been published
      previously.The paper must be no more than 6 pages with two column format.
      It can be downloaded through the link
      <a href="http://uit.edu.mm/paper-format-ICAIT2018.doc" download="">
        <i>paper-format-ICAIT2018</i>
      </a>
      .
    </p>
    <hr />
    <table>
      <tbody>
        <tr>
          <th>
            <font color="red">IMPORTANT DATES</font>
          </th>
          <th>REGISTRATION FEES</th>
        </tr>
        <tr>
          <td>
            Submission Deadline&nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;{" "}
            <strike>
              31<sup>st</sup> July, 2018
            </strike>
            <strike>
              (31<sup>st</sup> August, 2018)
            </strike>
          </td>

          <td>Local Participant &nbsp; &nbsp; &nbsp;:&nbsp; &nbsp;70000 Ks</td>
        </tr>
        <tr>
          <td>
            Acceptance Notification : &nbsp; &nbsp; 20<sup>th</sup> September,
            2018
          </td>
          <td>Foreign Participant &nbsp;: &nbsp; &nbsp;200 USD</td>
        </tr>
        <tr>
          <td>
            Camera Ready &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp; 12<sup>th</sup> October, 2018
          </td>
          <td>
            Submission Email &nbsp;&nbsp;&nbsp;: &nbsp; &nbsp;
            <font color="red">icait2018@uit.edu.mm</font>
          </td>
        </tr>
        <tr>
          <td>
            Conference Dates &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;:&nbsp;&nbsp;&nbsp;1<sup>st</sup> - 2<sup>nd</sup> November,
            2018
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
  </Layout>
)

export default icait2017Page
