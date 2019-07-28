import React from "react"
import Fade from "react-reveal"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { data } from "../../../../data/papers"

import "../../../styles/papers.scss"

const icait2017Papers = () => (
  <Layout addMargin>
    <SEO title="ICAIT 2017 Papers" />
    <h3>Papers Published in ICAIT 2017</h3>
    {data.icait2017.map((inset, index) => (
      <div className="topic">
        <h3>{inset.topic}</h3>
        <Fade up cascade>
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
        </Fade>
        <hr />
      </div>
    ))}
  </Layout>
)

export default icait2017Papers
