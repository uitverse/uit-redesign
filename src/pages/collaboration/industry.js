import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"



const industryPage = () => (
  <Layout addMargin addSidebar="collaboration">
    <SEO title="Industry Collaboration" />
    <h2>Industry Collaboration</h2>
    <p>
      UIT has established academic collaboration with the following industries:{" "}
    </p>
    <ul>
      <li>
        <a href="https://www.fujitsu.com/global/">Fujitsu Limited, Japan</a>
      </li>
      <li>
        <a href="https://oasmyanmar.com/en/">OAS Corporation Ltd., Japan</a>
      </li>
      <li>
        <span>
          Cross-border International Education Support Foundation (CIESF), Japan
        </span>
      </li>
      <li>
        <a href="http://www.hitachi.com/">Hitachi Limited, Japan</a>
      </li>
      <li>
        <a href="http://www.acromyanmar.com/">
          Acroquest Myanmar Co., Ltd., Japan
        </a>
      </li>
      <li>
        <span>
          International Electric Vehicle Expo Organizing Committee (IEVEOC) -
          Korea
        </span>
      </li>
      <li>
        <span>Myanmar Electrical and Electronic Association</span>
      </li>
      <li>
        <a href="http://www.accessspectrum.net/">Access Spectrum</a>
      </li>
    </ul>
  </Layout>
)

export default industryPage
