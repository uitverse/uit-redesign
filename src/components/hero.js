import React, { useEffect } from "react"

import illustration from "../images/illustration.svg"
import "../styles/hero.scss"

const Hero = () => {
  useEffect(() => {
    let mover = document.getElementsByClassName("hero--illustration")[0]

    mover.addEventListener("mousemove", e => {
      mover.style.backgroundPositionX = -e.offsetX * 0.02 + "px"
      mover.style.backgroundPositionY = -e.offsetY * 0.02 + "px"
    })
  }, [])

  return (
    <section className="hero">
      <div
        className="hero--illustration"
        style={{
          width: `33rem`,
          background: `url(${illustration}) top left no-repeat`,
          backgroundSize: `contain`,
        }}
      >
        {/* <img src={illustration} alt="uit university" /> */}
      </div>
      <div className="hero--content">
        <h1 className="hero--head">
          University of <br /> Information Technology
        </h1>
        <p className="hero--description">
          A university where information never grow improfitable because of
          supportive tutors and passionate students.
        </p>
      </div>
    </section>
  )
}

export default Hero
