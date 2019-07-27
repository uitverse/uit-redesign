import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"



const AcademicPage = () => (
  <Layout addMargin addSidebar="academic">
    <SEO title="Academic" />
    <p>
      {" "}
      The University of Information Technology offers the education needed for
      leadership in a rapidly changing world. It also offers a breadth of highly
      regarded degree programs that allow the students the freedom to explore
      their intellectual skills and personal passions. The university has a wide
      range of policies and procedures to regulate its activities.
    </p>

    <p>
      The University of Information Technology offers courses for undergraduate
      and postgraduate such as Bachelor's Degree, Master's Degree, Diploma and
      Ph.D. Degree in a wider range of subject areas: software engineering, high
      performance computing, business information system, communication and
      networking, embedded system and computer system technology. .
    </p>
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <ul>
                <li>Undergraduate Programs</li>
                <ul>
                  <li>Five Years for Bachelor Program</li>
                  <li>Examination</li>
                  <ul>
                    <li>exam (mark-based)</li>
                    <li>Tutorial</li>
                    <li>Practical</li>
                  </ul>
                </ul>
              </ul>
            </td>
            <td>
              <ul>
                <li>Graduate Programs</li>
                <ul>
                  <li>Post Graduate Programs</li>
                  <ul>
                    <li>Post Graduate Diploma in Web Engineering</li>
                  </ul>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default AcademicPage
