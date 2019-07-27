import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"

const welcomePage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="Welcome to UIT" />
    <div>
      <p>Welcome to The University of Information Technology!</p>

      <p>
        The university was founded on December, 2012 as the Center of Excellence
        which is one of the highest and the most innovative institutions under
        the Ministry of Education.
      </p>

      <p>
        With the aims of promoting as the best Asian University in its academic
        profile, UIT opens its doors for cooperation, research and development.
        The University is intended to have the connection and collaborations
        with foreign Universities, Foreign IT compaines and local IT industries.
        These collaborations are giving the new opportunities for faculty,
        students and all workers. These can improve the quality of teaching and
        research. Our university is also ready to join together with all
        students, industrialists and entrepreneurs who wish to support and
        promote technology and IT education and career in Myanmar.
      </p>

      <p>
        It is convinced that every student at our University will feel satisfied
        with our teaching environment and classroom materials. It is also sure
        that the graduate students from our university are able to fulfill a
        shortage of experts and professionals not only in Myanmar IT industry
        but also in the International IT industry. We warmly welcome you to
        experience an exciting academic, business, industrial and professional
        environment at UIT.
      </p>
      <div className="welcome--sign">
        <span>Dr. Saw Sanda Aye</span>
        <br />
        <span>Rector</span>
      </div>
    </div>
  </Layout>
)

export default welcomePage
