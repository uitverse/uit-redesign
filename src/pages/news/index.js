import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"
import { data } from "../../../data/news"

const NewsPage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="News & Events" />
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            {item.more ? <a href={item.more}>Read More</a> : ``}
            <hr />
          </div>
        )
      })}
    </div>
  </Layout>
)

export default NewsPage
