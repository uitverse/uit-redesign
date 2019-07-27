import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const HardwareLabPage = () => (
  <Layout addMargin>
    <SEO title="Hardware Lab" />
    <h3>Kinds of Lab doing at Hardware Lab</h3>
    <ol type="1">
      <li> Digital Circuits Lab</li>
      <p>
        This lab is aimed for 1st Year students to get the practical knowledge
        for their Digital System Design I and Digital System Design II subjects.
      </p>
      <li> Advanced Digital Circuit Lab</li>
      <p>
        This lab is aimed for 4th Year (ES) students to design the digital
        system and understand the respective subject Digital System Design with
        VHDL.
      </p>
      <li> Analog Circuit Lab</li>
      <p>
        This lab is aimed for 2nd Year and 3rd Year students to understand the
        Engineering Circuit and Signals and Systems subjects well in practical
        approach and to make their own circuits.
      </p>
      <li> Microcontroller Lab</li>
      <p>
        This lab is aimed for 4th Year (ES) students for knowing Microcontroller
        Programming and Embedded System Architecture subjects well and make one
        own design.
      </p>
      <li> Signal Processing Lab</li>
      <p>
        This lab is aimed for 4th Year (ES) students for Digital Signal
        Processing subjects and 5th Year (ES) students for Image Processing
        subjects' practical work.
      </p>
      <li> Control System Lab</li>
      <p>
        This lab is aimed for 4th Year (ES) students for Modern Control System
        and Applied Control System subjects' practical work.
      </p>{" "}
    </ol>
  </Layout>
)

export default HardwareLabPage
