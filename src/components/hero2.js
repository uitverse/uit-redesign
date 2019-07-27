import React from "react"

import { data } from "../../data/latestnews"
import "../styles/latestnews.scss"

const LatestNews = () => (
  <section className="latestnews">
    <div className="wrapper">
      <h3 className="header">Latest News</h3>
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
  </section>
)

export default LatestNews
