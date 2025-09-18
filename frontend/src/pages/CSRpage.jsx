import React from "react"
import Navbar from "../components/ui/Navbar"
import Topbar from "../components/ui/Topbar"
import Footer from "../components/ui/Footer"
import ContentRenderer from "../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
  title: "Corporate Social Responsibility (CSR)",
  pageContent: {
    content: [
      { type: "subHeading", para: "Invitation for industries and PSUs for CSR Activities" },
      {
        type: "paragraph",
        para: "Over the years CSIR has made significant contribution in scientific and industrial research and committed to pay more in nation building. CSIR and its laboratories aspire to join hand with industries and PSUs to tap Corporate Social Responsibility (CSR) funds for mobilizing S&T intervention as corporate sector is looking to channelize Corporate Social Responsibility (CSR) fund into research and development. The expansion of the scope of CSR fund can play a vital role in enhancing R&D activities in the country and will help to open a new window for large investment in research and development in the country to boost research and technology to meet desired solution of the societal problems."
      },
      {
        type: "paragraph",
        para: "CSIR-AMPRI, is seeking opportunity to work with the corporate to tap CSR fund for R&D activities/programmes. The institute has faculty and researchers of multidisciplinary background and has undertaken various sponsored studies for Government agencies such as DST, DBT, NITI Ayog, State S&T Councils and international agencies."
      }
    ]
  }
}

function CSR({ isAdmin }) {
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

export default CSR
