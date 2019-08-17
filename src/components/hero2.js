import React from "react"
import Fade from "react-reveal/Fade"
import { data } from "../../data/latestnews"
import "../styles/latestnews.scss"

const LatestNews = () => (
  <section className="latestnews">
    <div className="wrapper">
      <Fade up duration={300} distance="20%">
        <h3 className="header">Latest News</h3>
        <Fade up duration={300} distance="20%">
          <div className="news">
            {data.map((item, index) => {
              return (
                <div className="item-wrapper" key={index}>
                  <div className="img-box" style={{
                    background: `url(/images/${item.cover}) left top / cover no-repeat`
                  }}></div>
                  <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  </div>
                  {/* {item.more ? <a href={item.more}>Read More</a> : ``} */}
                </div>
              )
            })}
          </div>
        </Fade>
      </Fade>
    </div>
  </section>
)

export default LatestNews
