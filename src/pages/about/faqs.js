import React, { useEffect } from "react"
import { HelpCircle } from "react-feather"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../styles/faqs.scss"


const FAQPage = () => {
  useEffect(() => {
    for (let h of document.getElementsByClassName("faq-qs")) {
      h.addEventListener("click", () => {
        let hn = h.nextSibling
        if (hn.classList.contains("slide-up")) {
          // The box that we clicked has a class of bad so let's remove it and add the good class
          hn.classList.remove("slide-up")
          hn.classList.add("slide-down")
        } else {
          hn.classList.remove("slide-down")
          hn.classList.add("slide-up")
        }
      })
    }
  }, [])

  return (
    <Layout addMargin addSidebar="about">
      <SEO title="FAQs" />
      <dl id="faqlist">
        <dt className="faq-qs">
          <HelpCircle className="icon" />
          When was the UIT founded?
        </dt>
        <dd id="visitanswer" className="slide-down">
          <p>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The University of Computer
            Studies, Yangon was firstly known as UCC in 1971 but it changed into
            the Institute of Computer Science and Technology (ICST) in 1988. On
            1<sup>st</sup>July, 1998, it became the University of Computer
            Studies, Yangon. There are altogether 25 Computer Universities
            around the country. The University of Computer Studies (Bahan
            Campus) was separately established on 3<sup>rd</sup> December, 2012,
            as the Center of Excellence to produce the competent computer
            professionals and specialists who can carry out effectively for the
            sake of human society and natural environment for the development of
            human resources in ICT sector.{" "}
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The University has been
          officially renamed as the University of Information Technology (UIT)
          since 1<sup>st</sup>April, 2015. The University of Information
          Technology produces about 200 Undergraduate students every year. It
          also offers Undergraduate and Post-graduate courses for Bachelor,
          Diploma, Masterï¿½s and Doctorate level students in a wide range of
          subject areas: software engineering, high performance computing,
          business information system, communication and networking, embedded
          system and computer system technology. UIT is the main center of
          Research in ICT that can promote the productivity and the standard of
          living of the nation. .
        </dd>

        <dt className="faq-qs">
          <HelpCircle className="icon" />
          How do I contact the University?
        </dt>
        <dd id="contactanswer" className="hide slide-up">
          {" "}
          University of Information Technology, Parami Road, Hlaing Campus,
          Yangon, The Republic of the Union of Myanmar.
          <br /> Phone : 951-9664254
          <br /> Fax : 951-664250
          <br /> Email : hr.admin@uit.edu.mm
        </dd>

        <dt className="faq-qs">
          <HelpCircle className="icon" />
          What the requirments for the applicants?
        </dt>
        <dd id="applicantanswer" className="hide slide-up">
          The students are to get (
          <em>
            <strong>at least 450 total marks</strong>
          </em>
          )in the Matriculation Examination to apply the UIT. The candidates
          from the whole country are applicable to join this Universtiy.The time
          to join this university is in November.The basic requirements are:
          <p>- 4 Photographs of Applicant</p>
          <p>
            - Copies and Original of NRC Information of Applicant and
            Parents-copy
          </p>
          <p>- Copy and Original of Matriculation Exam Mark Receipt</p>
          <p>- Letter of recommendation of Police Station</p>
          <p>- Letter of recommendation of quarter</p>
        </dd>

        <dt className="faq-qs">
          <HelpCircle className="icon" />
          How long it will take for Graduate Program
        </dt>
        <dd id="durationanswer" className="hide slide-up">
          {" "}
          It will take five years to get a Bachelor's Degree.
        </dd>
        <dt className="faq-qs">
          <HelpCircle className="icon" />
          How many students are there in the university, now{" "}
        </dt>
        <dd id="numberofstudentanswer" className="hide slide-up">
          {" "}
          Current, there are about 500 hundred students.
        </dd>
      </dl>
    </Layout>
  )
}

export default FAQPage
