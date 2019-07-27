import React from "react"

import Layout from "../../../components//layout"
import SEO from "../../../components/seo"

import { data } from "../../../../data/papers"

import "../../../styles/papers.scss"

const icait2018Papers = () => (
  <Layout addMargin>
    <SEO title="ICAIT 2018 Papers" />
    <h3>Papers Published in ICAIT 2018</h3>
    {data.icait2018.map((inset, index) => (
      <div className="topic">
        <h3>{inset.topic}</h3>
        <div className="papers">
          {inset.papers.map((item, i) => (
            <div className="paper">
              <div>
                <div className="flexbox">
                  <p>{item.title}</p>
                  <a href={item.link}>Download</a>
                </div>
                <p>
                  <strong>{item.authors.join(", ")}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    ))}
  </Layout>
)

export default icait2018Papers
