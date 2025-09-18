import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
  title: "Human Resource",
  pageContent: {
    content: [
      { type: "subHeading", para: "Human Resource Development" },
      {
        type: "paragraph",
        para: "The HRD aims at promoting professional human resource management in the institute by evolving a holistic human resource development plan under CSIR system. It helps the Institute to carry forward various activities pertaining to training and capacity build up of its staff, maintaining database of the existing human resource and interacting & coordinating with HRD-CSIR."
      }
    ]
  }
}

function HumanResourcePage({ isAdmin }) {
  return (
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      {/* Reusable ContentRenderer */}
      <ContentRenderer contentData={csrAmpri} />

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default HumanResourcePage
