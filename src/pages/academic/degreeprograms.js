import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"

const DegreeProgramsPage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="Degree Programs" />
    <h2>Degree Programs</h2>
    <p>
      The University of Information Technology offers undergraduate and
      postgraduate courses for bachelor's, diploma, master's, and doctoral level
      students in a wide range of subject areas: software engineering, high
      performance computing, business information system, communication and
      networking, embedded systems and computer systems technology.{" "}
    </p>
    <div>
      <table>
        <tbody>
          <tr>
            <th>Undergraduate Program</th>
            <th>Graduate Program</th>
          </tr>
          <tr>
            <td width="35%" valign="top">
              <ul>
                <li>Computer Science</li>
                <ul>
                  <li>
                    <Link to="/degree/SE">B.C.Sc.(Software Engineering)</Link>
                  </li>
                  <li>
                    <Link to="/degree/BIS">
                      B.C.Sc.(Business Information Systems)
                    </Link>
                  </li>{" "}
                  <li>
                    {" "}
                    <Link to="/degree/KE">B.C.Sc.(Knowledge Engineering)</Link>
                  </li>
                  <li>
                    <Link to="/degree/HPC">
                      B.C.Sc.(High Performance Computing)
                    </Link>
                  </li>
                </ul>
                <li>Computer Technology</li>
                <ul>
                  <li>
                    <Link to="/degree/ES">B.C.Tech.(Embedded Systems)</Link>
                  </li>
                  <li>
                    <Link to="/degree/CN">
                      B.C.Tech.(Communication and Networking)
                    </Link>
                  </li>
                  <li>
                    <Link to="/degree/CS">B.C.Tech.(Computer Systems)</Link>
                  </li>
                </ul>{" "}
              </ul>
            </td>
            <td width="35%" valign="top">
              <ul>
                <li>Doctor Degree Program</li>
                <li>
                  Master Degree Program
                  <ul>
                    <li>
                      Computer Science
                      <ul>
                        <li>
                          <Link to="/degree/MSE">
                            M.C.Sc.(Software Engineering)
                          </Link>
                        </li>
                        <li>
                          <Link to="/degree/MBIS">
                            M.C.Sc.(Business Information Systems)
                          </Link>
                        </li>{" "}
                        <li>
                          {" "}
                          <Link to="/degree/MKE">
                            M.C.Sc.(Knowledge Engineering)
                          </Link>
                        </li>
                        <li>
                          <Link to="/degree/MHPC">
                            M.C.Sc.(High Performance Computing)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Computer Technology
                      <ul>
                        <li>
                          <Link to="/degree/MES">
                            M.C.Tech.(Embedded Systems)
                          </Link>
                        </li>
                        <li>
                          <Link to="/degree/MCN">
                            M.C.Tech.(Communication and Networking)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <Link to="/degree/PGD">Post Graduate Program</Link>
                </li>
                <ul>
                  <li>
                    <Link to="/degree/WebEngineeringCourse">
                      Post Graduate Diploma in Web Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/degree/PGDNE">
                      Post Graduate Diploma in Network Engineering
                    </Link>
                  </li>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h2>Program Highlight</h2>
      <ul>
        <li>concentrates on creating links between theory and practice</li>
        <li>
          covers a wide variety of software and hardware technologies and their
          applications
        </li>
        <li>
          is designed to equip students with the fundamental understanding and
          practical skills needed by the future leaders of computing and related
          professions
        </li>
      </ul>
      <h2>Career</h2>
      <ul>
        <li>Software Industries</li>
        <li>IT-Business Organization</li>
        <li>Academic Institutions</li>
      </ul>
    </div>
  </Layout>
)

export default DegreeProgramsPage
