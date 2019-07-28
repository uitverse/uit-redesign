import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { data } from "../../../data/activity"

const ActivitiesPage = () => (
  <Layout addMargin addSidebar="news">
    <SEO title="Uni Activities" />
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

export default ActivitiesPage
