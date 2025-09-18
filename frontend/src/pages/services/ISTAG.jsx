import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
  title: "ISTAG",
  pageContent: {
    content: [
      {
        type: "paragraph",
        para: "The ISTAG acts as a link between the Institute and CSIR HQ as well as external agencies towards undertaking collaborative R&D activities and establish scientific interaction with them. This also includes assistance towards the realization of visits to the place of the interacting agencies."
      }
    ]
  }
}

function ISTAG({ isAdmin }) {
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

export default ISTAG
