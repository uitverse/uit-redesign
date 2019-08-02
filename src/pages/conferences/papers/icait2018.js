import React from "react"
import Fade from "react-reveal"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { data } from "../../../../data/papers"

import "../../../styles/papers.scss"

const icait2017Papers = () => (
  <Layout addMargin>
    <SEO title="ICAIT 2018 Papers" />
    <h3>Papers Published in ICAIT 2017</h3>
    {data.icait2018.map((inset, index) => (
      <div className="topic" key={index}>
        <h3>{inset.topic}</h3>
        <Fade up cascade distance="20%">
          <div className="papers">
            {inset.papers.map((item, i) => (
              <div className="paper" key={i}>
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
        </Fade>
        <hr />
      </div>
    ))}
  </Layout>
)

export default icait2017Papers
