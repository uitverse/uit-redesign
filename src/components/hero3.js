import React from "react"
import Fade from "react-reveal/Fade"

import "../styles/hero3.scss"

const hero3 = () => (
  <section className="hero3">
    <Fade up cascade duration={500}>
      <div>
        <span className="hero3-num">06</span>
        <span className="hero3-text">Years Milestone</span>
      </div>
      <div>
        <span className="hero3-num">1400+</span>
        <span className="hero3-text">Graduated Students</span>
      </div>
      <div>
        <span className="hero3-num">23</span>
        <span className="hero3-text">Collaborated Partners</span>
      </div>
    </Fade>
  </section>
)

export default hero3
