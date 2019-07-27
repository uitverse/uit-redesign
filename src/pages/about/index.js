import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"

const AboutPage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="About UIT" />
    <h2>Background Information of UIT</h2>
    <p>
      The University of Computer Studies, Yangon was firstly known as UCC in
      1971 but it changed into the Institute of Computer Science and Technology
      (ICST) in 1988. On 1st July, 1998, it becomes the University of Computer
      Studies, Yangon. There are altogether 25 Computer Universities around the
      country. The University of Computer Studies (Bahan Campus) was separately
      established on 3rd December,2012, as the Center of Excellence to produce
      the competent computer professionals and specialists who can carry out
      effectively for the sake of human society and natural environment for the
      development of human resources in ICT sector.
    </p>
    <p>
      The University has been officially renamed as the University of
      Information Technology (UIT) since 15 th April, 2015. The University of
      Information Technology produces about 200 Undergraduate students every
      year. It also offers Undergraduate and Post-graduate courses for Bachelor,
      Diploma, Master and Doctorate level students in a wide range of subject
      areas: software engineering, high performance computing, business
      information system, communication and networking, embedded system and
      computer system technology. UIT is the main center of Research in ICT that
      can promote the productivity and the standard of living of the nation.
    </p>
    <h2>Our Motto</h2>
    <p>"Towards a Brighter Future through Innovation in ICT"</p>
    <h2>Our Value</h2>
    <table>
      <tbody>
        <tr>
          <th>Integrity</th>
          <td>&nbsp;&nbsp;- to act ethically, honestly and with fairness</td>
        </tr>
        <tr>
          <th>Respect</th>
          <td>&nbsp;&nbsp;- to listen, value and acknowledge</td>
        </tr>
        <tr>
          <th>Excellence</th>
          <td>&nbsp;&nbsp;- to strive for excellence and distinction</td>
        </tr>
        <tr>
          <th>Innovation</th>
          <td>
            &nbsp;&nbsp;- to promote creative scholarly activites, programs,
            ideas and sustainable practices
          </td>
        </tr>
        <tr>
          <th>Collaboration</th>
          <td>
            &nbsp;&nbsp;- to enhance innovation through knowledge and technology
            exchange
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Our Vision</h2>
    <ul>
      <li>to be a leading local and international research-based university</li>
    </ul>
    <h2>Our Mission</h2>
    <ul>
      <li>
        to train and nurture effective and well-qualified human resources for
        the development of ICT sector for the nation
      </li>
      <li>to promote research in ICT sector of the nation</li>
      <li>
        to value the collaboration between universities and university-industry
        linkages
      </li>
      <li>
        to upgrade the curriculum appropriate with the advanced technology
      </li>
      <li>
        to have a sustainable and innovative learning and teaching environment
      </li>
    </ul>
  </Layout>
)

export default AboutPage
