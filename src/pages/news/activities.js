import React from "react"
import Fade from "react-reveal"
import { ArrowRight } from "react-feather"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { data } from "../../../data/activity"

const ActivitiesPage = () => (
  <Layout addMargin addSidebar="news">
    <SEO title="Uni Activities" />
    <div>
      <Fade up distance="20%">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              {item.more ? (
                <a href={item.more} title={item.more}>
                  Read More <ArrowRight size="20" color="#008080" />
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

export default ActivitiesPage
