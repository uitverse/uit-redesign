import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"

const universityPage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="University Collaboration" />
    <h2>Industry Collaboration</h2>
    <p>
      UIT has established academic collaboration with the following
      universities:{" "}
    </p>
    <ul>
      <li>
        <a href="https://www.jaist.ac.jp/english/">
          Japan Advanced Institute of Science and Technology (JAIST)
        </a>
      </li>
      <li>
        <a href="http://en.saitama-u.ac.jp/">Saitama University, Japan</a>
      </li>
      <li>
        <a href="http://en.saitama-u.ac.jp/">
          Nagaoka University of Technology, Japan
        </a>
      </li>
      <li>
        <a href="http://www.okayama-u.ac.jp/index_e.html">
          Okayama University, Japan
        </a>
      </li>
      <li>
        <a href="https://www.aoyama.ac.jp/en/">
          Aoyama Gakuin University, Japan
        </a>
      </li>
      <li>
        <span>
          The Faculty of Engineering, University of the Ryukyus, Japan
        </span>
      </li>
      <li>
        <a href="https://www.iuj.ac.jp/gsim/">
          Graduate School of International Management, International University
          of Japan (IUJ), Japan
        </a>
      </li>
      <li>
        <a href="https://www.kw.ac.kr/en/index.do">
          Kwangwoon University, Korea
        </a>
      </li>
      <li>
        <a href="http://www.kau.ac.kr/page/english/main.jsp">
          Korea Aerospace University, Korea
        </a>
      </li>
      <li>
        <a href="https://uni.dongseo.ac.kr/eng/">Dongseo University, Korea</a>
      </li>
      <li>
        <a href="http://www.bdu.ac.kr/eng/01_about.html">
          Busan Digital University, Korea
        </a>
      </li>
      <li>
        <a href="https://www.jejunu.ac.kr/eng/">
          Jeju National University, Korea
        </a>
      </li>
      <li>
        <a href="https://ssru.ac.th/en/about/ssru">
          Suan Sunandha Rajabhat University, Thailand
        </a>
      </li>
      <li>
        <a href="http://www.must.edu.my/">
          Malaysia University of Science and Technology (MUST)
        </a>
      </li>
    </ul>
  </Layout>
)

export default universityPage
