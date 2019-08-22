import React from "react"
import Fade from "react-reveal"
import { ArrowRight } from "react-feather"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { data } from "../../../data/news"

const NewsPage = () => (
  <Layout addMargin addSidebar="news">
    <SEO title="News & Events" />

    <div className="news-page">
      <Fade up distance="20%">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              {item.more ? (
                <a href={item.more} title={item.more}>
                  Read More <ArrowRight size="20" />
                </a>
              ) : (
                ``
              )}
              <hr />
            </div>
          )
        })}
      </Fade>
    </div>
  </Layout>
)

export default NewsPage
