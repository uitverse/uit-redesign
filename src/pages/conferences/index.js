import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"



const conferencesPage = () => (
  <Layout addMargin addSidebar="conferences">
    <SEO title="ICAIT 2019" />
    <h2>CALL FOR PAPERS</h2>
    <p>
      The 3rd International Conference on Advanced Information Technologies
      (ICAIT) will be held at Melia Yangon Hotel, Yangon, Myanmar on 6th and 7th
      November, 2019 organized by the University of Information Technology (UIT)
      under the Ministry of Education. It will cover the areas of research and
      development in the fields of advanced information technologies. The
      conference offers an excellent opportunity to learn and share the latest
      developments to interact with leading experts in the field. ICAIT, 2019
      will aim to strengthen the research laboratories, IT industries and
      universities.
    </p>
    <h2>KEYNOTE SPEAKERS</h2>
    <ul>
      <li>
        Dr. Tetsuo Asano, President of Japan Advanced Institute of Science and
        Technology (JAIST)
      </li>
      <li>
        Prof. Carlo Ghezzi, Professor of Software Engineering, Politecnico di
        Milano, Italy
      </li>
    </ul>
    <h2>TOPICS OF CONFERENCE</h2>
    <ul>
      <li> Advanced Computational Paradigms </li>
      <li> Big Data Methods and Analytics </li>
      <li>Cloud Computing </li>

      <li>Computer Vision and Image Processing</li>
      <li>Cyber Security and Data Forensics</li>
      <li>Database and Data Mining</li>
      <li>Embedded Systems and Digital Signal Processing</li>
      <li>Internet of Things and Cyber Physical Systems</li>
    </ul>
    <h2>PAPER SUBMISSION GUIDLINES</h2>
    Authors are invited to submit papers by <mark>31st July, 2019</mark>.
    Submitted papers must be original and should not have been published
    previously.The paper must be no more than 6 pages with two column format. It
    can be downloaded through the link{" "}
    <a href="http://uit.edu.mm/paper-format-ICAIT2019.doc">
      ICAIT2019-PaperFormat
    </a>
    .
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
            Submission Deadline&nbsp; &nbsp; &nbsp; : &nbsp; &nbsp; 31
            <sup>st</sup> July, 2019
          </td>

          <td>Local Participant &nbsp; &nbsp; &nbsp;:&nbsp; &nbsp;70000 Ks</td>
        </tr>
        <tr>
          <td>
            Acceptance Notification : &nbsp; &nbsp; 30<sup>th</sup> September,
            2019
          </td>
          <td>Foreign Participant &nbsp;: &nbsp; &nbsp;200 USD</td>
        </tr>
        <tr>
          <td>
            Camera Ready &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;: &nbsp; &nbsp; 15<sup>th</sup> October, 2019
          </td>
          <td>
            Submission Email &nbsp;&nbsp;&nbsp;: &nbsp; &nbsp;
            <font color="red">icait_conf@uit.edu.mm</font>
          </td>
        </tr>
        <tr>
          <td>
            Conference Dates &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;:&nbsp;&nbsp;&nbsp;6<sup>th</sup> - 7<sup>th</sup> November,
            2019
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
  </Layout>
)

export default conferencesPage
