import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// CSR page data
export const csrAmpri = {
  title: "Director's Secretariat",
  pageContent: {
    content: [
      { type: "subHeading", para: "The Director’s Secretariat" },
      {
        type: "paragraph",
        para: "The Secretariat helps in coordinating all the administratice works related to Director.  It also acts as a link between the Director and the staff of the institute as well as out side agencies/organizations.  It keeps the record of all documents needing supervision of Director."
      }
    ]
  }
}

function DirectorSecretariat({ isAdmin }) {
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

export default DirectorSecretariat