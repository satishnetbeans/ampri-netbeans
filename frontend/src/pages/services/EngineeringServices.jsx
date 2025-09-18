import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
  title: "Engineering Services",
  pageContent: {
    content: [
      { type: "subHeading", para: "AMPRI Engineering Services" },
      {
        type: "paragraph",
        para: "The group extends support towards the petty maintenance work pertaining to electrical fitting, plumbing, carpentry, painting etc. in the Institute as well as staff quarters and other infrastructural facilities such as water & power supply.  The group  extends support towards planning and designing civil construction and assists in installation of equipment in the Institute."
      }
    ]
  }
}

function EngineeringServices({ isAdmin }) {
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

export default EngineeringServices